import { Hono } from "hono";
import * as todoController from "../controllers/todo.controller.ts";

const todoRouter = new Hono();
todoRouter.post("/create", todoController.createTodo);
todoRouter.get("/:id", todoController.getTodo);
todoRouter.patch("/edit/complete/:id", todoController.updateCompleteTodo);
todoRouter.patch("/edit/title/:id", todoController.updateTitleTodo);
todoRouter.get("/user/:id", todoController.getAllTodo);
todoRouter.delete("user/:id", todoController.deleteTodo);

export { todoRouter };
