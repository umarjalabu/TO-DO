import { useState } from "react"
import "./styles.css"

export default function App(){
  const [newItem, setNewItem] = useState("")
  

  return (
    <>{/**adding a fragment since we are returing 2 things (form) and (hi)...react only like 1 return item */}
        <form className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input 
        value={newItem} 
        onChange={e => setNewItem(e.taget.value)} 
        type="text" 
        id="item" 
        />
      </div>
      <button className="btn">Add</button>
    </form>
    <h1 className="header">To-do List</h1>
    <ul className="list">
      <li>
        <label>
          <input type="checkbox"/>
          Item 1
        </label>
        <button className="btn btn-danger">Delete</button>
      </li>
      <li>
        <label>
          <input type="checkbox"/>
          Item 2
        </label>
        <button className="btn btn-danger">Delete</button>
      </li></ul>

    </>
   
  )
}