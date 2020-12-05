let findPermutations = (string) => {
    if (!string || typeof string !== "string"){
      return "Please enter a string"
    } else if (string.length < 2 ){
      return string
    }
  
    let permutationsArray = [] 
    for (let i = 0; i < string.length; i++){
        let char = string[i]
        if (string.indexOf(char) != i) continue
        let remainingChars = string.slice(0, i) + string.slice(i + 1, string.length)
        console.log(remainingChars)
        for (let permutation of findPermutations(remainingChars)){
            permutationsArray.push(char + permutation)
        }
    }
    return permutationsArray
  }


  let crase = (check)=>{
    if(check.length<2) return check
    let allInp = []
    for(let y = 0; y<check.length;  y++){
      let node = check[y]
      if(check.indexOf(node)!=y) continue
      let remaider = check.slice(0,y) + check.slice(y+1, check.length)
      for(let pos of crase(remaider)){
        allInp.push(node+pos)
      }
    }
    return allInp
  }