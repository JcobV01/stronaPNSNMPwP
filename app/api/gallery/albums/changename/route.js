export const PATCH = async (request) => {
    const {albumID, newName} = await request.json()

    const apiURL = `${process.env.PHOTO_API_URL}/api/albums`;

    try{
        const response = await fetch(apiURL, {
            method: "PATCH",
            headers: {
                'x-api-key': process.env.PHOTO_API_KEY,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({albumID, newName})
        })
        const data = await response.json()
        return new Response(JSON.stringify(data), {status: 200})
    }
    catch(err){
        return new Response(JSON.stringify({ message: "Wystąpił błąd podczas wyszukiwania albumów" }), { status: 500 });
    }
}