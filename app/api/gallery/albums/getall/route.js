export const POST = async (request) => {

    const apiURL = `https://przybyslawice.diecezja.tarnow.pl:4242/api/albums/all`;

    try{
        const response = await fetch(apiURL, {
            method: "POST",
            headers: {
                'x-api-key': process.env.PHOTO_API_KEY,
            },
        })
        const data = await response.json()
        console.log(response)
        return new Response(JSON.stringify(data), {status: 200})
    }
    catch(err){
        return new Response(JSON.stringify({ message: "Wystąpił błąd podczas wyszukiwania albumów" }), { status: 500 });
    }
}