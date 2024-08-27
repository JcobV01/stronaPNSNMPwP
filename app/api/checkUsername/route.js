import User from "@models/user";
import { connectMongoDB } from "@utils/database";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        await connectMongoDB();
        const { name } = await req.json();

        const user = await User.findOne({ name }).select("_id");

        return NextResponse.json({ user })
    } catch (error) {
        console.log(error)
    }
}