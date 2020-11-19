import fs from 'fs';
import readline from 'readline';
import { ruleSetBuilder } from "../../builder";
import { CLEANED_DOMAINS_FILE } from './constants';

const builder = ruleSetBuilder(
  'No Tracking - Domains', 
  'List built from https://github.com/notracking/hosts-blocklists',
  'https://github.com/notracking/hosts-blocklists');

const readInterface = readline.createInterface({
  input: fs.createReadStream(CLEANED_DOMAINS_FILE)
});

readInterface.on('line', function(line:string) {
  builder.addDeniedDomain(line);
});

readInterface.on('close', () => {
  builder.build('./dist/notracking-domains.lsrules');
})