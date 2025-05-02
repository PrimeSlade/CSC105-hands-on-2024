import React, { useEffect, useState } from 'react'
import { Todo } from './types/todo';
import ToDoItem from './components/ToDoItem';
import { Axios } from './utils/axiosInstance';
import * as todoAPI from './api/todo.ts';

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodoName, setNewTodoName] = useState<string>("");

  const handleAdd = async () => {
    const data = await todoAPI.createTodo(newTodoName);
    if (!data.success) {
      alert(data.msg);
    }
    await fetchTodoData();
    setNewTodoName('');
  }

  const handleEdit = async (id: number, newName: string) => {
    const data = await todoAPI.editTodo(id, newName);
    if (!data.success) {
      alert(data.msg);
    }
    await fetchTodoData();
  }

  const handleSuccess = async (id: number) => {
    const data = await todoAPI.completeTodo(id);
    if (!data.success) {
      alert(data.msg);
    }
    await fetchTodoData();
  }

  const handleDelete = async (id: number) => {
    const data = await todoAPI.deleteTodo(id);

    if (!data.success) {
      alert(data.msg);
    }
    await fetchTodoData();
  }

  const fetchTodoData = async () => {
		const data = await todoAPI.getTodo();
		if (data.success && data.data!== null) {
			setTodos(data.data);
		}
	};

	useEffect(() => {
		fetchTodoData();
	}, []);

  return (
    <div className='bg-white flex justify-center items-center h-screen'>
      <div className='bg-purple-300 p-4 flex flex-col gap-4 rounded-lg'>
      <div className='self-center flex gap-2'>
        <input className='py-1'
        placeholder='Enter new todo'
        value={newTodoName}
        onChange={(e) => setNewTodoName(e.target.value)}
        />
        <button className='bg-purple-400 px-2 py-1 text-white' onClick={()=>{
          handleAdd();
          setNewTodoName('')
        }}>Add Todo</button>
        </div>
        {todos.map((todo, index: number) => (
          <ToDoItem
          key={index}
          idNum = {index+1}
          todo={todo}
          handleEdit={handleEdit}
          handleSuccess={handleSuccess}
          handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  )
}

export default App