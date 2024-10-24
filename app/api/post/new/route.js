import { connectMongoDB } from "@utils/database";
import Posts from "@models/posts";


export const POST = async (req) => {
    const { title, author, date, category, contents } = await req.json();


    try {
        await connectMongoDB();
        await Posts.create({ title, author, date, category, contents });

        return new Response(JSON.stringify({ message: "Dodano nowy wpis" }), { status: 201 });
    } catch (error) {
        return new Response(JSON.stringify({ message: "Wystąpił błąd podczas tworzenia postu." }), { status: 500 });
    }
}