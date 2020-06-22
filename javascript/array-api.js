// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    const fruie = fruits.join(', ')
    console.log('Q1', fruie);
}
  
// Q2. make an array out of a string
{
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const fruit = fruits.split(',');
    console.log('Q2', fruit.map(str => str.replace(' ', '')));    // Removing all space from an array javascript
}
  
// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    const newArray = array.reverse();
    console.log('Q3', newArray);
    console.log('Q3', array);
}
  
// Q4. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];
    const newArray = array.slice(2, 5);
    console.log('Q4', newArray);
}
  
class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}

const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];
  
// Q5. find a student with the score 90
{
    const highScore = students.find((student) => student.score === 90);
    console.log(highScore);
}
  
// Q6. make an array of enrolled students
{
    const enrolled = students.filter((student) => student.enrolled);
    console.log(enrolled);
}    
  
// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
    const score = students.map((student) => student.score);
    console.log(score);
}
  
// Q8. check if there is a student with the score lower than 50
{
    const score = students.some((student) => student.score < 50);
    console.log(score);

    const score2 = !students.every((student) => student.score >= 50);
    console.log(score2);
}
  
// Q9. compute students' average score
{
    console.clear();
    const result = students.reduce((prev, curr) => prev + curr.score, 0);
    console.log(result / students.length);
}
  
// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    console.clear();
    const result = students
    .map((student) => student.score)
    .filter((score) => score >= 50)
    .join();
    console.log('Q10', result);
}
  
// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    console.clear();
    const result = students
    .map((student) => student.score)
    .sort((a, b) => a - b)
    .join();
    console.log('Bonus', result);    
}