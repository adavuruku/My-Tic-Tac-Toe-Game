var judgeCircle = function(moves) {
    let moveOrigin = [0,0]
    let allMoves = moves.split("")
    x = moveOrigin[0]
    y = moveOrigin[1]
    allMoves.forEach(element => {
        x += element ==="R"?  1:0
        x -= element ==="L"?  1:0
        y += element ==="U"?  1:0
        y -= element ==="D"?  1:0
    });

    return (x===moveOrigin[0] && y===moveOrigin[1])
};

console.log(judgeCircle("LDRRLRUULR"))