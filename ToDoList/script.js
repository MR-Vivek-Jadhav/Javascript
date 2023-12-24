let Inputfeild=document.getElementById('Inputfeild')

let listcontainer=document.getElementById('listcontainer')

let button=document.getElementById('btn')


button.addEventListener('click',function(){

if(Inputfeild.value == ""){
  alert('Please Enter The Task')
}else{
    
    let li=document.createElement('li')

    li.innerHTML=Inputfeild.value

    listcontainer.appendChild(li)

    let span=document.createElement('span')

    span.innerHTML="\u00d7"

    li.appendChild(span)
}

Inputfeild.value=''
saveData()
})

listcontainer.addEventListener('click',function(e){
if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked")
    saveData()
}else if (e.target.tagName='SPAN'){
    e.target.parentElement.remove()
    saveData()
}
},false)

function saveData(){
   localStorage.setItem("data",listcontainer.innerHTML)
}



function ShowData(){
    listcontainer.innerHTML = localStorage.getItem("data")
}
ShowData()