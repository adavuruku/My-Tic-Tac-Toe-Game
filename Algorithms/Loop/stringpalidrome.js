var isPalindrome = function(s) {
    let sd = s.split(" ").join("").toUpperCase().split("")
    .filter(el => (el.charCodeAt(el)>= 65 && el.charCodeAt(el)<=90) || (parseInt(el)<= 9))
    let srev = [...sd]
    console.log(srev)
    return (srev.reverse().every((val, index) => val === sd[index]))
};
console.log(parseInt("S"))
console.log(isPalindrome("0P"))

var isPalindromeTwo = function (s) {
    s = s.toLowerCase().replace(/[\W_]/g, "");
    console.log(s)
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
      if (s[left] !== s[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  };

  console.log(isPalindromeTwo("Sherif"))


  var isPalindromeThree = function(s) {
    let cleanedUpString = s.replace(/[^a-zA-Z0-9]+/g, "").toLowerCase();
    return cleanedUpString.split("").reverse().join("") === cleanedUpString
};