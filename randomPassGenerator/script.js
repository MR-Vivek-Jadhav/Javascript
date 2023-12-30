const passwordBox=document.getElementById('password')

const length=12;

const upperCase='ABCDEFGHIJKLMNOPQRSTUVWXYZ'

const lowerCase='abcdefghijklmnopqrstuvwxyz'

const number='0123456789'

const symbol='!@#$%^&&*+(){[}{<>='

let allCharacter=upperCase + lowerCase + number + symbol

function createPassword(){

    let password=''

       password += upperCase [Math.floor(Math.random() * upperCase.length)]
       password += lowerCase [Math.floor(Math.random() * lowerCase.length)]
       password += number [Math.floor(Math.random() * number.length)]
       password += symbol [Math.floor(Math.random() * symbol.length)]

       console.log(password);

    while(length > password.length){
        password += allCharacter[Math.floor(Math.random() * allCharacter.length)]
    }

passwordBox.value = password;

console.log(password);

}

passwordBox.addEventListener('click',createPassword())


let copy=document.getElementById('copy').addEventListener('click',function(){
    passwordBox.select()
    passwordBox.setSelectionRange(0,99999)
    
})
