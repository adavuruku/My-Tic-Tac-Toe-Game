function getSequenceSum(i, j, k) {
    let sum = 0
    for(;i<j; i++ ){
        sum=sum+i;
    }
    for(;j>=k; j-- ){
        sum=sum+j;
    }

    return sum
}

function getSequenceSum2(i, j, k) {
    let sum = 0
    for(; i<=j && j>=k; i++ ){
        
        if(i>j){
            sum=sum+j;
            j--
        }else{
            sum=sum+i;
        }
    }
    // for(;j>=k; j-- ){
    //     sum=sum+j;
    // }

    return sum
}

console.log(getSequenceSum2(-5,-1,-3))