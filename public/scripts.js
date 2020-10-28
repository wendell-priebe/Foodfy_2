const darkModeBack = document.body
const buttonDark = document.querySelector('#buttonMod')
const buttonsMenu = document.querySelectorAll('.buttonsMenu')
const footer = document.querySelector('footer')
const footerA = document.querySelector('footer > a')
const logo = document.querySelector('#logoFoodfy')
const colorText = document.querySelectorAll('.colorText')

permanencCookie()

// quando click no botao darkmode faz um dark na pagina
function darkMode(){
    onOffDark()
    let resCookie = checkCookie("cookie_valid")
    console.log(resCookie, 'rescookie botao')
    if (resCookie) {
        creatCookie("cookie_valid", false, 7)
    } else {
        creatCookie("cookie_valid", true, 7)
    }
}

// verifica estado (true/false) cookie
function checkCookie (cname){
    let test = document.cookie.split("=")
    return test[1]
}
// quando o cookie estiver true liga o mod dark
function permanencCookie(){
    let resCookie = checkCookie("cookie_valid")
    if (resCookie) {
        onOffDark()
    }
}
// cria cookie
function creatCookie(name, value, date){
    let dateExpires = "expires="+date
    document.cookie = name + "=" + value + "; " + dateExpires;
}

// aplica o dark nas paginas
function onOffDark(){

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