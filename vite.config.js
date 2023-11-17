/** @type {import('vite').UserConfig} */
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig(({ command, mode }) => {
  return {
    base: command === 'build' ? '/G20Calendar/' : '/',
    define: {
      // By default, Vite doesn't include shims for NodeJS/
      // necessary for segment analytics lib to work
      global: {},
    },
    plugins: [
      react({ jsxImportSource: '@emotion/react' }),
      dts({
        insertTypesEntry: true,
        copyDtsFiles: true
      }),
      cssInjectedByJsPlugin()
    ],
   
  };
});
