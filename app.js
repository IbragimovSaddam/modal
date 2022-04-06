const showButton = document.querySelector('.show-btn')
const modal = document.querySelector('.modal')
const closeBtn = document.querySelector('.close-btn')
const overlay = document.querySelector('.overlay')

showButton.addEventListener('click', () => {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
    
})

function chaqir () {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

closeBtn.addEventListener('click', () => {
    chaqir()
})

overlay.addEventListener('click', () => {
    chaqir()
}) 

document.addEventListener ('keydown', (e) => {
    if (e.code == 'Escape') {
        chaqir()
    }
})
