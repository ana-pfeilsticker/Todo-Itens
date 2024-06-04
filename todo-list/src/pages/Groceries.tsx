import React from 'react'
import '../styles/Groceries.css'
import { FiEdit } from "react-icons/fi";
import AddTask from '../components/AddTask';
import ListItem from '../components/ListItem';

function Groceries() {
  return (
   <div className="groceries-page">
            <div className="title-edit">
            <div className="title-quantity-done">
                <h1>Groceries</h1>
                <p className="quantity-done">5/9</p>
            </div>
            <FiEdit   className="edit-icon"/>
        </div>
        <AddTask />
        <ListItem />
   </div>
  )
}

export default Groceries