const cards = document.querySelectorAll('.card')
const modalOverlay = document.querySelector('.modal_overlay')

for(let card of cards){
    card.addEventListener('click',function() {
        modalOverlay.classList.add('active')
    })
}
document.querySelector('#clear').addEventListener('click',function(){
    modalOverlay.classList.remove('active')
})



