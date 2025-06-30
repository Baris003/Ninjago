// Scrolling to the next question onclick
function scrollToNext(sectionId) {
    section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth', block: 'center'});
}