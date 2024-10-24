// /pages/api/track-traffic.js
import Announcement from '@models/announcement';
import { connectMongoDB } from '@utils/database';

export async function POST(req) {
    try {
        await connectMongoDB();

        const document = Announcement.findById("Announcements")
        console.log(document)

        return new Response(JSON.stringify({xD: "xD"}), { status: 200 });
    } catch (error) {
        console.error('Błąd pobierania:', error);
        return new Response(JSON.stringify({ error: 'Błąd serwera' }), { status: 500 });
    }
}
