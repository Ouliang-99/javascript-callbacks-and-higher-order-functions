//Exercise #2: At Least Five Function

function atLeastFive(array, operation) {
  // Start coding here
  return operation(array);
}

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here

function calculateResultRoom1 (array){
  let scoreRoom1Result = 0 ;
  for (let i = 0 ; i < studentScoresRoom1.length; i++){
    if (studentScoresRoom1[i] > 70){
      scoreRoom1Result ++ ;
    }
  }
  if (scoreRoom1Result >= 5){
    return `นักเรียนห้องที่ 1 ผ่านเกณฑ์ ✅`;
  }
  else{
    return `นักเรียนห้องที่ 1 ไม่ผ่านเกณฑ์ ❌`
  } 
}

function calculateResultRoom2 (array){
  let scoreRoom2Result = 0 ;
  for (let i = 0 ; i < studentScoresRoom2.length; i++){
    if (studentScoresRoom2[i] > 70){
      scoreRoom2Result ++ ;
    }
  }
  if (scoreRoom2Result >= 5){
    return `นักเรียนห้องที่ 2 ผ่านเกณฑ์ ✅`;
  }
  else{
    return `นักเรียนห้องที่ 2 ไม่ผ่านเกณฑ์ ❌`
  } 
}

function calculateResultRoom3 (array){
  let scoreRoom3Result = 0 ;
  for (let i = 0 ; i < studentScoresRoom3.length; i++){
    if (studentScoresRoom3[i] > 70){
      scoreRoom3Result ++ ;
    }
  }
  if (scoreRoom3Result >= 5){
    return `นักเรียนห้องที่ 3 ผ่านเกณฑ์ ✅`;
  }
  else{
    return `นักเรียนห้องที่ 3 ไม่ผ่านเกณฑ์ ❌`
  } 
}

console.log(atLeastFive(studentScoresRoom1, calculateResultRoom1));
console.log(atLeastFive(studentScoresRoom2, calculateResultRoom2));
console.log(atLeastFive(studentScoresRoom3, calculateResultRoom3));