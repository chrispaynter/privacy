import { download } from "../../download";
import readline from 'readline';
import fs from 'fs';

export default (url:string, startLineKey:string, downloadDest:string, outputDest:string, lineCleaner: (line:string) => string) => {
  const complete = (error:string) => {
    if(error) {
      throw new Error(error);
    }
    console.log('Cleaning source file');
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
      console.log(`Finished writing cleaned file to \'${outputDest}\'`)
      writer.end();
    })
  }

  console.log(`Downloading ${url}`);
  download(url, downloadDest, complete);
}
