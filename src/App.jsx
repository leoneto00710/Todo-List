import { useState } from 'react'
import './App.css'
import { Todo } from './components/todo'
import { TodoForm } from './components/todo-form'
import { Search } from './components/search'
import { Filter } from './components/filter'

export function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Projeto para o fim do mês",
      text: "Criar funcionalidade x no sistema",
      isCompleted: true,
    },
    {
      id: 2,
      title: "Reunião com o cliente",
      text: "Discutir os requisitos do projeto",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Revisão do código",
      text: "Revisar o código do módulo y",
      isCompleted: false,
    },
    {
      id: 4,
      title: "Atualização do servidor",
      text: "Instalar atualizações de segurança",
      isCompleted: false,
    },
    {
      id: 5,
      title: "Treinamento da equipe",
      text: "Realizar treinamento sobre novas ferramentas",
      isCompleted: false,
    }
])

  const [isCreating,setIsCreating] = useState(false)
  const [search,setSearch] = useState('')
  const [filter,setFilter] = useState('All')

  const addTodo=(title,text) => {
    const newTodos= [...todos, {
      id: Math.floor(Math.random()*10000),
      title,
      text,
      isCompleted: false,
    }]
    setTodos(newTodos)
  }

  const removeTodo=(id) => {
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter(todo => todo.id !== id ? todo : null)
    setTodos(filteredTodos)
  }

  const completeTodo = (id) =>{
    const newTodos = [...todos]
    newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo)
    setTodos(newTodos)
  }
  
  function openForm(){
    setIsCreating(true)
  }

  function closeForm(){
    setIsCreating(false)
  }

  return (
    <div className='app'>
          <div><h1>Lista de Tarefas</h1></div>
          {todos.length>0 && (
          <div className='search-container'>
            <Search search={search} setSearch={setSearch}/>
            <Filter filter={filter} setFilter={setFilter}/>
          </div>
          )}
        {isCreating?(
          <TodoForm closeForm={closeForm} addTodo={addTodo}/>
          ):(
          <div className='create-task-btn'><button onClick={openForm}>NOVA TAREFA</button></div>
          )}
        <div className="todo-list">
            {todos.length>0?(
              todos.filter((todo)=>
                filter==="All"
                ? true 
                : filter === "Completed"
                  ? todo.isCompleted 
                  : !todo.isCompleted)
                  .filter((todo) => 
                    todo.text.toLowerCase().includes(search.toLowerCase()) ||
                    todo.title.toLowerCase().includes(search.toLowerCase()))
              .map((todo)=>(
                    <Todo 
                    key={todo.id} 
                    todo={todo} 
                    removeTodo={removeTodo}
                    completeTodo={completeTodo}
                    />
                ))
            ):(
              <h2>Crie sua primeira tarefa!</h2>
            )}
        </div>
    </div>
  )
}