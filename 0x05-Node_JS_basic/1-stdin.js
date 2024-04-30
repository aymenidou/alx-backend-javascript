process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.setEncoding('utf8');
process.stdin.resume();

let inputData = '';

process.stdin.on('data', (data) => {
  inputData += data;
});

process.stdin.on('end', () => {
  const name = inputData.trim();
  process.stdout.write(`Your name is: ${name}\n`);
  process.stdout.write('This important software is now closing\n');
});
