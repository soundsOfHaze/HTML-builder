const fs = require('fs');
const path = require('path');

fs.mkdir(path.join(__dirname, 'project-dist'), { recursive: true }, (err) => {
  if (err) {
    throw err;
  } else {
    fs.writeFile('project-dist/index.html', '', (err) => {
      if (err) {
        throw err;
      } else {
        fs.copyFile(`template.html`, `project-dist/index.html`, (err) => {
          if (err) {
            console.log(err);
          } else {
            fs.readFile(`${__dirname}/project-dist/index.html`, 'utf-8', (err, data) => {
              fs.readdir('components', (err, files) => {
                files.forEach((el) => {
                  fs.readFile(`components/${el}`, 'utf-8', (err, content) => {
                    data = data.replace(`{{${path.parse(el).name}}}`, content);
                    fs.writeFile('project-dist/index.html', data, (e) => {
                      if (e) console.log(e);
                    });
                  });
                });
              });
            });
          }
        });
      }
    });
    fs.writeFile('project-dist/style.css', '', (err) => {
      if (err) {
        throw err;
      } else {
        fs.readdir('styles', (err, data) => {
          data.forEach((e) => {
            if (path.extname(e) === '.css') {
              fs.readFile(`styles/${e}`, (err, data) => {
                fs.appendFile('project-dist/style.css', data, (err) => {
                  if (err) {
                    throw err;
                  }
                });
              });
            }
          });
        });
      }
    });
  }
});
fs.mkdir(path.join(`${__dirname}/project-dist`, 'assets'), { recursive: true }, (err) => {
  if (err) {
    throw err;
  } else {
    fs.readdir('assets', (err, data) => {
      if (err) {
        throw err;
      } else {
        data.forEach((e) => {
          fs.mkdir(
            path.join(`${__dirname}/project-dist/assets`, `${e}`),
            { recursive: true },
            (err) => {
              if (err) {
                throw err;
              } else {
                fs.readdir('assets', (err, data) => {
                  if (err) {
                    throw err;
                  } else {
                    data.forEach((e) => {
                      fs.readdir(`assets/${e}`, (err, file) => {
                        if (err) {
                          throw err;
                        } else {
                          file.forEach((el) => {
                            fs.copyFile(
                              `assets/${e}/${el}`,
                              `project-dist/assets/${e}/${el}`,
                              (err) => {
                                if (err) {
                                  console.log(err);
                                }
                              },
                            );
                          });
                        }
                      });
                    });
                  }
                });
              }
            },
          );
        });
      }
    });
  }
});
