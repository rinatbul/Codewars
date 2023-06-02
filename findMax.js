//find Max with for loop...

const findMax=(array)=>{
    let maxNumber=0;
    for (let i=0;i<array.length;i++){
        if (array[i]>maxNumber){
            maxNumber = array[i];
        }
    }
    return maxNumber;
}
// console.log(`Max number is : ${findMax([3,6,12,87,45,90,67,44,24,7])}`)

//find Max with Math method

let array = [3,6,12,87,45,90,67,44,24,7]
let max = Math.max(([3,6,12,87,45,90,67,44,24,7]).join(''))
console.log(max)


