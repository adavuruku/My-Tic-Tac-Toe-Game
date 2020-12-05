let lengthOfLastWord = (string)=>{
    if(typeof(string) !== "string") return "Enter String"
    if(string.trim().length < 1) return 0
    let split = string.split(' ')
    spres = split.filter((el) =>el.length > 0)
    console.log(spres)
    return spres[spres.length - 1].length
}

console.log(lengthOfLastWord("a "))