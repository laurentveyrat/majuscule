let phrase = process.argv[2]
if (!phrase) phrase = "Bien le bonjour!"
let majuscule = false
let newPhrase = ""

for (let lettre of phrase) {
    if (lettre !== " ") {
        if (majuscule) {
            newPhrase += lettre.toUpperCase()
        } else {
            newPhrase += lettre.toLowerCase()
        }
        majuscule = !majuscule
    } else {
        newPhrase += " "
    }
}

console.log("Phrase: " + phrase)
console.log("Nouvelle phrase: " + newPhrase)