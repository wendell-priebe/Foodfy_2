const darkModeBack = document.body
const buttonDark = document.querySelector('#buttonMod')
const buttonsMenu = document.querySelectorAll('.buttonsMenu')
const footer = document.querySelector('footer')
const footerA = document.querySelector('footer > a')
const logo = document.querySelector('#logoFoodfy')
const colorText = document.querySelectorAll('.colorText')

let validatDark = false

// quando click no botao darkmode faz um dark na pagina
function darkMode(){

    if(validatDark){
        validatDark = false
        console.log('desativei')
    }else{
        validatDark = true
        console.log('ativei')
    }

    darkModeBack.classList.toggle('activeColor')
    buttonDark.classList.toggle('active')
    footer.classList.toggle('active')
    footerA.classList.toggle('active')
    logo.classList.toggle('active')

    for(button of buttonsMenu){
        button.classList.toggle('active')
    }
    for(texts of colorText){
        texts.classList.toggle('active')
    }
    if(darkModeBack.classList.contains('activeColor')){
        const button = document.querySelector('.darkBotton')
        return button.innerHTML = "White Mode"
    }else {
        const button = document.querySelector('.darkBotton')
        return button.innerHTML = "Dark Mode"
    }
    
}

function permanentDark(){
    if (validatDark){
        document.querySelector('body').style.background="red"
        console.log('cheguei')
    }else{
        console.log('nao cheguei')
    }
}