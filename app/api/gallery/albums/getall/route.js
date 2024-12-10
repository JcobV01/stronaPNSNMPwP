export const GET = async (request) => {
    try{
        const response = await fetch("http://localhost:7000/api/albums", {
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