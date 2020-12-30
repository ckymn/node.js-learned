const todos = [
  { title: 'Tood 1', description: 'puresol bug temizligi..' },
  { title: 'Tood 2', description: 'filmleri getir..' },
  { title: 'Tood 3', description: 'video izle..' },
  { title: 'Tood 4', description: 'play game..' }
]

let todoListEl = document.getElementById('todoList')

const todoList = () => {
  setTimeout(() => {
    let todoItems = ''
    todos.forEach(arr => {
      todoItems += `
                <li>
                    <b>${arr.title}</b>
                    <p>${arr.description}</p>
                </li>
            `
      todoListEl.innerHTML = todoItems
    })
  }, 1000)
}

const newTodo = (todo,callback) => {
  setTimeout(() => {
    todos.push(todo)
    callback()
  }, 2000)
}

newTodo({
  title: 'Todo 5',
  description: 'Write codes'
},todoList)

todoList()