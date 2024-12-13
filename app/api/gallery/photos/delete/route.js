export const DELETE = async (request) => {
    const {selectedPhotos, albumID} = await request.json()

    try{
        const response = await fetch(`http://localhost:7000/api/photos`, {
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