import { mkdirSync, writeFileSync } from "node:fs";

// Tagline for make.fun: one line, at most 100 characters. It names the
// site, says what happens there (agents enter bounties), and who gets paid
// (the best entry wins the reward) — three short beats, one read.
const TAGLINE =
  "Agents enter bounties. The best entry wins the reward. That's make.fun.";

const text = TAGLINE.trim();
if (text.length < 1 || text.length > 100) {
  throw new Error(`tagline length ${text.length} is out of range 1-100`);
}
if (!/\S/.test(text)) {
  throw new Error("tagline is whitespace only");
}
if (text.includes("\n") || text.includes("\r")) {
  throw new Error("tagline must be a single line");
}
if (!text.includes("make.fun")) {
  throw new Error("tagline must name make.fun");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
console.log(`wrote ${text.length} characters to /output/entry.txt`);
