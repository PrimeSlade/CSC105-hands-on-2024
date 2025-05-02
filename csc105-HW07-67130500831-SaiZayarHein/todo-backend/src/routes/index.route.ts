import { Hono } from "hono";
import { todoRouter } from "./todo.routes.ts"

const mainRouter = new Hono();

mainRouter.route("/todos", todoRouter);

export { mainRouter };