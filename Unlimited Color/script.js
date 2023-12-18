// GENERATE RANDOM COLOR

let randomColor=function(){
    let hex ="0123456789ABCDEF"
    let color = '#'

   for (let i = 0; i < 6; i++) {
    color += hex[Math.floor( Math.random() * 16)]
   }
//    return color

// for(let i of hex){
//    if(i<=6){
//     color +=hex[Math.floor( Math.random() * 16)]
// }

    
//    }


return color
}

let interValID
let startChangingColor=function(){
    interValID=setInterval(function(){
     document.body.style.backgroundColor=randomColor()
        },1000)
}

let stopChangingcolor=function(){
    clearInterval(interValID)

   }


document.querySelector('#start').addEventListener('click',startChangingColor)

document.querySelector('#stop').addEventListener('click',stopChangingcolor)



let BoyzObject={
    student1:'dungya',
    student2:'dhayrya',
    student3:"kabir",
    student14:"nahuShet",
     student5:'Grace'

}
for(let i in BoyzObject){
console.log(BoyzObject[i]);
}

BoyzObject.map((item)=>{
return item
})
