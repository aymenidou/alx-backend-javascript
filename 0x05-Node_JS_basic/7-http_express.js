const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const databaseName = process.argv[2];
  if (!databaseName) {
    return res.status(500).send('Error: Database name not provided.');
  }

  fs.readFile(databaseName, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading database.');
    }

    const students = data.split('\n').filter((line) => line.trim() !== '');
    const numStudents = students.length;
    const csStudents = students.filter((student) => student.includes('CS')).length;
    const sweStudents = students.filter((student) => student.includes('SWE')).length;
    const csList = students.filter((student) => student.includes('CS')).map((student) => student.split(',')[0]);
    const sweList = students.filter((student) => student.includes('SWE')).map((student) => student.split(',')[0]);

    let response = 'This is the list of our students\n';
    response += `Number of students: ${numStudents}\n`;
    response += `Number of students in CS: ${csStudents}. List: ${csList.join(', ')}\n`;
    response += `Number of students in SWE: ${sweStudents}. List: ${sweList.join(', ')}\n`;

    res.send(response);
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

module.exports = app;
