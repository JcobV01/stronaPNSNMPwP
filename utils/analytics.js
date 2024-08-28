import { connectMongoDB } from "@utils/database";
import Event from "@models/events";

// export class Analytics {
//     constructor(opts = {}) {
//         // Domyślna wartość retention to 60 sekund * 60 minut * 24 godziny * 7 dni
//         this.retention = 60 * 60 * 24 * 7;

//         // Jeśli opts.retention jest podane, nadpisujemy domyślną wartość
//         if (opts.retention) {
//             this.retention = opts.retention;
//         }
//     }

//     async track(namespace) {
//         const key = `analytics::${namespace}`
        
//         // Połączenie z MongoDB przed rozpoczęciem śledzenia
//         await connectMongoDB();

//         // Używamy operacji upsert do dodania lub aktualizacji licznika
//         // await Event.updateOne(
//         //     { _id: key },
//         //     { $inc: { count: 1 }, $set: { lastEvent: event, updatedAt: new Date() } },
//         //     { upsert: true }
//         // );
//     }
// }



export const track = async (namespace, event) => {
    const key = `analytics::${namespace}`
    await connectMongoDB();
        
        // Połączenie z MongoDB przed rozpoczęciem śledzenia

        // Używamy operacji upsert do dodania lub aktualizacji licznika
        await Event.updateOne(
            { _id: key },
            { $inc: { count: 1 }, $set: { lastEvent: event, updatedAt: new Date() } },
            { upsert: true }
        );
    }

    // export const analytics = async () => {
    //     await connectMongoDB();
    //     return {
    //         track
    //     } 
    // }


// Tworzenie instancji klasy Analytics
// export const analytics = new Analytics();