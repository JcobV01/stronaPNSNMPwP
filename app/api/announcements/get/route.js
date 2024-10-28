// /pages/api/track-traffic.js
import Announcement from '@models/announcement';
import { connectMongoDB } from '@utils/database';

export async function POST(req) {
    try {
        await connectMongoDB();

        const document = await Announcement.findById("Announcements")
        console.log(document)

        return new Response(JSON.stringify({announcements: document}), { status: 200 });
    } catch (error) {
        console.error('Błąd pobierania:', error);
        return new Response(JSON.stringify({ error: 'Błąd serwera' }), { status: 500 });
    }
}
