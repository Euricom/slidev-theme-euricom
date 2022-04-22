import { resolve } from 'path';
import { defineWindiSetup } from '@slidev/types';
import windiConfig from '../windi.config';

export default defineWindiSetup(() => ({
  extract: {
    include: [resolve(__dirname, '**/*.vue')],
    exclude: [resolve(__dirname, 'node_modules')],
  },
  ...windiConfig,
}));
