import React from "react";
import Todo from "./Todo";


const TodoList = ({todolist,setTodoList}) =>{

    return(
        <div className="todo-container">
            <ul className="todo-list" data-testid="input-list">
                {todolist && todolist.map(todo => (
                    <Todo
                    key={todo.id}
                    text={todo.text}
                    todo={todo}
                    todolist={todolist}
                    setTodoList={setTodoList}
                    />
                ))}



               </ul>

        </div>
    )

}

export default TodoList;