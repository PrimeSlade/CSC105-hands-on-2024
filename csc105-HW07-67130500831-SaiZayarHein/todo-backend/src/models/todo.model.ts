import { db } from '../index.ts';

const ShowTodo = async () => {
    const todos = await db.todo.findMany();
    return todos;
}

const CreateTodo = async (name: string) => {
    const todo = await db.todo.create({
        data: {
            name: name,
        },
    })
    return todo
}

const EditTodo = async (id: number, name: string) => {
    const todo = await db.todo.update({
        where: {
            id: id,
        },
        data: {
            name: name,
        }
    })
    return todo
}

const DeleteTodo = async (id: number) => {
    const todo = await db.todo.delete({
        where: {
            id: id
        }
    }) 
    return todo
}

const CompleteTodo = async (id: number) => {
    const currTodo = await db.todo.findUnique({
        where: {
            id: id
        }
    })

    const todo = await db.todo.update({
        where: {
            id: id
        },
        data: {
            success: !currTodo?.success
        }
    })
}

export { ShowTodo, CreateTodo, EditTodo, DeleteTodo, CompleteTodo }