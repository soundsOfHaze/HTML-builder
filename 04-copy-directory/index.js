const fs = require('fs');
const { join } = require('path');
const path = require('path');

fs.mkdir(path.join(__dirname, 'files-copy'), { recursive: true }, (err) => {
  if (err) {
    throw err;
  }
});

fs.readdir(path.join(__dirname, 'files'), (err, data) => {
  data.forEach((e) => {
    fs.copyFile(
      path.join(__dirname, `files/${e}`),
      path.join(__dirname, `files-copy/${e}`),
      (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log('done!');
        }
      },
    );
  });
});
