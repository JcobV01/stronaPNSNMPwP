export const POST = async (request) => {
    const apiURL = `${process.env.PHOTO_API_URL}/api/albums/latest`;

    try{
        const response = await fetch(apiURL, {
            method: "POST",
            headers: {
                'x-api-key': process.env.PHOTO_API_KEY,
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        return new Response(JSON.stringify(data), {status: 200})
    }
    catch(err){
        return new Response(JSON.stringify({ message: "Wystąpił błąd podczas wyszukiwania albumów" }), { status: 500 });
    }
}