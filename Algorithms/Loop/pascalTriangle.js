var generate = function(numRows) {
    let finalRes = [[1],[1,1]]
    if(numRows ===0){
        return []
    }else if(numRows ==1){
        return[[1]]
    }else if(numRows==2){
        return [[1],[1,1]]
    }else{
        for(let r = 2; r<numRows; r++){
            addRow(finalRes)
        }
    }
    return finalRes
};

var addRow = (finalRes)=>{
    let previous = finalRes[finalRes.length - 1]
    let newRow = [1]
    for (let i=0; i<previous.length - 1; i++){
        let current = previous[i]
        let next = previous[i+1]
        newRow.push(current+next)
    }
    newRow.push(1)
    return finalRes.push(newRow)
}


console.log(generate(5))