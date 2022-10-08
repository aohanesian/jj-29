`use strict`;

function getRandomInRange(min, max) {
    let memory = [];
    let final = [];
    while (final.length < max) {
        let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        if (final.includes(randomNumber)) {
            memory.push(randomNumber)
        } else final.push(randomNumber)
    }
    console.log(memory)
    return final;
}

let generateRandomArr = getRandomInRange(1, 100);
console.log(generateRandomArr);
