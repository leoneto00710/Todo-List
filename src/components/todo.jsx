export function Todo({todo, removeTodo, completeTodo}) {
    return (
        <div className="todo" style={{backgroundColor: todo.isCompleted ? "#166534":""}}>
            <div className="content">
                <p>{todo.title}</p>
                <p className='text'>
                    {todo.text}
                </p>
            </div>
            <div className="todo-btn">
                <button className="complete" onClick={()=>completeTodo(todo.id)}>CONCLUIR</button>
                <button className="remove" onClick={()=>removeTodo(todo.id)}>APAGAR</button>
            </div>
        </div>
    )
}