import Announcement from "@models/announcement";
import { connectMongoDB } from "@utils/database";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        await connectMongoDB();
        const { target, html, color } = await req.json();

        console.log("Target", target)

        if (!['actual', 'prev'].includes(target) || !html) {
            return NextResponse.json({ message: "Bład - niepoprane dane" }, { status: 400 });
        }

        const updateField = target === 'actual' ? 'actual' : 'previous';

        // Tworzymy obiekt `updateData`, ale pomijamy `date` jeśli nie jest przekazany
        const updateData = {
            ...(html && { [`${updateField}.html`]: html }),
            ...(color && { [`${updateField}.color`]: color })
        };

        const updatedAnnouncement = await Announcement.findByIdAndUpdate(
            'Announcements',
            { $set: updateData },
            { new: true }
        );

        if (!updatedAnnouncement) {
            return NextResponse.json({ message: "Nie znaleziono ogłoszeń" }, { status: 404 });
        }

        return NextResponse.json({ message: "Zaktualizowano ogłoszenia" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Wystąpił problem z dodawaniem ogłoszeń" + error }, { status: 500 })
    }
}