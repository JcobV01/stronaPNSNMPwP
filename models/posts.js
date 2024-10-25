import mongoose, { Schema, model, models } from 'mongoose';

const PostsSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    contents: {
        type: String,
        required: true,
    },
    img: {
        type: String,
    }
});

const Posts = models.Posts || model('Posts', PostsSchema);

export default Posts;