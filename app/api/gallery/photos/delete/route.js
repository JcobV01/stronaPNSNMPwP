export const DELETE = async (request) => {
    const {selectedPhotos, albumID} = await request.json()

    const apiURL = `${process.env.PHOTO_API_URL}/api/photos`;

    try{
        const response = await fetch(apiURL, {
            method: "DELETE",
            headers: {
                'x-api-key': process.env.PHOTO_API_KEY,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({selectedPhotos, albumID})
        })

        const data = await response.json()
        

        return new Response(JSON.stringify(data), {status: 200})
    }
    catch(err){
        return new Response(JSON.stringify({ message: "Wystąpił błąd podczas wyszukiwania albumów" }), { status: 500 });
    }
}