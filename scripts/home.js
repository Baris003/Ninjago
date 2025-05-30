//Wu Garmadon Card Sound effects 
function soundEffect(character) {
    const audio = document.getElementById(character);

    audio.play();
}

//back to top button
function backToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}