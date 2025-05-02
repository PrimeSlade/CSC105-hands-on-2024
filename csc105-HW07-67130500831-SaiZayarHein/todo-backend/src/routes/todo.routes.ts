import { Hono } from "hono";
import * as todoController from '../controllers/todo.controller.ts';


const todoRouter = new Hono();

todoRouter.get("/", todoController.ShowTodos);
todoRouter.post("/", todoController.CreateTodo);
todoRouter.patch("/", todoController.EditTodo);
todoRouter.delete("/:id", todoController.DeleteTodo);
todoRouter.patch("/status/:id", todoController.CompleteTodo);

export { todoRouter }