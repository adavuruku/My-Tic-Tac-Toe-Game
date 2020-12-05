
// https://leetcode.com/problems/lemonade-change/
var lemonadeChange = (bills)=> {
    let change = []
    let ans = true
    for(let k=0; k<bills.length; k++){
        if(bills[k] === 5){
            change.push(bills[k])
        }else if(bills[k] === 10){
            if(change.indexOf(5) >= 0){
                change.splice(change.indexOf(5),1)
                change.push(bills[k])
            }else{
                ans = false
                break
            }
        }else if(bills[k] === 20){
            if((change.indexOf(10) >=0) && (change.filter(el=> el===5).length > 0)){
                change.splice(change.indexOf(10),1)
                change.splice(change.indexOf(5),1)
                change.push(bills[k])
            }else{
                if(change.filter(el=> el===5).length >=3){
                    change.splice(change.indexOf(5),1)
                    change.splice(change.indexOf(5),1)
                    change.splice(change.indexOf(5),1)
                    change.push(bills[k])
                }else{
                    ans = false
                    break
                }
            }
        }
    }
    return ans
};


// [5,5,10,10,20] false
// [5,5,5,5,10,5,10,10,10,20]
console.log(lemonadeChange([5,5,5,10,20]))
