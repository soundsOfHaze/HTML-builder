const fs = require('fs');
const path = require('path');

// fs.mkdir(path.join(__dirname, 'project-dist'), { recursive: true }, (err) => {
//   if (err) {
//     throw err;
//   } else {
//     fs.writeFile(path.join(__dirname,'project-dist/index.html'), '', (err) => {
//       if (err) {
//         throw err;
//       } else {
//         fs.copyFile(`template.html`, `project-dist/index.html`, (err) => {
//           if (err) {
//             console.log(err);
//           } else {
//             fs.readFile(`${__dirname}/project-dist/index.html`, 'utf-8', (err, data) => {
//               fs.readdir('components', (err, files) => {
//                 files.forEach((el) => {
//                   fs.readFile(`components/${el}`, 'utf-8', (err, content) => {
//                     data = data.replace(`{{${path.parse(el).name}}}`, content);
//                     fs.writeFile(path.join(__dirname,'project-dist/index.html'), data, (e) => {
//                       if (e) console.log(e);
//                     });
//                   });
//                 });
//               });
//             });
//           }
//         });
//       }
//     });
//     fs.writeFile(path.join(__dirname,), '', (err) => {
//       if (err) {
//         throw err;
//       } else {
//         fs.readdir('styles', (err, data) => {
//           data.forEach((e) => {
//             if (path.extname(e) === '.css') {
//               fs.readFile(`styles/${e}`, (err, data) => {
//                 fs.appendFile(path.join(__dirname,), data, (err) => {
//                   if (err) {
//                     throw err;
//                   }
//                 });
//               });
//             }
//           });
//         });
//       }
//     });
//   }
// });
// fs.mkdir(path.join(`${__dirname}/project-dist`, 'assets'), { recursive: true }, (err) => {
//   if (err) {
//     throw err;
//   } else {
//     fs.readdir('assets', (err, data) => {
//       if (err) {
//         throw err;
//       } else {
//         data.forEach((e) => {
//           fs.mkdir(
//             path.join(`${__dirname}/project-dist/assets`, `${e}`),
//             { recursive: true },
//             (err) => {
//               if (err) {
//                 throw err;
//               } else {
//                 fs.readdir('assets', (err, data) => {
//                   if (err) {
//                     throw err;
//                   } else {
//                     data.forEach((e) => {
//                       fs.readdir(`assets/${e}`, (err, file) => {
//                         if (err) {
//                           throw err;
//                         } else {
//                           file.forEach((el) => {
//                             fs.copyFile(
//                               `assets/${e}/${el}`,
//                               `project-dist/assets/${e}/${el}`,
//                               (err) => {
//                                 if (err) {
//                                   console.log(err);
//                                 }
//                               },
//                             );
//                           });
//                         }
//                       });
//                     });
//                   }
//                 });
//               }
//             },
//           );
//         });
//       }
//     });
//   }
// });

// fs.promises
//   .mkdir(path.join(__dirname, 'project-dist'), { recursive: true }, (err) => {
//     if (err) throw err;
//   })
//   .then(() => {
//     fs.copyFile(
//       path.join(__dirname, `template.html`),
//       path.join(__dirname, `project-dist/index.html`),
//       (err) => {
//         if (err) throw err;
//         else {
//           fs.readFile(path.join(__dirname, 'project-dist/index.html'), 'utf8', (err, data) => {
//             if (err) {
//               throw err;
//             } else {
//               fs.readdir(path.join(__dirname, 'components'), (err, file) => {
//                 file.forEach((e) => {
//                   fs.readFile(path.join(__dirname, `components/${e}`), `utf8`, (err, content) => {
//                     let x = path.parse(e).name;
//                     data = data.replaceAll(`{{${x}}}`, content);
//                     fs.writeFile(path.join(__dirname, 'project-dist/index.html'), data, (err) => {
//                       if (err) throw err;
//                     });
//                   });
//                 });
//               });
//             }
//           });
//         }
//       },
//     );
//   });

fs.promises
  .mkdir(path.join(__dirname, 'project-dist'), { recursive: true }, (err) => {
    if (err) throw err;
  })
  .then(() => {
    fs.copyFile(
      path.join(__dirname, `template.html`),
      path.join(__dirname, `project-dist/index.html`),
      (err) => {
        if (err) throw err;
        else {
          fs.readFile(path.join(__dirname, 'project-dist/index.html'), 'utf8', (err, data) => {
            if (err) {
              throw err;
            } else {
              fs.readdir(path.join(__dirname, 'components'), (err, file) => {
                file.forEach((e) => {
                  fs.readFile(path.join(__dirname, `components/${e}`), `utf8`, (err, content) => {
                    let x = path.parse(e).name;
                    data = data.replaceAll(`{{${x}}}`, content);
                    fs.readFile(path.join(__dirname, `components/${e}`), `utf8`, (err, content) => {
                      // let x = path.parse(e).name;
                      // data = data.replaceAll(`{{${x}}}`, content);
                      fs.writeFile(path.join(__dirname, 'project-dist/index.html'), data, (err) => {
                        if (err) throw err;
                      });
                    });
                  });
                  // fs.readFile(path.join(__dirname, `components/${e}`), `utf8`, (err, content) => {
                  //   // let x = path.parse(e).name;
                  //   // data = data.replaceAll(`{{${x}}}`, content);
                  //   fs.writeFile(path.join(__dirname, 'project-dist/index.html'), data, (err) => {
                  //     if (err) throw err;
                  //   });
                  // });
                });
              });
            }
          });
        }
      },
    );
  });

// fs.promises
//   .readdir(path.join(__dirname, 'components'), (err, file) => {
//     file.forEach((e) => {
//       fs.readFile(path.join(__dirname, `components/${e}`), `utf8`, (err, content) => {
//         let x = path.parse(e).name;
//         data = data.replaceAll(`{{${x}}}`, content);
//         fs.writeFile(path.join(__dirname, 'project-dist/index.html'), data, (err) => {
//           if (err) throw err;
//         });
//       });
//     });
//   })

fs.promises
  .writeFile(path.join(__dirname, 'project-dist/style.css'), '', (err) => {
    if (err) throw err;
  })
  .then(() => {
    fs.readdir(path.join(__dirname, 'styles'), (err, data) => {
      data.forEach((e) => {
        fs.readFile(path.join(__dirname, `styles/${e}`), (err, data) => {
          fs.appendFile(path.join(__dirname, 'project-dist/style.css'), data, (err) => {
            if (err) throw err;
          });
        });
      });
    });
  });

fs.promises
  .mkdir(path.join(`${__dirname}/project-dist`, 'assets'), { recursive: true }, (err) => {
    if (err) throw err;
  })
  .then(() => {
    fs.readdir(path.join(__dirname, 'assets'), (err, data) => {
      if (err) throw err;
      else {
        data.forEach((e) => {
          fs.mkdir(
            path.join(`${__dirname}/project-dist/assets`, `${e}`),
            { recursive: true },
            (err) => {
              if (err) throw err;
            },
          );
        });
      }
    });
  })
  .then(() => {
    fs.readdir(path.join(__dirname, 'assets'), (err, data) => {
      if (err) throw err;
      else {
        data.forEach((e) => {
          fs.readdir(path.join(__dirname, `assets/${e}`), (err, file) => {
            if (err) throw err;
            else {
              file.forEach((el) => {
                fs.copyFile(
                  path.join(__dirname, `assets/${e}/${el}`),
                  path.join(__dirname, `project-dist/assets/${e}/${el}`),
                  (err) => {
                    if (err) throw err;
                  },
                );
              });
            }
          });
        });
      }
    });
  });
