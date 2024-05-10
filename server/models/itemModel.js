import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    highlights: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, {collection: "Item"});

export default mongoose.model("Item", itemSchema);