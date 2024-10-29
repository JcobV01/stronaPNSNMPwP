import Contact from "@models/contact";
import { connectMongoDB } from "@utils/database";

export const POST = async (req) => {
    const { Objective, Email, Name, Message, Date } = await req.json();

    try {
        await connectMongoDB();
        const newContact = new Contact({Objective, Email, Name, Message, Date});

        await newContact.save();
        return new Response(JSON.stringify(newContact), { status: 201 });
    } catch (error) {
        return new Response("Failed to insert a new data", { status: 500 });
    }
}