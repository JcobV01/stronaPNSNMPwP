import mongoose, { Schema } from 'mongoose';

const EventSchema = new Schema({
    _id: { type: String, required: true },
    count: { type: Number, default: 0 },
    lastEvent: { type: Object, default: {} },
    updatedAt: { type: Date, default: Date.now }
});

const Event = mongoose.model("Event", EventSchema);

export default Event;