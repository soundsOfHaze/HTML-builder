const fs = require('fs');
const { join } = require('path');
const path = require('path');

fs.mkdir(path.join(__dirname, 'files-copy'), { recursive: true }, (err) => {
  if (err) {
    throw err;
  }
});

fs.readdir('files', (err, data) => {
  data.forEach((e) => {
    fs.copyFile(`files/${e}`, `files-copy/${e}`, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('done!');
      }
    });
  });
});
