import Announcement from "@models/announcement";
import { connectMongoDB } from "@utils/database";
import { NextResponse } from "next/server";

export async function PATCH(req) {
    try {
        await connectMongoDB();
        const { html } = await req.json();

        const currentDocument = await Announcement.findOne({});

        if (!currentDocument) {
            // Jeśli nie ma dokumentu, stwórz nowy

            Announcement.create({
                _id: "Announcements",
                actual: { date: new Date(), html },
                previous: null,
            })
            
            return res.status(200).json({ message: 'Dokument utworzony i zaktualizowany', data: newDocument });
        }

        await Announcement.findOneAndUpdate(
            {},
            {
              $set: { actual: { date: new Date(), html },previous: currentDocument.actual }
            },
            { new: true } // Zwróć zaktualizowany dokument
          );

        return NextResponse.json({ message: "Ogłoszenia dodane" }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "Wystąpił problem z dodawaniem ogłoszeń" + error }, { status: 500 })
    }
}