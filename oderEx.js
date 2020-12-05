d = [2,3,4]
e = [1,3,5]

// f = [...d,...e]
f = d.concat(e)
console.log(f.sort())
console.log(f[f.length/2])

len = f.length 
const arrSort = f.sort();
const mid = Math.ceil(len / 2);

const median =
  len % 2 == 0 ? (f[mid] + f[mid - 1]) / 2 : f[mid - 1];

console.log("median: ", median);

let sum = f.reduce((x,y)=>x+y,2)
console.log(sum)

for(let k of f){
  console.log(k)
}

let st = "sherif"
let st2 = new String("sherif")
let st3 = new String()
st3=st
console.log(typeof(st),typeof(st2))
console.log(st3===st)

[01110111011]

dere = []