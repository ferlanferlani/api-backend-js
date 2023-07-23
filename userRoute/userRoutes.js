import express from "express";
import {
  getAllUser,
  getUserById,
  updateUser,
  addUser,
  deleteUser,
} from "../userController/userControllers.js";

const router = express.Router();

router.get("/user", getAllUser);
router.get("/user/:id", getUserById);
router.patch("/user/:id", updateUser);
router.post("/user", addUser);
router.delete("/user/:id", deleteUser);

export default router;
