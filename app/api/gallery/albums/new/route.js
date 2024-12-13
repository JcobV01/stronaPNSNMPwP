export const POST = async (req) => {
    const { albumName, eventDate } = await req.json();

    try{
        const response = await fetch('http://localhost:7000/api/albums', {
            method: "POST",
            headers: {
                'x-api-key': process.env.PHOTO_API_KEY,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: albumName, eventDate: eventDate })
        })

        if (!response.ok) {
            const errorData = await response.json();
            return new Response(JSON.stringify({ message: errorData.message || "Wystąpił błąd podczas tworzenia albumu" }), { status: response.status });
        }

        return new Response(JSON.stringify({ message: "Pomyślnie dodano nowy album" }), { status: 201 });
    }
    catch(err){
        return new Response(JSON.stringify({ message: "Wystąpił błąd podczas tworzenia albumu" }), { status: 500 });
    }
}
