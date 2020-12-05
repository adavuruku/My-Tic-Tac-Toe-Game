var subtractProductAndSum = function(n) {
    let g = n.toString().split("")
    return (g.reduce((v,a) => parseInt(v)  * parseInt(a)) - g.reduce((v,a) => parseInt(v) + parseInt(a)))
   
};

console.log(subtractProductAndSum(234))