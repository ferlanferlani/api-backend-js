import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// get all user
export const getAllUser = async (req, res) => {
  try {
    const response = await prisma.users.findMany();
    res.status(200).json(response);
  } catch (error) {
    res.status(200).json({ msg: error.message });
  }
};

// get user by id
export const getUserById = async (req, res) => {
  try {
    const response = await prisma.users.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

// update user
export const updateUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const response = await prisma.users.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        username: username,
        password: password,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(response);
  }
};

// add user
export const addUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const response = await prisma.users.create({
      data: {
        username: username,
        password: password,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

// delete user
export const deleteUser = async (req, res) => {
  try {
    const response = await prisma.users.delete({
      where: {
        id: Number(req.params.id),
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
