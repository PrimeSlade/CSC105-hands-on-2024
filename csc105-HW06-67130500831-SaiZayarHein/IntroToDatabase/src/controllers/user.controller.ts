import type { Context } from "hono";
import * as userModel from "../models/user.model.js";

type createUserBody = {
  firstName: string;
  lastName: string;
};

const createUser = async (c: Context) => {
  try {
    const body = await c.req.json<createUserBody>();
    if (!body.firstName || !body.lastName)
      return c.json(
        {
          success: false,
          data: null,
          msg: "Missing required fields",
        },
        400
      );
    if (await userModel.isDuplicate(body.firstName, body.lastName)) {
      return c.json({
        success: false,
        data: null,
        msg: "firstName or lastName is duplicated",
      });
    }
    const newUser = await userModel.createUser(body.firstName, body.lastName);
    return c.json(
      {
        success: true,
        data: newUser,
        msg: "Created new User!",
      },
      200
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

const getAlluser = async (c: Context) => {
  try {
    const users = await userModel.getAlluser();
    return c.json({
      success: true,
      data: users,
      msg: "get all users",
    });
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

const editFirstAndLast = async (c: Context) => {
  try {
    const { firstName, lastName }: createUserBody = await c.req.json();
    const id = c.req.param("id");
    const user = await userModel.editFirstAndLast(
      firstName,
      lastName,
      parseInt(id)
    );

    return c.json({
      success: true,
      data: user,
      msg: "edit successful",
    });
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

export { createUser, getAlluser, editFirstAndLast };
