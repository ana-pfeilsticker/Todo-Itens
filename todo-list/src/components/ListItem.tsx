
import React, { useState } from 'react'
import { IoTrashOutline } from "react-icons/io5";
import '../styles/ListItem.css'

interface Item {
  text:string;
  done: boolean;
}

interface ListItemProps{
  item: Item;
  onDelete: () => void;
  onToggleDone: () => void;
}


const ListItem: React.FC<ListItemProps> = ({ item, onDelete, onToggleDone }) => {




  



  return (
    <div className="list-item-wraper">
        <div className={`todo-check ${item.done ? 'done' : ''}`} onClick={onToggleDone}>

        </div>
        <h2 className={`todo-text ${item.done ? 'done' : ''}`}>
          {item.text}
        </h2>

        <IoTrashOutline className='icon-trash' onClick={onDelete}/>

        
    </div>
  )
}

export default ListItem