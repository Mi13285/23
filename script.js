// function solution(string) {
//   let splitStr = string.split("");
//   let newStr = "";
//   splitStr.forEach((e) => {
//     if (e === e.toUpperCase()) newStr += " " + e;
//     else newStr += e;
//   });
//   return newStr;
// }
// console.log(solution("camelCasing")); //success = "camel Casing"
// console.log(solution("camelCasingTest"));

// function solution(string) {
//   let p = string.split("");
//   let j = "";
//   for (let index = 0; index < p.length; index++) {
//     if (p[index] === p[index].toUpperCase()) {
//       j += " " + p[index];
//     } else {
//       j += p[index];
//     }
//   }
//   return j;
// }
// console.log(solution("camelCasing")); //success = "camel Casing"
// console.log(solution("camelCasingTest"));
