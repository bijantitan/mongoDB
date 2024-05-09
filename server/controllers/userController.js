import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const createUser = async (req, res) => {
    try {
        const userData = new User(req.body);
        const user = await userData.save();
        return res.status(201).send({ user, msg: "User created successfully" });
    } catch (error) {
        return res.status(404).send({ error: error.message });
    }
}

export const getAllUser = async (req, res) => {
    try {
        const user = await User.find(req.params.id);
        if (user.length === 0) {
            return res.status(404).json("User not found");
        }
        return res.status(200).send({ users: user });
    } catch (error) {
        return res.status(404).send({ error: error.message });
    }
}

export const getUser = async (req, res) => {
    try {
        const userId = await User.findById(req.params.id);
        if (!userId) return res.status(404).json("User not found");
        return res.status(200).json(userId);
    } catch (error) {
        res.status(500).json("Internal server error");
    }
}

export const updateUser = async (req, res) => {
    try {
        const userData = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!userData) return res.status(404).json("User not found");
        return res.status(200).json({ userData, msg: "User updated successfully" });
    } catch (error) {
        return res.status(500).json("Internal server error");
    }
}

export const deleteUser = async (req, res) => {
    try {
        const userData = await User.findByIdAndDelete(req.params.id);
        return res.status(200).json({ userData, msg: "User deleted successfully" });
    } catch (error) {
        return res.status(500).json("Internal server error");
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        const token = jwt.sign({ userId: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return res.status(200).json({ token });
    } catch (error) {
        res.status(500).json("Internal server error");
    }
}