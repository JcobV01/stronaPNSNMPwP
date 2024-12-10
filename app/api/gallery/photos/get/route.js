export const POST = async (request) => {
    const {albumID} = await request.json()
    
    try{
        const response = await fetch(`http://localhost:7000/api/photos/${albumID}`, {
            method: "GET",
            headers: {
                'x-api-key': process.env.PHOTO_API_KEY,
            },
        })

        const data = await response.json()
        console.log(data);
        

        return new Response(JSON.stringify(data), {status: 200})
    }
    catch(err){
        return new Response(JSON.stringify({ message: "Wystąpił błąd podczas wyszukiwania albumów" }), { status: 500 });
    }
}