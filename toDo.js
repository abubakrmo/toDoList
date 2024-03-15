const addtoDo = document.querySelector('.addToDo')
const ul = document.querySelector('ul')
const search = document.querySelector('.search input')
const somethingtodo = [];
const addnewtodo = document.querySelector('.addnewtodo')
const addError = document.querySelector('form span')
const listGroup = document.querySelector('ul.children')

const displaytoDo = userToDo =>{
    ul.innerHTML += `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        ${userToDo}
        <i class="fa-solid fa-trash delete"></i>
    </li>
    `
}




//Add toDo
addtoDo.addEventListener('submit', e=>{
    e.preventDefault()
    const userToDo = addtoDo.add.value.trim();
    
    if(userToDo.length){
        
        if(!somethingtodo.some(item=>item.todo === userToDo)){
            displaytoDo(userToDo)
            addtoDo.reset();
            somethingtodo.push({todo: userToDo})
            localStorage.setItem('GetToDos', JSON.stringify(somethingtodo))
            const datafromLs = JSON.parse(localStorage.getItem('GetToDos'))
           
            addError.classList.add('d-none')
            addnewtodo.style.border ="none"
    
        }else{
            addnewtodo.style.border = "1px solid red"
            addError.classList.remove('d-none')
            addError.textContent = "Todo already exists"

        }
       
    }else{
        alert('Input a value')
    }
})

//Delete toDo

ul.addEventListener('click', e=>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove()
    }
})

//Search toDo

const filteredtoDos = searchedtoDo => {
    //Using Array method chaining

    // Array.from(ul.children)
    // .filter( todo => !todo.textContent.toLowerCase().includes(searchedtoDo))
    // .forEach( todo => todo.classList.add('filtered'))

    // Array.from(ul.children)
    // .filter( todo => todo.textContent.toLowerCase().includes(searchedtoDo))
    // .forEach( todo => todo.classList.remove('filtered'))

    
    //Using conditional statement
    const todoArray = Array.from(ul.children)
    todoArray.forEach(todo=>{
        if(!todo.textContent.toLowerCase().includes(searchedtoDo)){
            // console.log(todo)
            todo.classList.add('filtered')
            
        }else{
            todo.classList.remove('filtered')
        }
    })
}

search.addEventListener('keyup', ()=>{
    const searchedtoDo = search.value.toLowerCase().trim();
    filteredtoDos(searchedtoDo)
})