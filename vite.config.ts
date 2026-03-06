import { defineConfig, mergeConfig, UserConfig } from 'vite'
import { solidConfig } from '@nativescript/vite'

export default defineConfig(({ mode }): UserConfig => {
  return mergeConfig(solidConfig({ mode }), {})
})  