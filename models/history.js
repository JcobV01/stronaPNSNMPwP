import { Schema, model, models } from 'mongoose';

const HistorySchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    contents: {
        type: String,
        required: true,
    },
    img: {
        type: String,
    },
    author: {
        type: String,
        required: true,
    },
});

const History = models.History || model('History', HistorySchema);

export default History;