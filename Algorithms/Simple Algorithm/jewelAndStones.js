let jewelsAndStones = (j,s)=>{
    let found = 0
    for(let k = 0; k < s.length; k++){
        if(j.indexOf(s[k]) >= 0) found+=1
    }
    return found
}

console.log(jewelsAndStones("SHER","TA"))