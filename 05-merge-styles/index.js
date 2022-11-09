const fs = require('fs');
const { dirname } = require('path');
const path = require('path');

fs.writeFile(path.join(__dirname, 'project-dist/bundle.css'), '', (err) => {
  if (err) {
    throw err;
  }
});

fs.readdir(path.join(__dirname, 'styles'), (err, data) => {
  data.forEach((e) => {
    if (path.extname(e) === '.css') {
      fs.readFile(path.join(__dirname, `styles/${e}`), (err, data) => {
        fs.appendFile(path.join(__dirname, 'project-dist/bundle.css'), data, (err) => {
          if (err) {
            throw err;
          }
        });
      });
    }
  });
});
