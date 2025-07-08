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

const characterDescription = {
    Kai: 'Du bist Kai, der Ninja des Feuers! Du bist mutig, leidenschaftlich und hast ein großes Herz. Wenn jemand Hilfe braucht, bist du sofort zur Stelle. Manchmal handelst du schneller, als du nachdenkst – aber das zeigt nur, wie sehr dir andere wichtig sind. In dir steckt ein echter Macher. Du bist oft der Erste, der etwas wagt, auch wenn andere noch zögern. Du bringst Energie in dein Umfeld und motivierst andere mit deiner Begeisterung.',
    Jay: 'Du bist Jay, der Ninja des Blitzes! Witzig, kreativ und manchmal ein kleiner Wirbelwind. Du bringst andere zum Lachen und hast immer eine verrückte Idee parat. Auch wenn du mal zweifelst, gibst du nicht auf. Du bist jemand, der das Leben leicht nimmt und anderen Freude schenkt. In stressigen Situationen findest du oft eine kreative Lösung, auf die niemand sonst gekommen wäre.',
    Cole: 'Du bist Cole, der Ninja der Erde! Stark, bodenständig und treu. Du bist jemand, auf den sich andere verlassen können. Auch wenn du nicht immer viel redest, weiß man, dass du für deine Freunde alles tun würdest. Im Alltag bist du jemand, der für Gerechtigkeit einsteht. Du bist ruhig, aber nicht still – wenn es wichtig ist, machst du deine Meinung klar.',
    Zane: 'Du bist Zane, der Ninja des Eises! Klar, ruhig und klug. Du denkst viel nach und findest oft Lösungen, die anderen verborgen bleiben. Dein Herz ist groß, auch wenn du nicht immer zeigst, was du fühlst. Du bist jemand, der mit Logik, Ruhe und Geduld durchs Leben geht. Du bist hilfsbereit und suchst immer nach dem besten Weg – nicht nach dem schnellsten.',
    Lloyd: 'Du bist Lloyd, der Ninja der Energie! Du bist ein echter Anführer. Verantwortung schreckt dich nicht, weil du weißt: Zusammen ist man stärker. Auch wenn du selbst Zweifel hast, stärkst du anderen den Rücken. Im echten Leben bist du jemand, der andere motiviert und fair behandelt. Du bist ruhig, aber bestimmend – jemand, dem andere folgen, weil sie dir vertrauen.',
    Nya: 'Du bist Nya, die Ninja des Wassers! Klar, entschlossen und unabhängig. Du lässt dich nicht leicht beeinflussen und gehst deinen eigenen Weg. Aber du bist auch offen für die, die dir wichtig sind. Im Alltag bist du mutig genug, anders zu sein. Du weißt, was du willst, und arbeitest hart dafür. Trotzdem bist du immer für Freunde da, wenn sie dich brauchen.',
    Wu: 'Du bist Meister Wu! Weise, geduldig und gerecht. Du beobachtest erst, bevor du handelst. Du gibst anderen gute Ratschläge und hilfst ihnen, selbst den richtigen Weg zu finden. Du bist jemand, der lieber zuhört als redet. Andere schätzen dich, weil du ruhig bleibst, wenn es stressig wird, und die Dinge klar siehst.',
    Garmadon: 'Du bist Garmadon! In dir steckt eine große Kraft. Du kämpfst mit deinen inneren Konflikten, aber du weißt auch, wie man über sich hinauswächst. Du bist entschlossen und manchmal stur, aber auch jemand, der Veränderung zulässt. Du bist im echten Leben jemand, der zeigt: Jeder hat gute und schlechte Seiten – wichtig ist, was man daraus macht.',
    Pixal: 'Du bist Pixal! Logisch, organisiert und lösungsorientiert. Du denkst oft an Dinge, die andere übersehen. Du bist ruhig, aber stark – und wenn’s drauf ankommt, bist du für andere da. Du bist jemand, der gerne plant und organisiert, aber auch Mitgefühl zeigt. Du suchst nach Wegen, die Welt ein bisschen besser zu machen.',
    Skylor: 'Du bist Skylor! Anpassungsfähig, clever und mutig. Du kannst dich schnell auf neue Situationen einstellen und findest in allem eine Chance. Andere vertrauen dir, auch wenn du selbst manchmal Zweifel hast. Du bist jemand, der immer wieder zeigt, dass man nicht laut sein muss, um stark zu sein. Du handelst klug und mit Herz.',
    Dareth: 'Du bist Dareth! Etwas chaotisch, aber immer voller Herz. Auch wenn du nicht immer der Beste bist, versuchst du es trotzdem – und das macht dich stark. Du bist im Alltag jemand, der nie aufgibt, auch wenn’s mal peinlich wird. Du zeigst, dass Mut nicht perfekt sein muss, sondern echt.',
    Morro: 'Du bist Morro! Manchmal innerlich zerrissen, aber voller Wille. Du willst zeigen, was in dir steckt, und suchst deinen Platz in der Welt. Auch wenn du den schwierigen Weg gehst, gibst du nie auf. Im Leben bist du jemand, der aus seinen Fehlern lernen will. Du hast viel Energie, die du nutzen kannst, um Gutes zu tun.',
    Ronin: 'Du bist Ronin! Unabhängig, clever und ein bisschen frech. Du gehst deinen eigenen Weg und suchst dir selbst aus, wem du vertraust. Im Alltag bist du ein schlauer Kopf, der sich nicht so leicht reinreden lässt. Aber wenn du jemanden magst, bist du da, auch wenn man’s nicht immer merkt.',
    Misako: 'Du bist Misako! Ruhig, nachdenklich und klug. Du weißt, dass Wissen wichtig ist und suchst immer nach Antworten. Du bist ein stiller Held, der für andere da ist. Du bist im Alltag jemand, der lieber denkt als schreit. Du hilfst, wenn du kannst, und zeigst, dass man auch leise stark sein kann.',
    Nadakhan: 'Du bist Nadakhan! Charmant, wortgewandt und immer mit einem Plan. Du weißt genau, wie du bekommst, was du willst – aber manchmal musst du aufpassen, dass du andere nicht ausnutzt. Du bist jemand, der schnell denkt und redet, oft gewinnt, aber lernen muss, Verantwortung für seine Entscheidungen zu übernehmen.'
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
        //adding html if theres only one winner
        const result = document.getElementById('result-container');
        result.innerHTML
        = `
        <img src = "../images/${topCharacters[0]}_result.png">
        <h1>Du bist ${topCharacters[0]}!</h1>
        <p>${characterDescription[topCharacters[0]]}</p>
        `

    }
    else {
        let x = (1/topCharacters.length) * 100;
        let percent = Math.round(x * 10) / 10;
        
        
    }
    
     
}
