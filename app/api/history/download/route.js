import { connectMongoDB } from "@utils/database";
import History from "@models/history";

export const GET = async (request) => {
    try {
        await connectMongoDB();

        const posts = await History.find().sort({date: 1});

        return new Response(JSON.stringify({posts}), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ message: "Wystąpił błąd podczas wyszukiwania postów." }), { status: 500 });
    }
}