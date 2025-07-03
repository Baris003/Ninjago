// Scrolling to the next question onclick
function scrollToNext(sectionId) {
    section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth', block: 'center'});
}




// ===== Score System for characters ===== 

let characterScores = {
    Kai: 0, 
    Zane: 0, 
    Cole: 0,
    Jay: 0, 
    Lloyd: 0,
    Nya: 0,
    Wu: 0,
    Garmadon: 0,
    Pixal: 0,
    Skylor: 0,
    Dareth: 0,
    Morro: 0,
    Ronin: 0,
    Misako: 0,
    Nadakhan: 0,
}


document.getElementById('submit-btn').onclick = function() {
    const answers = document.querySelectorAll('input[type="radio"]:checked')
    //linking chosen inputs to character names
    for (let i = 0; i < answers.length; i++) {
        let character = answers[i].dataset.character; 
        //adding points to characters
        if (character in characterScores) {
            characterScores[character]++;
        }
    }

    //comparing scores
    let maxCharacter = null;
    let maxScore = -1;

    for (const [character, score] of Object.entries(characterScores)) {
        if (score > maxScore) {
            maxCharacter = character;
            maxScore = score;
        }
    }
    console.log(maxCharacter)

    //if there is more than one maximum


}
