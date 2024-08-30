import Posts from "@models/posts";
import { connectMongoDB } from "@utils/database"

export const GET = async () => {
    try {
        await connectMongoDB();
        const count = await Posts.countDocuments();

        return new Response(JSON.stringify({count}), {status: 200});
    } catch (error) {
        return new Response(JSON.stringify({message: "Wystąpił błąd podczas pobierania liczby postów"}), {status: 500})
    }
}