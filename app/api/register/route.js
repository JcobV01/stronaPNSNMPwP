import User from "@models/user";
import { connectMongoDB } from "@utils/database";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt'

export async function POST(req) {
    try {
        const { name, email, password } = await req.json();

        const hashedPassword = await bcrypt.hash(password, 10);

        await connectMongoDB();
        await User.create({ name, email, password: hashedPassword, role: "user" });

        return NextResponse.json({ message: "Użytkownik zarejestrowany" }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "Wystąpił błąd podczas rejestracji użytkownika." }, { status: 500 })
    }
}