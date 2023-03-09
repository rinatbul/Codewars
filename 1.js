// Task 1
// https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/train/javascript
function validatePIN(pin) {
    if (pin.length === 4 || pin.length === 6) {
        return pin.replace(/[^0-9.]/g, 'g').split('').every(value => {
            return !isNaN(value)
        })
    } else {
        return false
    }
}

// console.log(validatePIN("1234"))
// console.log(validatePIN("123456"))
// console.log(validatePIN("12345y"))
// console.log(validatePIN("123 "))
// console.log(validatePIN("123"))
// console.log(validatePIN("a123"))


// Task 2
// https://www.codewars.com/kata/563cf89eb4747c5fb100001b/train/javascript
function removeSmallest(numbers) {
    const newArr = [...numbers]
    let minValue = Math.min(...newArr);
    let index = newArr.indexOf(minValue)
    newArr.splice(index, 1)
    return newArr
}

// console.log(removeSmallest([5, 3, 3, 2, 4, 1]))
// console.log(removeSmallest([1, 2, 3, 4, 5]))
// console.log(removeSmallest([2, 2, 1, 2, 1]))


// Task 3
// https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/train/javascript
function invert(array) {
    return array.map(e => -e)
}

// console.log(invert([1, 2, 3, 4, 5]))
// console.log(invert([-1, 2, -3, 4, -5]))
// console.log(invert([-1, -2, -3, -4]))



// Task4
// https://www.codewars.com/kata/54c27a33fb7da0db0100040e/train/javascript
var isSquare = function(n) {
    return Math.sqrt(n)%1===0
}
// console.log(isSquare(3))
// console.log(isSquare(4))
// console.log(isSquare(24))
// console.log(isSquare(25))


// Task 5
// https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/javascript
function openOrSenior(data){
    return data.map(e=>(e[0]>=55&&e[1]>7)?'Senior':'Open')
}

console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]))
console.log(openOrSenior([[3, 12],[55,1],[91, -2],[53, 23]]))