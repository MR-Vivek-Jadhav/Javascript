1. BackGround Changer

```
" JavaScript Code "

let red=document.getElementById('red')

let blue=document.getElementById('blue')

let green=document.getElementById('green')

let yellow = document.getElementById('yellow');

red.addEventListener('click',function(){
   document.body.style.backgroundColor='red'
})

blue.addEventListener('click',function(){
  document.body.style.backgroundColor='blue'
})

green.addEventListener('click',function(){
  document.body.style.backgroundColor='green'
})

yellow.addEventListener('click',function(e){
  document.body.style.backgroundColor='yellow'
//   console.log(e.target)
})

// let commanClass = document.querySelectorAll('.commanClass');

// commanClass.forEach(function (button) {
//   button.addEventListener('click', function (e) {
//     // console.log(e.target)

//     if (e.target.id === 'red') {
//       document.body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id === 'blue') {
//       document.body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id === 'green') {
//       document.body.style.backgroundColor = e.target.id;
//     }

//     if (e.target.id === 'yellow') {
//       document.body.style.backgroundColor = e.target.id;
//     }
//   });
// });

// console.log(commanClass)

```

2. BMI Genarator

```

" JavaScript Code "

let form =document.getElementById('form')

// >>> this usecase will Give Uhh Empty

// let height=(document.querySelector('#height'))
// let weight=(document.querySelector('#weight'))
// let result=document.querySelector('#result')
// let Guide=document.querySelector('#Guide')

form.addEventListener('submit',function(e){
    e.preventDefault()
    let height=parseInt(document.querySelector('#height').value)
    let weight=parseInt(document.querySelector('#weight').value)
    let result=document.querySelector('#result')
    let Guide=document.querySelector('#Guide')

     if(height === "" || height < 0 || isNaN(height)){
     result.innerHTML=`please enter a Valid height ${height}`
     }else if(weight === "" || weight < 0 || isNaN(weight)){
        result.innerHTML=`please enter a Valid Weight ${weight}`
     }else{
       let formulaBMI= (weight / ((height * height)/10000)).toFixed(2)
       result=result.innerHTML=`${formulaBMI}`
     }
     if(result < 18.6){
        Guide.innerHTML=' { Under Weight }'
 }else if(result > 18.6 && result < 24.9){
        Guide.innerHTML=' { Normal Range} '
 }else if( result > 24.9){
  Guide.textContent='{ OverWeight}'
}

})

// console.log(form)

```

3.Digital Clock

```

" JavaScript Code "


let clock=document.getElementById('clock')

setInterval(function(){
    let date=new Date()
   clock.innerHTML=date.toLocaleTimeString()
},1000)

