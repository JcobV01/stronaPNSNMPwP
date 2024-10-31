import Intentions from "@models/intentions";
import { connectMongoDB } from "@utils/database";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        await connectMongoDB();
        const { intentions } = await req.json();


        const currentDocument = await Intentions.findOne({});
        

        if (!currentDocument) {            
            // Jeśli nie ma dokumentu, stwórz nowy
            try{
                await Intentions.create({
                    actual: intentions,
                    previous: [],  
                });
            }
            catch(err){
                console.log(err);
            }

            return NextResponse.json({ message: "Dokument utworzony i zaktualizowany" }, { status: 200 });
        }

        await Intentions.findOneAndUpdate(
            {},
            {
                $set: {
                    actual: intentions, 
                    previous: currentDocument.actual
                }
            },
            { new: true } // Zwróć zaktualizowany dokument
        );

        return NextResponse.json({ message: "Intencje dodane" }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "Wystąpił problem z dodawaniem intencji" + error }, { status: 500 })
    }
}