import { db } from "../index.js";

const isDuplicate = async (firstName: string, lastName: string) => {
  const user = await db.user.findFirst({
    where: {
      firstName: firstName,
      lastName: lastName,
    },
  });
  return user;
};

const createUser = async (firstName: string, lastName: string) => {
  const user = await db.user.create({
    data: {
      firstName: firstName,
      lastName: lastName,
    },
  });
  return user;
};

const getAlluser = async () => {
  const users = await db.user.findMany();
  return users;
};

const editFirstAndLast = async (
  firstName: string,
  lastName: string,
  id: number
) => {
  const user = await db.user.update({
    where: {
      id: id,
    },
    data: {
      firstName: firstName,
      lastName: lastName,
    },
  });
  return user;
};

export { isDuplicate, createUser, getAlluser, editFirstAndLast };
