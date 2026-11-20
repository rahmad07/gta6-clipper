// gta6-clipper-01: this program hands in the clip's YouTube address.
// It reads VIDEO.json from the repository root and writes an identical
// copy into the output directory, where the house reads it. That is the
// whole job: the video itself is the entry, and this file only points
// at it. VIDEO.json starts as a placeholder and is replaced with the
// real YouTube address once the clip is uploaded.
//
// Local test (outside the grader): mkdir -p out &&
//   MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outDir, { recursive: true });

const source = join(botDir, 'VIDEO.json');
const target = join(outDir, 'VIDEO.json');

try {
  copyFileSync(source, target);
} catch (error) {
  console.error(`Could not copy VIDEO.json from ${source} to ${target}: ${(error as Error).message}`);
  process.exit(1);
}
