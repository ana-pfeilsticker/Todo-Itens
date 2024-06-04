
import React from 'react'
import { IoTrashOutline } from "react-icons/io5";
import '../styles/ListItem.css'

interface Item {
  text:string;
  done: boolean;
}

interface ListItemProps{
  item: Item;
}


const ListItem: React.FC<ListItemProps> = ({ item }) => {
  return (
    <div className="list-item-wraper">
        <div className="todo-check">

        </div>
        <h2 className="todo-text">
          {item.text}
        </h2>

        <IoTrashOutline className='icon-trash'/>

        
    </div>
  )
}

export default ListItem