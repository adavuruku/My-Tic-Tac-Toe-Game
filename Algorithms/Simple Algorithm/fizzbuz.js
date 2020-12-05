let fizzzy = (valueToCheck)=>{
    // console.log(typeof (valueToCheck))
    if(typeof (valueToCheck)!== "number") return 'Enter Number'
    let res = []
    for(let h=1; h<=valueToCheck; h++){
        if(h%3===0){
            res.push("Fizz")
        }else if(h%5===0){
            res.push("Buzz")
        }else if(h%5===0 && valueToCheck%3===0){
            res.push("FizzBuzz")
        }else{
            res.push(h)
        }
    }
    return res
}

console.log(fizzzy(15))