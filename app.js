// Callback, anonym

// const input=document.querySelector('input')
// const btns=document.querySelectorAll('button')
// const today=document.querySelector('#today')
// const plans=document.querySelector('#plans')

// function createTask(title,callback){
//     const liTag=document.createElement('li')
//     liTag.innerHTML=title
//     callback(liTag)
// }

// btns[0].onclick=()=>{
//     if(input.value.trim().length>0){
//         createTask(input.value,function(jumush){
//         today.appendChild(jumush)
//         input.value=''
//         input.style='none'
//     })
// }else{
//     input.style.borderColor='red'
// }
// }

// function addPlans(task){
//     plans.appendChild(task)
// }

// btns[1].onclick=()=>{
//     if(input.value.trim().length>0){
//         createTask(input.value,addPlans)
//     input.value=''
//     input.style='none'
//     }else{
//         input.style.borderColor='red'
//     }
// }



//   rest spread
// concat, 
// reverse
//  ,, jok kyl


const input=document.querySelector('input')
const btn=document.querySelector('button')
const root=document.querySelector('#root')

function removeSpaces(str) {
    return str.replace(/\s/g, ''); 
}


function createTask(title,callback){
        const liTag=document.createElement('li')
        liTag.innerHTML=title
        callback(liTag)
    }


btn.onclick=()=>{
    if(input.value===input.value.split('').reverse().join('').trim()){
        createTask(input.value,function(jumush){
            root.appendChild(jumush)
            input.value=''
        }) 
    }else{
        root.innerHTML=`<h1>Sorry</h1>`
        input.value=''
    }
}




