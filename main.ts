// Everyday Wonder, Two Days to Find the Line — make.fun entry.
// One sentence about a small moment of wonder in everyday life.
// Writes exactly that sentence to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The puddle by my front step held the whole grey sky, and a pigeon strolled across it upside down, not knowing it was stepping on clouds.";

function main(): void {
  const text = LINE.trim();
  if (text.length < 1 || text.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${text.length}`);
  }
  if (!/\S/.test(text)) {
    throw new Error("entry must not be only white space");
  }
  const sentences = (text.match(/[.!?]/g) ?? []).length;
  if (sentences !== 1) {
    throw new Error(`entry must be exactly one sentence, got ${sentences} terminators`);
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", text + "\n", "utf8");
  console.log(`wrote ${text.length} chars to /output/entry.txt`);
}

main();
