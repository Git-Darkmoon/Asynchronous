const sum = (num1, num2) => num1 + num2;
const diff = (num1, num2) => num1 - num2;

const calc = (num1, num2, callBack) => {
  return callBack(num1, num2);
};

console.log(calc(1, 4, diff));

const date = (callBack) => {
  console.log(new Date());
  setTimeout(() => {
    let date = new Date();
    callBack(date);
  }, 3000);
};

const printDate = (dateNow) => {
  console.log(dateNow);
};

date(printDate);
