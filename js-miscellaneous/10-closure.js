/*
let initialScore = 0

function score() {
    initialScore += 1
}

score()

console.log(initialScore)
*/


function program() {
    let initialScore = 0

    function score() {
        initialScore += 1
    }

    return score
}

const scoreMethod = program(); // initialScore is 0


