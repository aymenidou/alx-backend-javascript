interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;

}
const student1: Student = {
  firstName: "Mike",
  lastName: "Fun",
  age: 5,
  location: "Earth",
};
const student2: Student = {
  firstName: "Jake",
  lastName: "Fun",
  age: 5,
  location: "Mars",
};
let studentsList: Array<Student> = [
  student1, student2
];


const table = document.createElement('table');
const tableHead = document.createElement('thead');
const headRow = document.createElement('tr');
const tableBody = document.createElement('tbody');
headRow.insertAdjacentHTML('beforeend', '<th>First Name</th>')
headRow.insertAdjacentHTML('beforeend', '<th>Location</th>')
tableHead.insertAdjacentElement('beforeend', headRow)

studentsList.forEach(element => {
  const bodyRow = document.createElement('tr');
  bodyRow.insertAdjacentHTML('beforeend', `<td>${element.firstName}</td>`)
  bodyRow.insertAdjacentHTML('beforeend', `<td>${element.location}</td>`)
  tableBody.insertAdjacentElement('beforeend', bodyRow)
});

table.setAttribute('border', '1')
table.insertAdjacentElement('beforeend', tableHead)
table.insertAdjacentElement('beforeend', tableBody)
document.body.insertAdjacentElement('beforeend', table)
