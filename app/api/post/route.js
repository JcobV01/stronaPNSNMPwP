import { connectMongoDB } from "@utils/database";
import Posts from "@models/posts";

export const GET = async (request) => {
    try {
        await connectMongoDB();

        const url = new URL(request.url);
        const page = parseInt(url.searchParams.get('page')) || 1;
        const limit = parseInt(url.searchParams.get('limit')) || 4;
        const skip = (page - 1) * limit;
    
        const totalPosts = await Posts.countDocuments();
        const posts = await Posts.find({}).skip(skip).limit(limit);

        return new Response(JSON.stringify({posts, totalPosts}), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ message: "Wystąpił błąd podczas wyszukiwania postów." }), { status: 500 });
    }
}