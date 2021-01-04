'use strict';

// Q1. make a string out of an array // 배열에서 문자열 만들기
{
    const fruits = ['apple', 'banana', 'orange'];
    const result =fruits.join(',')
    console.log(result);
}

// Q2. make an array out of a string  // 문자열로 배열 만들기
{
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const result = fruits.split(',')
    console.log(result);
} 

//  Q3. make this array look like this: [5, 4, 3, 2, 1];
{
    const array = [1,2,3,4,5];
    const result = array.reverse();  //  배열 자체를 수정
    console.log(result);
    console.log(array);
}

// Q4. make new array without the first two elements
{
    const array = [1,2,3,4,5];
    // const result = array.splice(2,array.length);
    // const result = array.splice(0,2);
    const result = array.slice(2, 5);  // slice = 배열의 특정한 부분을 리턴

    console.log(array);
    console.log(result);
}

// -----------------
console.log('-----------------')
// -----------------

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
]

// Q5. find a student with the score 90
{
    const result = students.find((student) => {
        // console.log(student, index);
        return student.score === 90;
    });
    console.log(result);
}


// Q6. make an array of enrolled students
{
    const result = students.filter((student) => student.enrolled)
    console.log(result);
};

// Q7. make an array containing only the students scores
// result should be: [45, 80, 90, 66, 88]
{
    const result = students.map((student) => student.score * 2);
    console.log(result);
}

// Q8. check if there is a student with the score lower than 50 
{
    // const result = students.filter((student) => {
    //     const studentScore = student.score
    //     if(studentScore >= 50) {
    //         console.log(student);
    //     }
    // })
    const result = students.some((student) => student.score < 50);
    console.log(result);  // 한명이라도 있다면 true return

    const result2 = !students.every((student) => student.score >= 50);
    console.log(result2);  // 모든 요소들이 맞다면 true return
    console.log(!true);
}


console.clear();
// Q9. computer students' average score
{
    const result = students.reduce((prev, curr) => prev + curr.score, 0);
    console.log(result / students.length);

    const result1 = students.reduceRight((prev, curr) => {
        console.log('----')
        console.log(prev);
        console.log(curr);
        return prev + curr.score;
    }, 0);
    console.log(result1);
}


// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    const result = students.map(student => student.score)
    .filter(score => score >= 50)
    .join();
    console.log(result);
}

// Bonus! do Q10. sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    const result = students.map(student => student.score).sort((a,b) => a - b).join();
    console.log(result);
};