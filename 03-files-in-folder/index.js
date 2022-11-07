const fs = require('fs');
const path = require('path');

fs.readdir('secret-folder', { withFileTypes: true }, (err, data) => {
  data.forEach((e) => {
    if (e.isFile()) {
      fs.stat(`secret-folder/${e.name}`, (err, size) => {
        if (err) {
          throw err;
        } else {
          console.log(
            `${path.parse(e.name).name} - ${path.extname(e.name).slice(1)} - ${size.size} bytes`,
          );
        }
      });
    }
  });
});
