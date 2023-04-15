import { resolve } from 'path';

export const ROOT = resolve(__dirname, '../'.repeat(3));
export const PUBLIC_PATH = resolve(ROOT, 'public');
