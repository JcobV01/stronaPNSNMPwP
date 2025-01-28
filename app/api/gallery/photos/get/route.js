export const POST = async (request) => {
    const {albumID} = await request.json()
    
    const apiURL = `${process.env.PHOTO_API_URL}/api/photos/${albumID}`;

    try{
        const response = await fetch(apiURL, {
            method: "GET",
            headers: {
                'x-api-key': process.env.PHOTO_API_KEY,
            },
        })

        const data = await response.json()
        

        return new Response(JSON.stringify(data), {status: 200})
    }
    catch(err){
        return new Response(JSON.stringify({ message: "Wystąpił błąd podczas wyszukiwania albumów" }), { status: 500 });
    }
}