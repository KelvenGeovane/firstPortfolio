const card = document.querySelector('.card__inner');
const button = document.querySelector('.btn');


card.addEventListener('click', function(){
    card.classList.toggle('is-flipped');
});