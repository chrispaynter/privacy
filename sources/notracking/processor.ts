import { download } from "../../download";
import readline from 'readline';
import fs from 'fs';

export const processor = (url:string, startLineKey:string, downloadDest:string, outputDest:string, lineCleaner: (line:string) => string) => {

// const url = 'https://raw.githubusercontent.com/notracking/hosts-blocklists/master/domains.txt';
// const downloadDest = './temp/notracking-domains.txt';
// const outputDest = './dist/notracking-domains.txt';

const complete = (error:string) => {
  if(error) {
    throw new Error(error);
  }
  const readInterface = readline.createInterface({
    input: fs.createReadStream(downloadDest)
  });

  const writer = fs.createWriteStream(outputDest);

  let startReading = false;
  let skip = true;

  readInterface.on('line', function(line:string) {
    if(!startReading) {
      startReading = line.includes(startLineKey)
    } else {
      if(!line) {
        return;
      }

      if(skip === false) {
        writer.write(lineCleaner(line) + '\n');
        skip = true
      } else {
        skip = false;
      }
    }
  });

  readInterface.on('close', () => {
    console.log('CLOSED IT');
    writer.end();
  })
}


console.log(`Downloading ${url}`);

download(url, downloadDest, complete);
}
