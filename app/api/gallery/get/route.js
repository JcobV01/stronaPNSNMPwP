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

      const groupByYear = (folders) => {
        const grouped = {};

        folders.forEach((folder) => {
          const match = folder.folderName.match(/(\d{4})$/);
          const year = match ? match[1] : "Inne";

          if (!grouped[year]) grouped[year] = [];
          grouped[year].push(folder);
        });

        const sortedGrouped = Object.keys(grouped)
          .sort((a, b) => {
            if (a === "Inne") return 1;
            if (b === "Inne") return -1;

            return parseInt(a) - parseInt(b);
          })
          .reduce((result, year) => {
            result[year] = grouped[year];
            return result;
          }, {});

        return sortedGrouped;
      };

    const groupedFolders = groupByYear(foldersWithContent);

    return new Response(JSON.stringify(groupedFolders), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Wystąpił błąd podczas wyszukiwania zdjęć." }), { status: 500 });
  }
} else {
  return new Response(JSON.stringify({ message: "Użyto niepoprawnej metody" }), { status: 405 });
  }
}
