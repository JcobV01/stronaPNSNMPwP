// /pages/api/track-traffic.js
import { connectMongoDB } from '@utils/database';
import Event from '@models/events';
import { getDate } from '@utils/index';

export async function POST(req, res) {
  try {
    await connectMongoDB();

    // Pobierz informacje o ruchu z ciała żądania
    const { namespace, event } = await req.json();

    if (!namespace || !event) {
      return new Response(JSON.stringify({ error: 'Brakujące dane' }), { status: 400 });
    }

    const key = `analytics::${namespace}::${getDate().toString()}`;
    
    // Zaktualizuj licznik i ustaw informacje o zdarzeniu w bazie danych
    await Event.updateOne(
      { _id: key },
      { 
        $inc: { count: 1 },  // Zwiększ licznik o 1
        $set: { 
          lastEvent: event,  // Ustaw ostatnie zdarzenie
          updatedAt: new Date()  // Ustaw czas aktualizacji
        }
      },
      { upsert: true }  // Utwórz nowy dokument, jeśli nie istnieje
    );

    return new Response(JSON.stringify({ message: 'Ruch zapisany' }), { status: 200 });
  } catch (error) {
    console.error('Błąd zapisu ruchu:', error);
    return new Response(JSON.stringify({ error: 'Błąd serwera' }), { status: 500 });
  }
}
