import type { Context } from "hono";
import * as todoModel from "../models/todo.model.ts";
import {type editTodoBody, type createTodoBody } from "../types/todo.types.ts";

const ShowTodos = async (c:Context) => {
    try {
        const todos = await todoModel.ShowTodo();
        return c.json({
            success: true,
            data: todos,
            msg: "Sucessfully got all todos",
        })
    } catch (e) {
        return c.json({
            success: false,
            data: null,
            msg: `Internal Server Error: ${e}`,
        },500)
    }
}

const CreateTodo = async (c:Context) => {
    try {
        const body = await c.req.json<createTodoBody>();
        if(!body.name) {
            return c.json(
                {
                    success: false,
                    data: null,
                    msg: 'Missing required fields',
                },
                400
            )
        }
        const newTodo = await todoModel.CreateTodo(body.name);
        return c.json(
            {
                success: true,
                data: newTodo,
                msg: "Successfully created new todo",
            },
        )
    }
    catch(e) {
        return c.json (
            {
                success: false,
                data: null,
                msg: `Internal Server Error: ${e}`,
            }
        )
    }
}

const EditTodo = async (c: Context) => {
    try {
        const body = await c.req.json<editTodoBody>();
        if (!body.id || !body.name) {
            return c.json(
                {
                    success: false,
                    data: null,
                    msg: 'Missing required fields',
                },
                400
            )
        }
        const editedTodo = await todoModel.EditTodo(body.id,body.name);
        return c.json(
            {
                success: true,
                data: editedTodo,
                msg: "Successfully updated todo",
            },
        )

    }
    catch(e) {
        return c.json (
            {
                success: false,
                data: null,
                msg: `Internal Server Error: ${e}`,
            }
        )
    }
}

const DeleteTodo = async (c: Context) => {
    try {
        const id = c.req.param('id');
        if (isNaN(parseInt(id))) {
            return c.json ({
                success: false,
				data: null,
				msg: 'Wrong data format',
            })
        }
        const deletedTodo = await todoModel.DeleteTodo(parseInt(id));
        return c.json(
            {
                success: true,
                data: deletedTodo,
                msg: "Successfully deleted todo",
            },
        )
    }
    catch(e) {
        return c.json (
            {
                success: false,
                data: null,
                msg: `Internal Server Error: ${e}`,
            }
        )
    }
}

const CompleteTodo = async (c: Context) => {
    try {
        const id = c.req.param('id');
        if (isNaN(parseInt(id))) {
            return c.json ({
                success: false,
				data: null,
				msg: 'Wrong data format',
            })
        }
        const completedTodo = await todoModel.CompleteTodo(parseInt(id));
        return c.json(
            {
                success: true,
                data: completedTodo,
                msg: "Successfully updated todo status",
            },
        )
    }
    catch(e) {
        return c.json (
            {
                success: false,
                data: null,
                msg: `Internal Server Error: ${e}`,
            }
        )
    }
}

export { ShowTodos, CreateTodo, EditTodo, DeleteTodo, CompleteTodo }