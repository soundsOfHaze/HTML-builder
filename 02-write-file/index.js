const readline = require('readline');
const fs = require('fs');

let line = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Hello, enter your text =)\n',
});

line.prompt();
fs.writeFile('text.txt', '', (err) => {
  if (err) {
    throw err;
  }
});
line.on('line', (data) => {
  if (data === 'exit') {
    line.write('bye');
    line.close();
  } else {
    fs.appendFile('text.txt', data, (err) => {
      if (err) {
        throw err;
      }
    });
  }
});
