import React, { useState } from 'react'
import '../styles/AddTask.css'
import { FaPlus } from "react-icons/fa";

function AddTask({addGrocery}:any) {
  const [taskInput, setTaskInput] = useState('');

  const handleChange = (event:any) => {
    setTaskInput(event.target.value);
  }

  const handleAddClick = () => {
    if (taskInput.trim() !== ''){
      addGrocery(taskInput);
      setTaskInput('');
    }
  }



  return (
    <div className="input-container">
        <FaPlus className='icon-plus' onClick={handleAddClick}/>
        <input type="text"  className='add-task-input' placeholder='Add a task...' 
        value={taskInput}
        onChange={handleChange}
        />
    </div>
     

  )
}

export default AddTask