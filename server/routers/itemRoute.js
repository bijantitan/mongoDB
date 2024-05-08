import express from "express";
import { addItem, deleteItem, getItems, updateItem } from "../controllers/itemController.js";
const itemRouter = express.Router();

itemRouter.get("/getItems", getItems);
itemRouter.post("/addItem", addItem);
itemRouter.delete("/deleteItem/:id", deleteItem);
itemRouter.put("/updateItem/:id", updateItem);

export default itemRouter;