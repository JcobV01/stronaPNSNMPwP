import mongoose, { Schema, models } from 'mongoose';

const UserSchema = new Schema({
    name: {
        type: String,
        unique: [true, 'Username already exists!'],
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._ ]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric characters, spaces, dots, or underscores, but not start or end with a dot or underscore, and cannot have consecutive dots, underscores!"]
    },
    email: {
        type: String,
        unique: [true, 'Email already exists!'],
        required: [true, 'Email is required!'],
    },
    password: {
        type: String,
        required: [true, 'Password is required!']
    },
    role: {
        type: String,
        enum: ['user', 'admin', 'editor'],
        default: 'user'
    }
}, {timestamps: true});

const User = models.User || mongoose.model("User", UserSchema);

export default User;