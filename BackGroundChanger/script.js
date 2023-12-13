

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
