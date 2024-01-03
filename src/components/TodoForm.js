import React, { useState } from 'react'

const TodoForm = ({onSubmit}) => { //here the {onSubmit} is a destructure props that we are using from the app.js file. 
    const [newItem, setNewItem] = useState('');

    function handleSubmit(e){
        e.preventDefault()   //prevents page refresh in the Form 
        if (newItem === "") return 
        
        onSubmit(newItem)
        
    
        setNewItem('')
      }

  return (
    
    <form onSubmit={handleSubmit} className="new-item-form">
    <div className="form-row">
      <label htmlFor="item">New Item</label><br/>
      <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item"/><br/>
      <button className='btn'>Add</button>
    </div>
    
 </form>
  )
}

export default TodoForm