import fs from 'fs';
import readline from 'readline';
import { ruleSetBuilder } from "../../builder";
import {  CLEANED_HOSTNAMES_FILE } from './constants';

const builder = ruleSetBuilder(
  'No Tracking - Hostnames', 
  'List built from https://github.com/notracking/hosts-blocklists',
  'https://github.com/notracking/hosts-blocklists');

const readInterface = readline.createInterface({
  input: fs.createReadStream(CLEANED_HOSTNAMES_FILE)
});

readInterface.on('line', function(line:string) {
  builder.addRule(line);
});

readInterface.on('close', () => {
  builder.build('./dist/notracking-hostnames.lsrules');
})