console.log("Sher,if ha;wao     mello".split(/[\s(2),;:]+/))

function firstRepeatedWord(sentence) {
    let newString = sentence.split(/[\s(2),:;-]+/)
    let ans = ""
    for(let t of newString){
        for(let r = newString.indexOf(t) + 1; r<newString.length; r++){
            if(t===newString[r]){
                ans = t
                break
            }
        }
        if(ans!==""){
            break
        }
    }

    return ans

}

console.log(firstRepeatedWord("He had  quite had enough of this nonsense."))