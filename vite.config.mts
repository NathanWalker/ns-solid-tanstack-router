import alias from '@rollup/plugin-alias';
import { baseConfig } from '@nativescript/vite/base';
import solid from '@solidjs/vite-plugin';
import { tanstackRouter } from '@tanstack/router-plugin/vite';
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import { defineConfig, mergeConfig } from 'vite';

const require = createRequire(import.meta.url);
const packageDir = (spec: string) => dirname(require.resolve(`${spec}/package.json`));

// Solid 2's exports map resolves `node` to the SSR build, which renders once and
// never updates. Every entry point is pinned to an explicit browser bundle so the
// app, the renderer and the router share a single reactive core. Matches are
// anchored: subpaths like `solid-js/internal` must fall through to the exports map.
const solidAliases = (prod: boolean) => [
  { find: /^solid-js$/, replacement: join(packageDir('solid-js'), 'dist', prod ? 'solid.js' : 'solid.dev.js') },
  { find: /^@solidjs\/signals$/, replacement: join(packageDir('@solidjs/signals'), 'dist', prod ? 'prod/index.js' : 'dev.js') },
  {
    // @solidjs/universal does not export ./package.json; its default entry lives in dist/.
    find: /^@solidjs\/universal$/,
    replacement: join(dirname(require.resolve('@solidjs/universal')), prod ? 'universal.js' : 'universal.dev.js'),
  },
];

export default defineConfig(({ mode }) => {
  const prod = mode !== 'development';

  return mergeConfig(baseConfig({ mode, flavor: 'solid' }), {
    plugins: [
      // Reads tsr.config.json; must run before the Solid compiler.
      tanstackRouter({ target: 'solid', autoCodeSplitting: false }),
      { ...alias({ entries: solidAliases(prod) }), enforce: 'pre' },
      solid({
        dev: !prod,
        // NativeScript's dev-server runtime drives module replacement itself.
        refresh: false,
        solid: {
          generate: 'universal',
          hydratable: false,
          moduleName: '@nativescript-community/solid-js',
        },
      }),
    ],
    optimizeDeps: {
      exclude: ['module', 'node:module', '@nativescript/vite/solid-bootstrap'],
    },
  });
});
