import { ruleSetBuilder } from "../../builder";
import fs from 'fs';
import readline from 'readline';

const builder = ruleSetBuilder(
  'domains',
  'Chris Paynter - Tools (Domains)',
  'Blocking tools that can lead to tracking. I need to develop with some of these tools in my day to day work, so I maintain this list separately to easily turn it on and off.',
  '');


const readInterface = readline.createInterface({
  input: fs.createReadStream('sources/chrispaynter/tools.txt')
});

readInterface.on('line', function (line: string) {
  builder.addDeniedDomain(line);
});

readInterface.on('close', () => {
  builder.build('./dist/chrispaynter-tools.lsrules');
})