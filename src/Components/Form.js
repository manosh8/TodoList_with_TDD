import React, { useState } from "react";
import TodoList from "./TodoList";

const Form = () => {

    const [inputText, setInputText] = useState("");
    const [todolist, setTodoList] = useState([]);
    const inputRef = React.useRef();

    React.useEffect(() =>
    {
    inputRef.current.focus();
    },[])

    const handleSubmit = (event) => {
      event.preventDefault();
      setTodoList([
        ...todolist,
        {text: inputText, completed: false, id:Math.random()*10}
      ])
      setInputText("");
    }

      const handleChange = (event) => {
        setInputText(event.target.value);
      }

    return(
      <div>
       <form data-testid="input-form" onSubmit = {handleSubmit}>
        <input data-testid="input-field" type="text" className="todo-input" onChange={handleChange} value={inputText} ref={inputRef}/>
        <button data-testid="input-button" disabled={!inputText} className="todo-button" type="submit" >
        Add<i className="fas fa-plus-square"></i>
      </button>
       </form>
       <TodoList
      todolist={todolist}
      setTodoList={setTodoList}
       />
       </div>

   )
  }

 export default Form