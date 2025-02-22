"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import Title from "@components/Title";
import ImageBrowserDialog from "@components/management/galeria/ImageBrowserDialog";

const AlbumPage = () => {
  const { id } = useParams();
  const imageBrowser = useRef(null);
  const loadMoreRef = useRef(null);
  const [photos, setPhotos] = useState([]);
  const [album, setAlbum] = useState({});
  const [activePhoto, setActivePhoto] = useState("");
  const [columns, setColumns] = useState(1);
  const [coords, setCoords] = useState([]);
  const [siteHeight, setSiteHeight] = useState(0);
  const [observerY, setObserverY] = useState(0);
  const [visibleCount, setVisibleCount] = useState(8);
  const [layoutReady, setLayoutReady] = useState(false);
  const resizeTimeout = useRef(null);

  // Ustalenie liczby kolumn na podstawie szerokości okna
  const calculateColumns = () => {
    const width = window.innerWidth;
    if (width >= 1536) return 4;
    else if (width >= 1024) return 3;
    else if (width >= 768) return 2;
    else return 1;
  };

  // Pobieranie zdjęć z API
  const getPhotos = async () => {
    try {
      const response = await fetch("/api/gallery/photos/get", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ albumID: id }),
      });
      const data = await response.json();
      // Sortowanie alfabetyczne po nazwie pliku
      const sorted = data.sort((a, b) =>
        a.filename.localeCompare(b.filename)
      );
      setPhotos(sorted);
    } catch (err) {
      console.error(err);
    }
  };

  // Pobieranie informacji o albumie
  const getAlbum = async () => {
    try {
      const response = await fetch("/api/gallery/albums/getname", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ albumID: id }),
      });
      const data = await response.json();
      setAlbum(data);
    } catch (err) {
      console.error(err);
    }
  };

  // Otwieranie przeglądarki zdjęć
  const openImageBrowser = (photoID) => {
    setActivePhoto(photoID);
    imageBrowser.current.showModal();
  };

  const convertDate = (dateString) => {
    const date = String(dateString).split("-");
    return `${date[2]}.${date[1]}.${date[0]} r.`;
  };

  const handleResize = () => {
    clearTimeout(resizeTimeout.current);
    resizeTimeout.current = setTimeout(() => {
      getPhotos();
      setColumns(calculateColumns());
    }, 500);
  };

  useEffect(() => {
    getAlbum();
    getPhotos();
    setColumns(calculateColumns());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [id]);

  // Przeliczanie pozycji zdjęć za pomocą algorytmu greedy (do kolumny z najmniejszą wysokością)
  useEffect(() => {
    if (photos.length === 0) return;
    setLayoutReady(false); // Layout się przelicza – nie pokazujemy zdjęć
    const visiblePhotos = photos.slice(0, visibleCount);
    // Inicjujemy wysokość dla każdej kolumny
    let columnHeights = new Array(columns).fill(0);
    const newCoords = visiblePhotos.map((photo) => {
      // Znajdujemy kolumnę o najmniejszej dotychczasowej wysokości
      const column = columnHeights.indexOf(Math.min(...columnHeights));
      const imgWidth =
        window.innerWidth > 1279
          ? 360
          : window.innerWidth > 767
          ? 330
          : window.innerWidth > 639
          ? 410
          : window.innerWidth * 0.9;
      const x = column * imgWidth;
      const y = columnHeights[column];
      // Obliczamy wysokość zdjęcia, zachowując proporcje (dodajemy 10px marginesu)
      const photoHeight = (photo.height * imgWidth) / photo.width + 10;
      // Aktualizujemy wysokość kolumny
      columnHeights[column] += photoHeight;
      return { x, y };
    });
    // Całkowita wysokość kontenera to najwyższa kolumna
    setSiteHeight(Math.max(...columnHeights));
    // Pozycja elementu obserwowanego – ustawiamy go przy najniższej kolumnie
    setObserverY(Math.min(...columnHeights));
    setCoords(newCoords);
    setLayoutReady(true); // Layout gotowy – możemy pokazać zdjęcia
  }, [photos, visibleCount, columns]);

  // IntersectionObserver do ładowania kolejnych zdjęć
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((prev) => (prev >= photos.length ? prev : prev + 8));
        }
      },
      { threshold: 1.0 }
    );
    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }
    return () => {
      if (loadMoreRef.current) observer.unobserve(loadMoreRef.current);
    };
  }, [photos]);

  return (
    <section className="py-[70px] flex flex-col gap-[70px] items-center overflow-x-hidden">
      <Title title="Galeria" title2="" subtitle="Zdjęcia z wydarzeń" />
      <div className="w-[1430px] flex flex-col gap-2 2xl:w-[1070px] xl:w-[980px] lg:w-[660px] md:w-[400px] sm:w-[90%]">
        <h4 className="text-[40px] font-bold xl:text-[35px] md:text-[30px] md:text-center sm:text-[20px]">
          {album.name}
        </h4>
        <p className="text-[17px] font-light xl:text-[16px] md:text-[15px] md:text-center">
          Autor albumu:{" "}
          <span className="font-medium">
            {album.author === "Jakub Wadycki" ||
            album.author === "Artur Plebanczyk"
              ? "Parafia pw. Niepokalanego Serca NPM w Przybysławicach"
              : album.author}
          </span>
        </p>
        <p className="text-[17px] font-light xl:text-[16px] md:text-[15px] md:text-center">
          Data wydarzenia:{" "}
          <span className="font-medium">{convertDate(album.eventDate)}</span>
        </p>
      </div>
      <div
        className="relative w-[1430px] 2xl:w-[1070px] xl:w-[980px] lg:w-[660px] md:w-[400px] sm:w-[90%] justify-center flex-col mt-[32px]"
        style={{
          height: columns > 1 ? siteHeight : "auto",
          display: columns === 1 ? "flex" : undefined,
        }}
      >
        {layoutReady &&
          photos.slice(0, visibleCount).map((photo, index) => (
            <div
              key={index}
              className="mb-[10px] cursor-pointer hover:brightness-75 duration-300"
              style={{
                transform:
                  columns > 1
                    ? `translate(${coords[index]?.x}px, ${coords[index]?.y}px)`
                    : undefined,
                position: columns > 1 ? "absolute" : "relative",
              }}
              onClick={() => openImageBrowser(photo._id)}
            >
              <Image
                src={photo.fullurl}
                placeholder="blur"
                blurDataURL={photo.base64hash}
                width={350}
                height={250}
                alt="Zdjęcie z galerii"
                loading="lazy"
                className="rounded-[3px] xl:w-[320px] md:w-[400px] sm:w-[100%]"
              />
            </div>
          ))}
        {/* Element obserwowany – pozycjonowany przy najniższej kolumnie */}
        <div
          ref={loadMoreRef}
          className="h-1"
          style={{ position: "absolute", top: observerY, left: 0 }}
        ></div>
      </div>
      <p className="text-[18px] sm:text-[15px] md:text-center">
        To już wszystko z tego wydarzenia - zapraszamy do obejrzenia zdjęć z{" "}
        <Link href="/galeria" className="font-bold text-[#5a7889]">
          innych albumów.
        </Link>
      </p>
      <ImageBrowserDialog
        imageBrowserRef={imageBrowser}
        photos={photos}
        activePhotoID={activePhoto}
      />
    </section>
  );
};

export default AlbumPage;
