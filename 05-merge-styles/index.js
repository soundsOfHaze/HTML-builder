const fs = require('fs');
const path = require('path');

fs.writeFile('project-dist/bundle.css', '', (err) => {
  if (err) {
    throw err;
  }
});

fs.readdir('styles', (err, data) => {
  data.forEach((e) => {
    if (path.extname(e) === '.css') {
      fs.readFile(`styles/${e}`, (err, data) => {
        fs.appendFile('project-dist/bundle.css', data, (err) => {
          if (err) {
            throw err;
          }
        });
      });
    }
  });
});
