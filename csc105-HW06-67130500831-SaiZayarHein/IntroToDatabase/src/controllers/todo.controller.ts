import type { Context } from "hono";
import * as todoModel from "../models/todo.model.ts";

type createTodoBody = {
  title: string;
  userId: number;
};

type editTitle = {
  title: string;
};

const createTodo = async (c: Context) => {
  try {
    const body: createTodoBody = await c.req.json();
    if (!body.title || !body.userId)
      return c.json(
        {
          success: false,
          data: null,
          msg: "Missing required fields",
        },
        400
      );
    const newTodo = await todoModel.createTodo(body.title, body.userId);
    return c.json({
      success: true,
      data: newTodo,
      msg: "Created new Todo!",
    });
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `${e}`,
      },
      500
    );
  }
};

const getTodo = async (c: Context) => {
  try {
    const param = c.req.param("id");
    if (param !== undefined && param !== null) {
      const data = await todoModel.getTodo(parseInt(param));
      return c.json(data, 200);
    }
    return c.json(
      {
        success: false,
        data: null,
        msg: "Missing required fields",
      },
      400
    );
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `${e}`,
      },
      500
    );
  }
};

const updateCompleteTodo = async (c: Context) => {
  try {
    const param = c.req.param("id");
    if (param !== undefined && param !== null) {
      const data = await todoModel.updateCompleteTodo(parseInt(param));
      return c.json(data, 200);
    }
    return c.json(
      {
        success: false,
        data: null,
        msg: "Missing required fields",
      },
      400
    );
  } catch (error) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `${error}`,
      },
      500
    );
  }
};

const updateTitleTodo = async (c: Context) => {
  try {
    const { title }: editTitle = await c.req.json();
    const id = c.req.param("id");

    const data = await todoModel.updateTitle(parseInt(id), title);
    return c.json(data, 200);
  } catch (error) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `${error}`,
      },
      500
    );
  }
};

const getAllTodo = async (c: Context) => {
  try {
    const id = c.req.param("id");
    const data = await todoModel.getAllTodo(parseInt(id));

    return c.json(data, 200);
  } catch (error) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `${error}`,
      },
      500
    );
  }
};

const deleteTodo = async (c: Context) => {
  try {
    const query = c.req.param("id");
    if (query !== undefined && query !== null) {
      const data = await todoModel.deleteTodo(parseInt(query));
      return c.json(data, 200);
    }
    return c.json(
      {
        success: false,
        data: null,
        msg: "Missing required fields",
      },
      400
    );
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `${e}`,
      },
      500
    );
  }
};

export {
  createTodo,
  getTodo,
  updateCompleteTodo,
  updateTitleTodo,
  getAllTodo,
  deleteTodo,
};
