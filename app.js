// // Q1
// function reversed(){
//    let num1 = prompt("Enter a Number!")
//    let result = num1.toString().split('').reverse().join('');
//    alert(result);
// }
// reversed();

// Q2
// for (let i = 0; i <= 15; i++){
//    if (i % 2 == 0){
//       console.log(i + " is even");
//    } else {
//       console.log(i + " is odd");
//    }
// }

// Q3
// function alphabetical(){
//    let x = prompt("Enter a word!");
//    let result = x.toString().split('').sort().join('')
//    alert(result);
// }
// alphabetical();

// Q4
function program() {
  let number = prompt("Enter a number.");
  let str = "";
  for (let i = 0; i < number.length; i++) {
    if (
      parseInt(number[i], 10) % 2 == 0 &&
      parseInt(number[i + 1], 10) % 2 == 0
    ) {
      str += number[i] + "-";
    } else {
      str += number[i];
    }
  }
  return str;
}
alert(program());

// Q5
// function Agechecker(){
//    let age = prompt("What is your age ?");
//    let strResult=parseInt(age,10)>=18?"You're an adult":"You're a minor";
//    return strResult;
// }
// alert(Agechecker());
