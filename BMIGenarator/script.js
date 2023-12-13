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

// console.log(form);