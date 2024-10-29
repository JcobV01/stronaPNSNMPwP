import Contact from "@models/contact";
import { connectMongoDB } from "@utils/database";
// GET (read)

export const GET = async (request, { params }) => {
    try {
        await connectMongoDB();

        const messages = await Contact.findById(params.id);

        if (!messages) return new Response("Nie znaleziono wiadomości", { status: 401 })

        return new Response(JSON.stringify(messages), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ message: "Wystąpił błąd podczas wyszukiwania wiadomości." }), { status: 500 });
    }
}

// DELETE (delete)
export const DELETE = async (request, { params }) => {
    try {
        await connectMongoDB();
        await Contact.findByIdAndDelete(params.id);
        return new Response(JSON.stringify({ message: "Pomyślnie usunięto wiadomość." }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ message: "Wystąpił błąd podczas usuwania wiadomości." }), { status: 500 });
    }
}

