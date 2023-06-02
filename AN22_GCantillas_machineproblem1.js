/*

    Program: Computation of Grades using Function
    Programmer: Guilliane Lee 
    Section: AN22
    Start Date: June 2, 2023
    End Date: June 2, 2023

*/

const prompt = require("prompt-sync")();

function calculateGrade(classParticipation, summativeGrade, finalExam) {
  const grade = (classParticipation * 0.3) + (summativeGrade * 0.3) + (finalExam * 0.4);
  return grade;
}

function calculateLetterGrade(grade) {
  if (grade >= 90) {
    return 'A';
  } else if (grade >= 80) {
    return 'B';
  } else if (grade >= 70) {
    return 'C';
  } else if (grade >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}

const students = [];

for (let i = 0; i < 5; i++) {
  const student = {};

  student.name = prompt(`Enter name of student ${i + 1}: `);

console.log("Be sure to enter enabling assesment 5 times")
  let classParticipation = 0;
  for (let j = 0; j < 5; j++) {
    classParticipation += parseFloat(prompt(`Enter enabling assesment grade ${j + 1}: `));
  }
  student.classParticipation = classParticipation / 5;

  console.log("Be sure to enter Summative Assessments grade 3 times")
  let summativeGrade = 0;
  for (let j = 0; j < 3; j++) {
    summativeGrade += parseFloat(prompt(`Enter summative assessment grade ${j + 1}: `));
  }
  student.summativeGrade = summativeGrade / 3;

  student.finalExam = parseFloat(prompt('Enter the final examination grade: '));

  student.grade = calculateGrade(student.classParticipation, student.summativeGrade, student.finalExam);
  student.letterGrade = calculateLetterGrade(student.grade);

  students.push(student);
}

console.log('Student\t\tClass Participation\tSummative Grade\tGrade\tLetter Grade');
students.forEach(student => {
  console.log(`${student.name}\t\t${student.classParticipation.toFixed(2)}\t\t\t${student.summativeGrade.toFixed(2)}\t\t${student.grade.toFixed(2)}\t${student.letterGrade}`);
});
