exports.fizzBuzz = function(number) {
  let str = ''
  if (number % 3 === 0) {
    str += 'Fizz'
  }
  if (number % 5 === 0) {
    str += 'Buzz'
  }
  if (str != '') {
    return str
  } else {
    return number
  }
}

