const fs = require('fs');

// Read file 'abcd.txt' with utf8 encoding
fs.readFile('abcd.txt', 'utf8', function(err, data) {
if (err) {
console.log(err);
       } else {
        console.log('done');
              // optionally print file contents:
              // console.log(data);
       }
});