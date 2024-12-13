export const POST = async (request) => {
    const formData = await request.formData()
    console.log(formData);
    
    try{
        const response = await fetch("http://localhost:7000/api/photos", {
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