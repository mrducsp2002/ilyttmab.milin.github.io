const openLetterButtons = document.querySelectorAll('[data-letter-target]')
const closeLetterButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById("overlay")

function scrollToSection(direction) {
    const windowHeight = window.innerHeight;
    const scrollAmount = direction === 'down' ? windowHeight : -windowHeight;
    window.scrollBy({
        top: scrollAmount,
        behavior: 'smooth',
        duration: 1000 // set the duration to 1000ms
    });
}

window.addEventListener('wheel', event => {
    const direction = event.deltaY > 0 ? 'down' : 'up';
    scrollToSection(direction);
});
openLetterButtons.forEach(button => {
    button.addEventListener("click", () => {
        const letter = document.querySelector(button.dataset.letterTarget)
        openLetter(letter)
    })
})

closeLetterButtons.forEach(button => {
    button.addEventListener("click", () => {
        const letter = button.closest(".letter")
        closeLetter(letter)
    })
})

overlay.addEventListener("click", () => {
    const letters = document.querySelectorAll(".letter.active")
    letters.forEach(letter => {
        closeLetter(letter)
    })
})

function openLetter(letter) {
    if (letter == null) return
    letter.classList.add("active")
    overlay.classList.add("active")
    document.body.style.position = 'fixed';
    document.body.style.top = `-${window.scrollY}px`;

}
function closeLetter(letter) {
    if (letter == null) return
    letter.classList.remove("active")
    overlay.classList.remove("active")
    const scrollY = document.body.style.top;
    document.body.style.position = '';
    document.body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
}

const tableCells = document.querySelectorAll("td");

tableCells.forEach(cell => {
    const firstChild = cell.firstChild;
    if (firstChild && firstChild.dataset && firstChild.dataset.letterTarget) {
        // this cell has a data-letter-target attribute, so do nothing
        firstChild.classList.add("active");
    } else if (firstChild) {

    }
});







