import { useState } from "react"

export function TodoForm({closeForm, addTodo}){

    const [title,setTitle] = useState('')
    const [text,setText] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!title||!text){
            return
        }
        addTodo(title,text)
        closeForm()
    }


    return(
        <div className="todo-form">
            <h2>Criar tarefa</h2>
            <form onSubmit={handleSubmit}>
                <div className="todo-form-input">
                    <p>Título</p>
                    <input 
                    onChange={(e) => setTitle(e.target.value)}
                    className="todo-form-input-title" 
                    type="text" 
                    placeholder="Digite o título" />
                    <p>Descrição</p>
                    <input
                    onChange={(e) => setText(e.target.value)}
                    className="todo-form-input-text" 
                    type="text" 
                    placeholder="Digite a descrição" />
                </div>
                <div className="todo-form-btn">
                    <button type="submit">CRIAR</button>
                    <button className="close" onClick={closeForm}>FECHAR</button>
                </div>
            </form>
        </div>
    )
}