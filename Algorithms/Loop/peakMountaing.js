var peakIndexInMountainArray = function(arr) {
    let maxV = Math.max(...arr)
    return arr.indexOf(maxV)
};


console.log(peakIndexInMountainArray([0,1,0]))


//faster
var peakIndexInMountainArray = function(arr) {
	let res=0,num=arr[0];
	arr.forEach((val,idx) =>{
		if(num<val){
			res=idx
			num=val
        }
    })
	return res;
};


console.log(peakIndexInMountainArray([0,1,0]))