// /pages/api/track-traffic.js
import Intentions from '@models/intentions';
import { connectMongoDB } from '@utils/database';

export async function POST(req) {
    try {
        await connectMongoDB();

        const document = await Intentions.findOne({})

        return new Response(JSON.stringify({intentions: document}), { status: 200 });
    } catch (error) {
        console.error('Błąd pobierania:', error);
        return new Response(JSON.stringify({ error: 'Błąd serwera' }), { status: 500 });
    }
}
