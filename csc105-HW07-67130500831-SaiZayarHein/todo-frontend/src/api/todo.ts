import { Todo } from "../types/todo";
import { Axios } from "../utils/axiosInstance";

type arrayTodo = {
	success: boolean;
	data: Todo[] | null;
	msg: string;
};

type singleTodo = {
  success: boolean;
	data: Todo | null;
	msg: string;
}

const getTodo = async () => {
    try {
      const response = await Axios.get<arrayTodo>("/todos"); // Your todo api path of getting todo
      console.log("Raw response:", response);
      console.log("Response data:", response.data);
      return response.data;
    } catch (e) {
      console.log(e);
      return {
        success: false,
        data: null,
        msg: `${e}`
      }
    }
  }

const createTodo = async (name: string) => {
  try {
    const response = await Axios.post<singleTodo>("/todos", {name: name});
    return response.data;
  }
  catch (e) {
    console.log(e);
    return {
      success: false,
      data: null,
      msg: `${e}`
    }
  }
}

const editTodo = async (id: number, name: string) => {
  try {
    const response = await Axios.patch<singleTodo>("/todos",{
      id:id,
      name: name,
    })
    return response.data;
  }
  catch (e) {
    console.log(e);
    return {
      success: false,
      data: null,
      msg: `${e}`
    }
  }
}

const completeTodo = async (id: number) => {
  try {
    const response = await Axios.patch<singleTodo>(`/todos/status/${id}`);
    return response.data;
  }
  catch (e) {
    console.log(e);
    return {
      success: false,
      data: null,
      msg: `${e}`
    }
  }
}

const deleteTodo = async (id: number) => {
  try {
    const response = await Axios.delete<singleTodo>(`/todos/${id}`);
    return response.data;
  }
  catch (e) {
    console.log(e);
    return {
      success: false,
      data: null,
      msg: `${e}`
    }
  }
}

  export { getTodo, createTodo, editTodo, completeTodo, deleteTodo }