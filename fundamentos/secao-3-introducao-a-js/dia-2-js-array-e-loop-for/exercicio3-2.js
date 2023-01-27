let result = 0;
let somAri =0;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let higherNumber = numbers[0];
for (let i=0; i < numbers.length; i+=1){
  if (numbers[i] > higherNumber){
    higherNumber = numbers[i];
  }
  // result += numbers[i];
  // somAri += numbers[i];
}
// let media = somAri / numbers.length;

// if(media > 20){
//   console.log('valor maior que 20');
// }else if (media <= 20){
//   console.log('valor menos ou igual a 20');
// }
console.log(higherNumber);
// console.log(result);
// console.log(media);