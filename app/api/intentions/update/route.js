import Intentions from "@models/intentions";
import { connectMongoDB } from "@utils/database";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        await connectMongoDB();
        const { intentions } = await req.json();

        const updatedAnnouncement = await Intentions.findOneAndUpdate(
            {},
            { $set: {actual: intentions} },
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