import React from 'react'
import '../styles/AddTask.css'
import { FaPlus } from "react-icons/fa";

function AddTask() {
  return (
    <div className="input-container">
        <FaPlus className='icon-plus'/>
        <input type="text"  className='add-task-input' placeholder='Add a task...' />
    </div>
     

  )
}

export default AddTask