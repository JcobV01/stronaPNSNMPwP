import mongoose, { models, Schema } from 'mongoose';

const announcementSchema = new Schema({
    _id: {type: String, required: true},
    actual: {
        date: {type: Date, default: Date.now},
        html: {type: String, default: ''},
        color: {type: String, default: 'announcement-green'}
    },
    previous: {
        date: {type: Date, default: Date.now},
        html: {type: String, default: ''},
        color: {type: String, default: 'announcement-green'}
    }
}) 



const Announcement = models?.Announcement || mongoose.model("Announcement", announcementSchema);

export default Announcement;