let passwordId = document.getElementById('passwordId');
let inputSlider = document.getElementById('inputSlider');
let rangevalue = document.getElementById('rangevalue');
let toUpperCase = document.getElementById('toUpperCase');
let toLowerCase = document.getElementById('toLowerCase');
let number = document.getElementById('number');
let symbol = document.getElementById('symbol');
let mybtn = document.getElementById('mybtn');
let copyClip = document.getElementById('copyIcon');

copyClip.addEventListener('click', ()=>{
    if(passwordId.value!="" || passwordId.value.length>=1){
        navigator.clipboard.writeText(passwordId.value);
        copyClip.innerText="check"
        copyClip.title="Password Copied"
        setTimeout(() => {
            copyClip.innerHTML="content_copy"
        }, 1000);
    }
})


rangevalue.textContent = inputSlider.value;
inputSlider.addEventListener('input', () => {
    rangevalue.textContent = inputSlider.value;
})

mybtn.addEventListener('click', () => {
    passwordId.value = generatefun();
});

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = 'abcdefghijklmnopqrstuvwxyz'
const num = "0123456789"
const symbolLtr = "!@#$%&*"


function generatefun() {
    let genpassword = "";
    let allChar="";

    allChar+= toLowerCase.checked? lowerCase:"";
    allChar+= toUpperCase.checked? upperCase:"";
    allChar+= number.checked? num:"";
    allChar+= symbol.checked? symbolLtr:"";

    for (i = 0; i <= inputSlider.value; i++) {
        genpassword += allChar.charAt(Math.floor(Math.random() * allChar.length))
    }
    return genpassword;


}
