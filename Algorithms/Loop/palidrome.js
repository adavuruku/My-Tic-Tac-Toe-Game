var countSubstrings = function(s) {

    let count = 0, n = s.length;
    const dp = Array(n);
    for (let d = 0; d < n; d++) {
        dp[d] = Array(n).fill(false);
    }
    
    for (let d = 0; d < n; d++) {
        for (let i = 0; i+d < n; i++) {
            let j = i + d;
            if (s[i] === s[j]) {
                dp[i][j] = (i+1 >= j-1) ? true : dp[i+1][j-1];
                if (dp[i][j]) count++;
            }
        }
    }
    return count;
    
    
};

countSubstrings("abc")