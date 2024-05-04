const http = require('http');
const fs = require('fs');

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const databaseName = process.argv[2];
    if (!databaseName) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Cannot load the database');
      return;
    }

    fs.readFile(databaseName, 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error reading database.');
        return;
      }

      const lines = data
        .trim()
        .split('\n')
        .filter((line) => line !== '');

      const students = {};
      for (let i = 1; i < lines.length; i += 1) {
        const [firstname, , , field] = lines[i].split(',');
        if (!(field in students)) {
          students[field] = [];
        }
        students[field].push(firstname);
      }

      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.write('This is the list of our students\n');
      res.write(`Number of students: ${lines.length - 1}`);

      for (const student in students) {
        if (student) {
          res.write(`\nNumber of students in ${student}: ${students[student].length}. List: ${students[student].join(', ')}`);
        }
      }
      res.end();
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

app.listen(1245);

module.exports = app;
