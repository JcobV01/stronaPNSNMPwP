export const PUT = async (request) => {
    const {albumID, coverID} = await request.json()

    const apiURL = `${process.env.PHOTO_API_URL}/api/albums`;

    try{
        const response = await fetch(apiURL, {
            method: "PUT",
            headers: {
                'x-api-key': process.env.PHOTO_API_KEY,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({albumID, coverID})
        })
        const data = await response.json()
        return new Response(JSON.stringify(data), {status: 200})
    }
    catch(err){
        return new Response(JSON.stringify({ message: "Wystąpił błąd podczas wyszukiwania albumów" }), { status: 500 });
    }
}