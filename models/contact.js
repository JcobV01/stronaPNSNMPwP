import { Schema, model, models } from 'mongoose';

const ContactSchema = new Schema({
    Objective: {
        type: String,
        required: true,
    },
    Email: {
        type: String,
        required: true,
    },
    Name: {
        type: String,
        required: true,
    },
    Message: {
        type: String,
        required: true,
    },
    Date: {
        type: Date,
        required: true,
    }, 
});

const Contact = models.Contact || model('Contact', ContactSchema);

export default Contact;