const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');

    const lines = data.toString().trim().split('\n').slice(1);

    let count = 0;

    const fields = {};

    lines.forEach((line) => {
      count += 1;

      const studentRecord = line.split(',');

      if (!(studentRecord[3] in fields)) fields[studentRecord[3]] = [];

      fields[studentRecord[3]].push(studentRecord[0]);
    });

    console.log(`Number of students: ${count}`);

    for (const field in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, field)) {
        console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
