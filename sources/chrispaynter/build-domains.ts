import { ruleSetBuilder } from "../../builder";
import fs from 'fs';
import readline from 'readline';

const builder = ruleSetBuilder(
  'domains',
  'Chris Paynter - Domains',
  'My adhoc list of domains that I catch in Little Snitch',
  '');


const readInterface = readline.createInterface({
  input: fs.createReadStream('sources/chrispaynter/domains.txt')
});

readInterface.on('line', function (line: string) {
  builder.addDeniedDomain(line);
});

readInterface.on('close', () => {
  builder.build('./dist/chrispaynter-domains.lsrules');
})