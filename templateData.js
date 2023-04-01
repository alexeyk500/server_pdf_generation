const fs = require("fs");

function base64_encode(file) {
  const bitmap = fs.readFileSync(file);
  return new Buffer(bitmap).toString('base64');
}

const data = {
  title: 'A new alexeyK500 project',
  date: '01/04/2023',
  name: 'alexeyK500',
  age: 47,
  birthdate: '03/12/1975',
  course: 'GPN-DataCatalog',
  obs: 'started since 13 january 2023',
  logo: 'data:image/png;base64,' + base64_encode('logo.png'),
};

module.exports = data;
