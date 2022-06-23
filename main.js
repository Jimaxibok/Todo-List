let todos = JSON.parse(localStorage.getItem("todos")) ? JSON.parse(localStorage.getItem('todos')) :  [];

let form = document.getElementById('todo-form');
form.addEventListener('submit', addTodoToList, false)

let alt = document.querySelector('.alt-msg')

let list = document.getElementById("book-list")
showCase()


function addTodoToList (e) {
    e.preventDefault();

    const nameInput =  document.getElementById('name')
    const name = nameInput.value;
    let location = document.getElementById('location').value;
    let date = document.getElementById('date').value;

    if(name === '' || location === '' || date === '') {

        // alt.setAttribute('class', 'danger');
        // alt.innerHTML = 'please fill in all the field';
        alert('Please Fill Out All Fields');
       return
         } else {
        let todo = 
            {
            id: Date.now(),
            name,
            location,
            date
            };

            // console.log(todos);
        
         todos.push(todo)
        

        form.reset();
        localStorage.setItem("todos", JSON.stringify(todos));
    
         alt.setAttribute('class', 'success');
        alt.innerHTML = 'Todo item save successfully';


            nameInput.focus()

            list.innerHTML = ""
            showCase ();         
   
    } 

}

function showCase () {
    
    let todo;
    let newTodo = JSON.parse(localStorage.getItem('todos'));
    if(newTodo.length > 0) {
        for (let i = 0; i < newTodo.length; i++) {
        todo = newTodo[i];
    
        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${todo.name}</td>
        <td>${todo.location}</td>
        <td>${todo.date}</td>
        <td><a onclick = "delTodo(${todo.id})" href="#" class="btn btn-danger btn-sm delete" id ='del'>X</a></td>
        `;
        list.appendChild(row);
     

    }
}
}

function delTodo(id) {
 
    let itemIndex = todos.findIndex(i => i.id === id);
    todos.splice(itemIndex, 1)
    alt.setAttribute('class', 'alert alert-danger  text-center')
    alt.innerHTML = 'Deleted Todo';
  
     localStorage.setItem('todos', JSON.stringify(todos));
    
    list.innerHTML = "";
    showCase();
  }
  


 
    