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
const phoneInput=document.querySelector('#phone')
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
        const userDetails={
            name:nameInput.value,
            email:emailInput.value,
            phone:phoneInput.value

        }
        let existingUsers=localStorage.getItem('users')
        existingUsers=existingUsers?JSON.parse(existingUsers):[]
        existingUsers.push(userDetails)
        localStorage.setItem('users',JSON.stringify(existingUsers))
        
        const li=document.createElement('li')
        li.appendChild(document.createTextNode(`${nameInput.value}:${emailInput.value}:${phoneInput.value}`))
     userList.appendChild(li)
     nameInput.value=''
     emailInput.value=''
     phoneInput.value=''

    }
}