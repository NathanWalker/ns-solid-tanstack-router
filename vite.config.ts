import { defineConfig, UserConfig } from 'vite'
import { solidConfig } from '@nativescript/vite/solid'

export default defineConfig(({ mode }): UserConfig => {
  return solidConfig({ mode })
})  