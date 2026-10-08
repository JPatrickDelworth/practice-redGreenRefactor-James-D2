

function countVowels (word) {
    let lowerCaseStr = word.toLowerCase().split("");
    let vowels = "aeiou";
    let count = lowerCaseStr.reduce((accumulator, character) => {
        if (vowels.includes(character)) return accumulator + 1;
        else return accumulator;
    }, 0);

    if (count === 0){
        return "No vowels present."
    } else return count;
}













module.exports = countVowels;