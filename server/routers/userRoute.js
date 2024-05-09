import express from "express";
import { createUser, deleteUser, getAllUser, getUser, login, updateUser } from "../controllers/userController.js";
const userRouter = express.Router();

userRouter.post("/createUser", createUser);
userRouter.get("/getAllUser", getAllUser);
userRouter.get("/getUser/:id", getUser);
userRouter.put("/updateUser/:id", updateUser);
userRouter.delete("/deleteUser/:id", deleteUser);
userRouter.post("/login", login);

export default userRouter;