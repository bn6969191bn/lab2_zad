const _ = require('lodash');

const numbers = [1,3,5,7,9];

console.log(_.mean(numbers));

console.log(_.min(numbers));

console.log(_.max(numbers));

// Zadanie 3
const user = {
    name: "Imie",
    surname: "Nazwisko",
    allGrades: [
      {
        subjectName: "Name1",
        grades: [5, 3, 2, 5, 2],
        weight: 3,
      },
      {
        subjectName: "Name2",
        grades: [3, 3.5, 2],
        weight: 1,
      },
      {
        subjectName: "Name3",
        grades: [4, 3, 3.5],
        weight: 5,
      },
    ],
  };

  function showUser(user) {
    let weightedMean = 0;
    let sumOfWeights = 0;
    user.allGrades.map(
        (grade) => {
            weightedMean += _.sum(grade.grades) * grade.weight;
            sumOfWeights += grade.weight;
        }
    
    )
    return user.name + ' ' + user.surname + ' ' + weightedMean / sumOfWeights;
  }

  console.log(showUser(user));

  // Zadanie 4
  console.log(_.find(user.allGrades, { weight: 1 }));