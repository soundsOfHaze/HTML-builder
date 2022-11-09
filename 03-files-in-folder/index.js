const fs = require('fs');
const path = require('path');

fs.readdir(path.join(__dirname, `secret-folder/`), { withFileTypes: true }, (err, data) => {
  data.forEach((e) => {
    if (e.isFile()) {
      fs.stat(path.join(__dirname, `secret-folder/${e.name}`), (err, size) => {
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
