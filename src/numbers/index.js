const moment = require('moment')

const isEven = (num) => {
  // write code for numbers.isEven
  if(num% 2 === 0) {
  return true;
}
};
const sum = (arr) => {
  // write code for numbers.sum
  if(arr.length === 1) {
    return arr[0]
  } else {
    return arr.pop() + sum(arr)
  }
}


const comboSum = (arr, sum) => {
  // write code for numbers.comboSum
  for(let i=0; i<arr.length; i++) {
    for(let j=0; j<arr.length -i; j++) {
      if(arr[i] + arr[j] !== sum) {
        return false 
      } 
      }
    }
  }



module.exports = {
  isEven,
  sum,
  comboSum
}