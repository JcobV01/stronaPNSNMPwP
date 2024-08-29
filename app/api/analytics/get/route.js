// /pages/api/track-traffic.js
import { connectMongoDB } from '@utils/database';

export async function POST(req) {
  try {
    await connectMongoDB();

    const {namespace, days} = await req.json()
    

    return new Response(JSON.stringify({ message: 'Pobrano dane' }), { status: 200 });
  } catch (error) {
    console.error('Błąd pobierania:', error);
    return new Response(JSON.stringify({ error: 'Błąd serwera' }), { status: 500 });
  }
}
