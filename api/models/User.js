import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
       first_name: {
            type: String,
            trim: true,
            required: true
        },
       last_name: {
            type: String,
            trim: true,
        },
        email: {
            type: String,
            trim: true,
            unique: true
        },
        password: {
            type: String,
            trim: true,
            required: true,
        }
    },
    {
        timestamp: true,
        versionKey: false,
    }
);

export default mongoose.model("User", userSchema);
