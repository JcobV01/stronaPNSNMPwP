import { connectMongoDB } from "@utils/database";
import History from "@models/history";
import fs from 'fs';
import path from 'path';

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(request) {
  try {
    const formData = await request.formData();
    const title = formData.get('title');
    const date = formData.get('date');
    const contents = formData.get('contents');
    const author = formData.get('author');
    const file = formData.get('img'); // 'img' to nazwa inputu

    // Zapisz plik w folderze public/assets/images/history
    if (file && file.name) {
      const buffer = await file.arrayBuffer();
      const filePath = path.join(process.cwd(), 'public/assets/images/history', file.name);
      fs.writeFileSync(filePath, Buffer.from(buffer));
    }

    await connectMongoDB();
    await History.create({ title, date, contents, img: file.name, author });

    return new Response(JSON.stringify({ message: "Dodano nowy wpis" }), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Wystąpił błąd podczas tworzenia postu." }), { status: 500 });
  }
}