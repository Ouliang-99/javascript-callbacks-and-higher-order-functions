//Exercise #2: At Least Five Function

function atLeastFive(array, operation) {
  // Start coding here
  return operation(array);
}
const allRoomScore = {
  name: 1,
  studentScoresRoom1: [90, 40, 67, 80, 100, 15, 86, 12, 99, 67],
  name: 2,
  studentScoresRoom2: [78, 98, 23, 15, 40, 12, 40, 67, 80, 100],
  name: 3,
  studentScoresRoom3: [67, 80, 100, 15, 12, 40, 67, 80, 100, 67],
};

const isPass = function (array) {
  let countPass = 0;
  for (let value of array) {
    if (value >= 70) {
      countPass++;
    } else;
  }
  if (countPass >= 5) {
    return `ผ่านเกณฑ์ ✅`;
  } else {
    return `ไม่ผ่านเกณฑ์ ❌`;
  }
};
// Using `atLeastFive` function here

let scoreRoom1Result = atLeastFive(allRoomScore.studentScoresRoom1, isPass);
let scoreRoom2Result = atLeastFive(allRoomScore.studentScoresRoom2, isPass);
let scoreRoom3Result = atLeastFive(allRoomScore.studentScoresRoom3, isPass);

console.log("นักเรียนห้อง1 " + scoreRoom1Result);
console.log("นักเรียนห้อง2 " + scoreRoom2Result);
console.log("นักเรียนห้อง3 " + scoreRoom3Result);
