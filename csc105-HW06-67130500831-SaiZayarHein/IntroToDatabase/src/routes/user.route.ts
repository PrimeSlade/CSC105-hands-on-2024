import { Hono } from "hono";
import * as userController from "../controllers/user.controller.js";

const userRouter = new Hono();

userRouter.post("/create", userController.createUser);
userRouter.get("/", userController.getAlluser);
userRouter.put("/edit/name/:id", userController.editFirstAndLast);

export { userRouter };
