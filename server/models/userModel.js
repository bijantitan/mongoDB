import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNo: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: Boolean,
}, {collection: "User"});

const saltRounds = 10;
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next();
    }
    const hashedPassword = await bcrypt.hash(this.password, saltRounds);
    this.password = hashedPassword;
    next();
});

export default mongoose.model("User", userSchema);