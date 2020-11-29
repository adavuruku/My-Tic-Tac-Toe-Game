function posibilities(inputVal){
    if(inputVal.length <2) return inputVal

    let permute = []
    for(let i= 0; i<inputVal.length; i++){
        let nodeVal = inputVal[i]
        if(inputVal.indexOf(nodeVal) !=i) continue
        let possibleRemainder = inputVal.slice(0,i) + inputVal.slice(i+1,inputVal.length)
        for(let rem of posibilities(possibleRemainder) ){
            permute.push(nodeVal + rem);
        }
    }

    return permute;
    
}

console.log(posibilities("abcj"))

s1=[2,4,5,7]
s2 = [5,7,8,9,6]

s3 = [...s1,...s2]
console.log(s3)
let len = s3.length
let median = (len%2) == 0 ? (s3[len/2] + s3[(len/2) + 1])/2 : s3[Math.floor(len/2)]

console.log(median)