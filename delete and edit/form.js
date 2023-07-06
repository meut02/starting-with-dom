//document.getElementById('my-form')
//const ul=document.querySelector('.items')
//const items=document.querySelectorAll('.item')
//ul.firstElementChild.style.backgroundColor='green'
//ul.children[1].style.backgroundColor='yellow'
//const btn=document.querySelector('.btn')
//btn.addEventListener('click',(e)=>{
   // e.preventDefault()
    //document.querySelector('#my-form').style.background='#ccc'
//})
const myForm=document.querySelector('#my-form')
const nameInput=document.querySelector('#name')
const emailInput=document.querySelector('#email')
const msg=document.querySelector('.msg')
const userList=document.querySelector('#users')

myForm.addEventListener('submit',onSubmit)

function onSubmit(e){
    e.preventDefault()

    if(nameInput.value===''|| emailInput.value==='')
    {
        msg.classList.add('error')
        msg.innerHTML='please enter all fields'
        setTimeout(()=>msg.remove(),3000)
    }
    else{
        const li=document.createElement('li')
        li.appendChild(document.createTextNode(`${nameInput.value}:${emailInput.value}`))
     userList.appendChild(li)
     nameInput.value=''
     emailInput.value=''

    }
}