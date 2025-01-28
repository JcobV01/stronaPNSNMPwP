export const GET = async (request) => {

    const apiURL = `${process.env.PHOTO_API_URL}/api/albums`;

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