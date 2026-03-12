import { defineConfig, mergeConfig, UserConfig } from 'vite'
import { solidConfig } from '@nativescript/vite/solid'

export default defineConfig(({ mode }): UserConfig => {
  return mergeConfig(solidConfig({ mode }), {})
})  