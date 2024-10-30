import { connectMongoDB } from "@utils/database";
import History from "@models/history";
import fs from 'fs';
import path from 'path';
// GET (read)

export const GET = async (request, { params }) => {
    try {
        await connectMongoDB();

        const posts = await History.findById(params.id);

        if (!posts) return new Response("Nie znaleziono postów", { status: 401 })

        return new Response(JSON.stringify(posts), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ message: "Wystąpił błąd podczas wyszukiwania postów." }), { status: 500 });
    }
}

// PATCH (update)
export const PATCH = async (request, { params }) => {
    const { id } = params;

    try {
        const formData = await request.formData();
        const title = formData.get('title');
        const date = formData.get('date');
        const contents = formData.get('contents');
        const file = formData.get('img'); // 'img' to nazwa inputu

        const post = await History.findById(id);
        let oldFileName = post?.img;

        // Zapisz plik w folderze public/assets/images/history
        if (file && file.name) {
            const buffer = await file.arrayBuffer();
            const filePath = path.join(process.cwd(), 'public/assets/images/history', file.name);
            fs.writeFileSync(filePath, Buffer.from(buffer));
        }

        if (oldFileName && file.name && oldFileName !== file.name) {
            const count = await History.countDocuments({ img: oldFileName });
            if (count === 1) {
                const oldFilePath = path.join(process.cwd(), 'public/assets/images/history', oldFileName);
                if (fs.existsSync(oldFilePath)) {
                    fs.unlinkSync(oldFilePath);
                }
            }
        }

        await connectMongoDB();

        await History.findByIdAndUpdate(id, {
            title,
            date,
            contents,
            ...(file.name && { img: file.name }) // aktualizuje pole 'img' tylko, jeśli nowe zdjęcie zostało przesłane
        });

        return new Response(JSON.stringify({ message: "Wpis został zaktualizowany pomyślnie" }), { status: 201 });
    } catch (error) {
        return new Response(JSON.stringify({ message: "Wystąpił błąd podczas tworzenia postu." }), { status: 500 });
    }
}

// DELETE (delete)
export const DELETE = async (request, { params }) => {
    try {
        await connectMongoDB();
        await History.findByIdAndDelete(params.id);
        return new Response(JSON.stringify({ message: "Pomyślnie usunięto post" }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ message: "Wystąpił błąd podczas usuwania posta." }), { status: 500 });
    }
}

