import { connectMongoDB } from "@utils/database";
import Contact from "@models/contact";

export const GET = async (request) => {
    try {
        await connectMongoDB();

        const url = new URL(request.url);
        const page = parseInt(url.searchParams.get('page')) || 1;
        const limit = parseInt(url.searchParams.get('limit')) || 4;
        const skip = (page - 1) * limit;
    
        const totalMessages = await Contact.countDocuments();
        const messages = await Contact.find().sort({Date: -1}).skip(skip).limit(limit);

        return new Response(JSON.stringify({messages, totalMessages}), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ message: "Wystąpił błąd podczas wyszukiwania wiadomości." }), { status: 500 });
    }
}