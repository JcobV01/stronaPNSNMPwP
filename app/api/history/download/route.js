import { connectMongoDB } from "@utils/database";
import History from "@models/history";

export const GET = async (request) => {
    const url = new URL(request.url);
    const limit = parseInt(url.searchParams.get('limit')) || 5; // Domyślny limit
    const page = parseInt(url.searchParams.get('page')) || 0; // Domyślna strona

    try {
        await connectMongoDB();

        const posts = await History.find().sort({date: 1}).skip(page * limit).limit(limit);;
        const totalPosts = await History.countDocuments();

        return new Response(JSON.stringify({posts, totalPosts}), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ message: "Wystąpił błąd podczas wyszukiwania postów." }), { status: 500 });
    }
}