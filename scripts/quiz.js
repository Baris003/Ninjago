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
    document.getElementById('hidden-after-result').style.display = 'none';

    const answers = document.querySelectorAll('input[type="radio"]:checked')

    for (let i = 0; i < answers.length; i++) {
        //linking each id to a character name
        let character = answers[i].dataset.character;
        //adding points to corresponding character
        if(character in characterScores) {
            characterScores[character]++;
        }
    }
    
    //comparing characters
    let maxScore = -1;
    let topCharacters = [];

    for (let character in characterScores) {
        if (characterScores[character] > maxScore) {
            maxScore = characterScores[character];
            topCharacters = [character];
        }
        else if (characterScores[character] === maxScore) {
            topCharacters.push(character)
        }
    }
    if (topCharacters.length === 1) {
        console.log('You are most like: ' + topCharacters[0])
    }
    else {
        let percent = (1/topCharacters.length) * 100;
        console.log('It`s a tie! You are');
        for (character of topCharacters) {
            console.log(`${percent}% like ${character}`)
        }
    }
    
     
}
