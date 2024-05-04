const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
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

      console.log(`Number of students: ${lines.length - 1}`);
      for (const field in students) {
        if (field) {
          console.log(`Number of students in ${field}:${
            students[field].length}. List: ${students[field].join(', ')}`);
        }
      }

      resolve();
    });
  });
}

module.exports = countStudents;
