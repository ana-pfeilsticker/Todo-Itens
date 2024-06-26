import React from 'react'
import '../styles/Groceries.css'
import { FiEdit } from "react-icons/fi";
import AddTask from '../components/AddTask';
import ListItem from '../components/ListItem';
import { useState } from 'react';


function Groceries() {

  const [groceries, setGroceries] = useState([
    {text: 'Apple', done:false},
    {text: 'Banana', done:false},
    {text: 'Uva', done:false},
    {text: 'Jabuticaba', done:false},

  ]);


  const addGrocery = (newTextGrocery:string) =>{
    const newGrocery = {text: newTextGrocery, done:false};
    setGroceries([...groceries, newGrocery])
  }

  const deleteGrocery = (index:number) => {
    const newGroceries = groceries.filter((_,i)=> i !== index);
    setGroceries(newGroceries);
  }

  const toggleDone = (index:number) => {
    const newGroceries = groceries.map((grocery, i)=>
    i === index? {...grocery, done:!grocery.done} : grocery);
    setGroceries(newGroceries)
  }


  return (
   <div className="groceries-page">
            <div className="title-edit">
            <div className="title-quantity-done">
                <h1>Groceries</h1>
                <p className="quantity-done">5/9</p>
            </div>
            <FiEdit   className="edit-icon"/>
        </div>
        <AddTask addGrocery={addGrocery} />
        <div className="list-itens">
          {groceries.map((item, index)=> (
              <ListItem key={index} item={item} onDelete={()=> deleteGrocery(index)} onToggleDone={() => toggleDone(index)}/>
          ))}

  
        </div>
        

   </div>
  )
}

export default Groceries