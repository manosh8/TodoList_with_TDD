import React from "react";

const Todo = ({ text,todo,todolist,setTodoList }) =>{

    let start =0;
    const deleteHandler = () =>{
        start = start-1;
        setTodoList(todolist.filter((el) =>el.id !==todo.id));
    }
    const completeHandler = () =>{
        start = start+1;
        setTodoList(todolist.map(item => {
            if(item.id === todo.id){
                return{
                    ...item, completed: !item.completed
                }
            }
            return item;
        })
        )
    }



    return(
        <div className="todo">
            <li data-testid="todo-item" value={text}  className={`todo todo-item ${todo && todo.completed ? "completed":""}`}>{text}</li>
            <li data-testid="todo-count" className={`${start}`}></li>
            <button data-testid="todo-complete"  className="complete-btn" onClick={completeHandler}>Completed
                <i className="fas fa-check"></i>
            </button>
            <button data-testid="todo-trash" className="trash-btn" onClick={deleteHandler}>Delete
            <i className="fas fa-trash"></i>
            </button>
        </div>
    )
}

export default Todo;