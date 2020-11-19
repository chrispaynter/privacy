import { processor } from "./processor";

processor(
  'https://raw.githubusercontent.com/notracking/hosts-blocklists/master/hostnames.txt',
  "[HOSTNAMES]",
  './temp/notracking-hostnames.txt',
  './dist/notracking-hostnames.txt',
  line => line.replace(":: ", ""));