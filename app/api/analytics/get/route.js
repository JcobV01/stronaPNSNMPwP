// /pages/api/track-traffic.js
import Announcement from '@models/announcement';
import { connectMongoDB } from '@utils/database';

export async function GET(req) {
  try {
    await connectMongoDB();
    
    const document = Announcement.findOne({})

    return new Response(JSON.stringify({test: document}), { status: 200 });
  } catch (error) {
    console.error('Błąd pobierania:', error);
    return new Response(JSON.stringify({ error: 'Błąd serwera' }), { status: 500 });
  }
}
