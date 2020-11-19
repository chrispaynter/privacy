const https = require('https');
const fs = require('fs');


export const download = function(url:string, dest:string, cb:(error:string) => void) {
  const file = fs.createWriteStream(dest);
  https.get(url, function(response:any) {
    response.pipe(file);
    file.on('finish', function() {
      file.close(cb);  // close() is async, call cb after close completes.
    });
  }).on('error', function(err:any) { // Handle errors
    fs.unlink(dest); // Delete the file async. (But we don't check the result)
    if (cb) cb(err.message);
  });
};
