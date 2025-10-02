import path from 'path';

import { reuse } from 'alias-reuse';
import { defineConfig } from 'vite';
import { checker } from 'vite-plugin-checker';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    svgr(),
    checker({
      typescript: true,
    }),
  ],
  root: './src',
  build: {
    target: 'esnext',
    outDir: '../dist',
    minify: true,
  },
  resolve: {
    alias: reuse()
      .from(path.join(__dirname, 'tsconfig.json'))
      .for('vite'),
  },
});
