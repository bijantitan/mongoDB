import Item from "../models/itemModel.js";

export const getItems = async (req, res) => {
    try {
        const items = await Item.find();
        if (items.length === 0) {
            return res.status(404).json({ message: "Items not found" });
        }
        res.status(200).json(items);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const addItem = async (req, res) => {
    try {
        const newItem = new Item(req.body);
        await newItem.save();
        res.status(201).json({ message: "Item added successfully" });
    } catch (error) {
        res.status(500).json("Internal server error");
    }
}

export const deleteItem = async (req, res) => {
    try {
        const item = await Item.findByIdAndDelete(req.params.id);
        if (!item) {
            return res.status(404).json({ message: "Item not found" });
        }
        res.status(200).json({ message: "Item deleted successfully" });
    } catch (error) {
        res.status(500).json("Internal server error");
    }
}

export const updateItem = async (req, res) => {
    try {
        const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!item) {
            return res.status(404).json({ message: "Item not found" });
        }
        res.status(200).json({ message: "Item updated successfully" });
    } catch (error) {
        res.status(500).json("Internal server error");
    }
}