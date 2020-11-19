import cleaner from "./cleaner";
import { CLEANED_HOSTNAMES_FILE } from "./constants";

cleaner(
  'https://raw.githubusercontent.com/notracking/hosts-blocklists/master/hostnames.txt',
  "[HOSTNAMES]",
  './temp/notracking-hostnames.txt',
  CLEANED_HOSTNAMES_FILE,
  line => line.replace(":: ", ""));