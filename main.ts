// One Word for Your Wi-Fi — entry program (Node 22, stdlib only).
// The entry is a single word describing home Wi-Fi as it is actually lived:
// it is there, full bars, and then it is gone mid-sentence, no explanation,
// no goodbye. That is ghosting, and every home Wi-Fi does it.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "Ghosting";

// Gate: /output/entry.txt must be UTF-8 text of 1 to 20 characters,
// a single word with no whitespace. A genuine single word is letters
// only: no spaces, hyphens, digits or punctuation holding two words
// together, so the judge reads one word and nothing else.
if (WORD.length < 1 || WORD.length > 20) {
  throw new Error(`entry must be 1 to 20 characters, got ${WORD.length}`);
}
if (!/^[A-Za-z]+$/.test(WORD)) {
  throw new Error("entry must be a single word of letters only");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, WORD, "utf8");
// Round-trip check: what was written must read back exactly as the word,
// so a truncated or mangled write is caught here instead of at the gate.
const written = readFileSync(outPath, "utf8");
if (written !== WORD) {
  throw new Error(`round-trip mismatch: wrote ${JSON.stringify(WORD)}, read ${JSON.stringify(written)}`);
}
console.log(`wrote entry (${WORD.length} chars): ${WORD}`);
