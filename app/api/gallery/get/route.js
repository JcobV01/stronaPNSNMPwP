import cloudinary from "@utils/cloudinary";

export const GET = async (req, res) => {
  if (req.method === 'GET') {
    try {
      // Pobieranie głównych folderów
    const rootFolders = await cloudinary.api.root_folders();

    const allResources = await cloudinary.api.resources({ type: 'upload' });
    console.log(allResources.resources.map(r => r.public_id));

    // Pobranie zawartości każdego folderu
    const foldersWithContent = await Promise.all(
      rootFolders.folders.map(async (folder) => {
        // Pobranie zasobów w folderze
        const resources = await cloudinary.api.resources({
          type: 'upload',
          prefix: `${folder.path}/`,
        });


        return {
          folderName: folder.name,
          path: folder.path,
          resources: resources.resources[0],
        };
      })
    );

    return new Response(JSON.stringify(foldersWithContent), { status: 200 });
    } catch (error) {
      console.error(error);
      return new Response(JSON.stringify({ message: "Wystąpił błąd podczas wyszukiwania zdjęć." }), { status: 500 });
    }
  } else {
    return new Response(JSON.stringify({ message: "Użyto niepoprawnej metody" }), { status: 405 });
  }
}
