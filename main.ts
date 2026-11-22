// The plan make.fun will carry out in public.
// Writes a 30-day plan for turning $100 into the most money to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const plan =
  "Sell AI product-photo packs to Etsy sellers: $49 for 10 studio photos. " +
  "Find buyers in Etsy seller forums and Fiverr. " +
  "Spend $30 boosting the gig, $20 on portfolio. " +
  "Day 1: post 5 free samples in seller groups. " +
  "Edge: 24h delivery, handmade jewelry only. " +
  "Expect ~$400 by day 30.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", plan, "utf8");
console.log(`Wrote ${[...plan].length} characters to /output/entry.txt`);
