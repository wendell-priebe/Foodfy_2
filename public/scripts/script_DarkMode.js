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
    // liga o modedark
    onOffDark()
    // verifica se esta true/false e troca estado cookie
    let resCookie = checkCookie("cookie_valid")
    if (resCookie) {
        creatCookie("cookie_valid", false, 7)
    }else{
        creatCookie("cookie_valid", true, 7)
    }
}

// verifica estado true/false cookie
function checkCookie (name){
    // cria o cookie caso nao exista
    let testname = document.cookie.includes(name)

    if (!testname) {
        creatCookie("cookie_valid", false, 7)
        return testname
    }
    // retorna o valor de cookie
    let [,test] = document.cookie.split("=")
    if (test==="true") {
        return true
    }else{
        return false
    }
}
// quando o cookie estiver true liga o modo dark
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