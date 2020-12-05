function goodSegment(badNumbers, lower, upper) {
    let allSegment = []
    badNumbers.sort((a,b)=> a - b)
    let greatest = []
    let newArr = []
    low = lower
    high = badNumbers[0] - 1
    newArr = [low,high]
    allSegment.push(newArr)
    for(let t = 0; t < badNumbers.length; t++){
            if(badNumbers[t] <= upper){
                low = high + 2;
                high = badNumbers[t] - 1
                newArr = [low,high]
                allSegment.push(newArr)
            }
    }
    greatest = allSegment[0]
    for(let t=1; t<allSegment.length; t++){
        if((greatest[1] - greatest[0]) < (allSegment[t][1] -allSegment[t][0])){
            greatest = allSegment[t]
        }
    }
    return greatest
}

console.log(goodSegment([37,7,22,15,49,60],3,49))
