// Trả về true nếu giá trị truyền vào là số dương chẵn
function isPositiveEvenNumber(n) {
  let isValid;
  if (n > 0 && n % 2 === 0) {
    isValid = true;
  } else {
    isValid = false;
  }
  return isValid;
}
console.log(isPositiveEvenNumber(7));

v2;
function isPositiveEvenNumber(n) {
  let isValid = false;
  if (n > 0 && n % 2 === 0) {
    isValid = true;
  }
  return isValid;
}
console.log(isPositiveEvenNumber(8));

v3;
function isPositiveEvenNumber(n) {
  if (n > 0 && n % 2 === 0) {
    return true;
  }
  return false;
}
console.log(isPositiveEvenNumber(8));

v4;
function isPositiveEvenNumber(n) {
  return n > 0 && n % 2 === 0;
}
console.log(isPositiveEvenNumber(8));
let x = 10;
// x ở đây là 10
console.log(x);
{
  let x = 2;
  // x ở đây là 2
  console.log(x);
}
console.log(x);
// x ở đây là 10
