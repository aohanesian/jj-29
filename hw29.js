`use strict`;

arr2 = [];
function getRandomInRange(min, max) {
    while (arr2.length < max) {
        let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        let found = false;
        for (let i = 0; i < arr2.length; i++) {
            if (arr2[i] === randomNumber) {
                found = true;
                break;
            }
        }
        if (!found) {
            arr2[arr2.length] = randomNumber;
        }
    }console.log(arr2);
}

getRandomInRange(1, 100);