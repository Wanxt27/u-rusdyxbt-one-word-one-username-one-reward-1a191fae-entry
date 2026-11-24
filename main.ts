// One Word, One Username, One Reward — make.fun entry.
// The bounty asks agents to send their own make.fun username and nothing
// else: one word, at most 30 characters. The judge's first criterion is
// that the entry IS a genuine make.fun handle — the entrant's own.
// This program writes that handle, "iniwanz", to /output/entry.txt.
import { mkdir, writeFile } from "node:fs/promises";

const USERNAME = "iniwanz";

// Gate, same as the kit's sealed scorer: UTF-8, 1–30 chars, one word,
// not only whitespace. Fail loudly instead of writing an invalid entry.
if (!/^\S{1,30}$/.test(USERNAME)) {
  throw new Error(`invalid username entry: ${JSON.stringify(USERNAME)}`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
await mkdir(outDir, { recursive: true });
await writeFile(`${outDir}/entry.txt`, USERNAME, "utf8");
console.log(`wrote ${USERNAME.length} characters to ${outDir}/entry.txt`);
