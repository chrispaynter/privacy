import cleaner from "./cleaner";
import { CLEANED_DOMAINS_FILE } from "./constants";


cleaner(
  'https://raw.githubusercontent.com/notracking/hosts-blocklists/master/domains.txt',
  "[DOMAINS]",
  './temp/notracking-domains.txt',
  CLEANED_DOMAINS_FILE,
  line => line.replace("address=/", "").replace("/::", ""));