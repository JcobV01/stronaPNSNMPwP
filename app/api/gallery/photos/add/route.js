export const POST = async (request) => {
    const formData = await request.formData()

    const apiURL = `${process.env.PHOTO_API_URL}/api/photos`;
    
    try{
        const response = await fetch(apiURL, {
            method: "POST",
            headers: {
                'x-api-key': process.env.PHOTO_API_KEY
            },
            body: formData
        })
        return new Response(JSON.stringify({message: "Dodano zdjęcia"}), {status: 200})
    }
    catch(err){
        return new Response(JSON.stringify({ message: "Wystąpił błąd podczas wyszukiwania albumów" }), { status: 500 });
    }
}