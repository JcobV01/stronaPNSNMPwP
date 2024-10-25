import { connectMongoDB } from "@utils/database";
import Posts from "@models/posts";
// GET (read)

export const GET = async (request, { params }) => {
    try {
        await connectMongoDB();

        const posts = await Posts.findById(params.id);

        if (!posts) return new Response("Nie znaleziono postów", { status: 401 })

        return new Response(JSON.stringify(posts), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ message: "Wystąpił błąd podczas wyszukiwania postów." }), { status: 500 });
    }
}

// PATCH (update)
export const PATCH = async (request, { params }) => {
    const { title, date, category, contents, img } = await request.json();
    try {
        await connectMongoDB();

        const existingPosts = await Posts.findById(params.id);

        if (!existingPosts) return new Response("Nie znaleziono postów", { status: 401 });

        existingPosts.title = title;
        existingPosts.date = date;
        existingPosts.category = category;
        existingPosts.contents = contents;
        existingPosts.img = img;

        await existingPosts.save();

        return new Response(JSON.stringify(existingPosts), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ message: "Wystąpił błąd podczas edycji posta." }), { status: 500 });
    }
}

// DELETE (delete)
export const DELETE = async (request, { params }) => {
    try {
        await connectMongoDB();
        await Posts.findByIdAndDelete(params.id);
        return new Response(JSON.stringify({ message: "Pomyślnie usunięto post" }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ message: "Wystąpił błąd podczas usuwania posta." }), { status: 500 });
    }
}

