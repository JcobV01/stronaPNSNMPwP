import { connectMongoDB } from "@utils/database";
import Posts from "@models/posts";

export const GET = async (request) => {
    try {
        await connectMongoDB();

        const posts = await Posts.find({});

        return new Response(JSON.stringify(posts), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ message: "Wystąpił błąd podczas wyszukiwania postów." }), { status: 500 });
    }
}