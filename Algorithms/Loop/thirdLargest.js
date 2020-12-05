let thirdLargest = (values)=>{
    let uniqueArray = [... new Set(values)]
    let largest = 0
    if(uniqueArray.length ===1){
        largest = values[0]
    }else if(uniqueArray.length ===2){
        largest =  Math.max(...uniqueArray)
    }else{
        largest = Math.max(...uniqueArray)
        largest = Math.max(...uniqueArray.filter(el=> el <largest ))
        largest = Math.max(...uniqueArray.filter(el=> el <largest ))
        
    }
    return largest
}

console.log(thirdLargest([1,1,2]))

function thirdMax(arr) {
    let sortedArr = arr.sort((a, b) => a - b)
    let unique = new Set(sortedArr)
    let finalArr = [...unique]
    if (finalArr.length <= 2) return Math.max(...arr)
    return finalArr[finalArr.length - 3]
}

console.log(thirdMax([1, 1, 2]));