export function Todo({todo, removeTodo, completeTodo}) {
    return (
        <div className="todo" 
        style={{backgroundColor: todo.isCompleted ? "#166534":""}}>
            <div className="content" 
            style={{textDecoration: todo.isCompleted? "line-through":""}}>
                <p>{todo.title}</p>
                <p className='text'>
                    {todo.text}
                </p>
            </div>
            <div className="todo-btn">
                {todo.isCompleted?(
                    <button className="complete" onClick={()=>completeTodo(todo.id)}>DESFAZER</button>
                ):(
                   <button className="complete" onClick={()=>completeTodo(todo.id)}>CONCLUIR</button>
                )}
                <button className="remove" onClick={()=>removeTodo(todo.id)}>APAGAR</button>
            </div>
        </div>
    )
}