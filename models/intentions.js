import mongoose, { models, Schema } from 'mongoose';

const DaySchema = new mongoose.Schema({
    day: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    times: {
        type: [String],
        required: true
    },
    intentions: {
        type: [String], 
        required: true
    }
});

const intentionsSchema = new Schema({
    actual: {
        type: [DaySchema],
        required: true,
    },
    previous: {
        type: [DaySchema],
        required: true,
        default: [],
    },
}) 

function arrayLimit(val) {
    return val.length === 7;
}

const Intentions = models?.Intentions || mongoose.model("Intentions", intentionsSchema);

export default Intentions;