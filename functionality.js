const a1 = document.getElementById('credentialsNav');
const a2 = document.getElementById('projectsNav');
const a3 = document.getElementById('contactNav');
const contactButton = document.getElementById('contactButton');
const part1 = document.getElementById('collapseOne');
const part2 = document.getElementById('collapseTwo');
const part3 = document.getElementById('collapseThree');

a1.addEventListener('click', () => {
    part1.classList.add('show');
    part2.classList.remove('show');
    part3.classList.remove('show');
});

a2.addEventListener('click', () => {
    part2.classList.add('show');
    part1.classList.remove('show');
    part3.classList.remove('show');
});

a3.addEventListener('click', () => {
    part3.classList.add('show');
    part1.classList.remove('show');
    part2.classList.remove('show');
});

contactButton.addEventListener('click', () => {
    part3.classList.add('show');
    part1.classList.remove('show');
    part2.classList.remove('show');
});