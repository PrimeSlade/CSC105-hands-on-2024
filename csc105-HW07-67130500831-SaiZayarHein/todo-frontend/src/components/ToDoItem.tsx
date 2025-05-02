import React, { useState } from 'react'
import { Todo } from '../types/todo';

// type ToDoItemProps = {
//     todo: Todo;
// }

const ToDoItem = ({todo, handleEdit, handleSuccess, handleDelete, idNum}) => {
    const [newName, setNewName] = useState('');

  return (
    <div className='bg-white p-3'>
        <div className='flex gap-5'>
        <h1>{idNum}.</h1>
        <h1 className={todo.success? 'line-through': ''}>{todo.name}</h1>
        <h1>{todo.success === true ? 'Done':'Not Done'}</h1>
        </div>
        <div className='flex gap-5'>
            <input className='w-40 px-3'
            placeholder='Enter todo name'
            value={newName}
            onChange={(e)=>setNewName(e.target.value)}
            />
            <button className='bg-yellow-200 px-2 py-1' onClick={()=> {handleEdit(todo.id, newName); setNewName('')}}>Edit Name</button>
            <button className='bg-green-200 px-2 py-1' onClick={()=>handleSuccess(todo.id)}>{todo.success !== true? 'Mark as Complete' : 'Mark as Incomplete'}</button>
            <button className='bg-red-200 px-2 py-1'onClick={()=>handleDelete(todo.id)}>Delete</button>
        </div>
    </div>
  )
}

export default ToDoItem