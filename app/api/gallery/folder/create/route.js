import cloudinary from "@utils/cloudinary";

export const POST = async (req) => {
  try {
    const today = new Date();
    const { folderName } = await req.json();
    
    if (!folderName || typeof folderName !== 'string') {
      return new Response(JSON.stringify({ message: "Nazwa folderu jest wymagana i musi być tekstem." }), { status: 400 });
    }

    await cloudinary.uploader.upload(
      'data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=', 
      {
        public_id: `placeholder`,
        folder: `${folderName} - ${today.getFullYear()}`
      }
    );

    await cloudinary.uploader.destroy(`${folderName} - ${today.getFullYear()}/placeholder`);

    return new Response(JSON.stringify({ message: `Folder '${folderName}' został utworzony.` }), { status: 201 });
  } catch (error) {
    console.error('Błąd tworzenia folderu:', error);
    return new Response(JSON.stringify({ message: "Nie udało się utworzyć folderu.", error: error.message }), { status: 500 });
  }
};
