// TODO: Write Your JavaScript Code Here

var students = ['Jim', 'Henry', 'Sarah', 'Alice', 'Chris'];

console.log("There are " + students.length + " students in the class");

for (var i = 0; i < students.length; i++) {
    console.log("Great to see you " + students[i] + "!");
}

var i = 0;
while (i < students.length) {
  console.log("Great to see you " + students[i][0] + "!");
  i++;
}
