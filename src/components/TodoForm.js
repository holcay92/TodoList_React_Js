import React, {useState} from 'react'

function TodoForm(props) {
    const[input,setInput]=useState('')

    const handleChange = e =>{
        setInput(e.target.value);
    }

    //to prevent refreshing the page on every click we write this function
    const handleSubmit = e => {
        e.preventDefault();

        // props.onSubmit ({
        //     id: Math.floor(Math.random()*10000),
        //     text: input
        // });

        setInput('');
    }
  return (
    <form className="todo-form" onSubmit={handleSubmit}/* to prevent refreshing the page we write this function call*/>
        <input type="text"
            placeholder="Add a todo"
            value={input}
            name="text" 
            className='todo-input'
            onChange={handleChange}
            />
        <button className='todo-button'>Add todo</button>
    </form>
  )
}

export default TodoForm