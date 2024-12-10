import cloudinary from "@utils/cloudinary";

export const POST = async (req, res) => {
    if (req.method === 'POST') {
        try {
            const { folderName } = await req.json()


            if (!folderName || typeof folderName !== 'string') {
                return new Response(JSON.stringify({ message: "Nazwa folderu jest wymagana i musi być tekstem." }), { status: 400 });
            }

            const resources = await cloudinary.api.resources({
                type: 'upload',
                prefix: `${folderName}/`,
                max_results: 200
            });

            console.log(resources);
            

            return new Response(JSON.stringify(resources.resources), { status: 200 });
        } catch (error) {
            console.error(error);
            return new Response(JSON.stringify({ message: "Wystąpił błąd podczas wyszukiwania zdjęć." }), { status: 500 });
        }
    } else {
        return new Response(JSON.stringify({ message: "Użyto niepoprawnej metody" }), { status: 405 });
    }
}
