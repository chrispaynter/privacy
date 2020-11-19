import { processor } from "./processor";

processor(
  'https://raw.githubusercontent.com/notracking/hosts-blocklists/master/domains.txt',
  "[DOMAINS]",
  './temp/notracking-domains.txt',
  './dist/notracking-domains.txt',
  line => line.replace("address=/", "").replace("/::", ""));