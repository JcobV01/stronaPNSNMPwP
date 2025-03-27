"use client"

import AddPhotosDialog from '@components/management/galeria/AddPhotosDialog'
import ChangeAlbumNameDialog from '@components/management/galeria/ChangeAlbumNameDialog'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'

const page = () => {
    const { albumID } = useParams()
    const [photos, setPhotos] = useState([])
    const [album, setAlbum] = useState('')
    const [columns, setColumns] = useState(1);
    const [visibleCount, setVisibleCount] = useState(8);
    const [layoutReady, setLayoutReady] = useState(false);
    const [coords, setCoords] = useState([]);
    const [siteHeight, setSiteHeight] = useState(0);
    const [observerY, setObserverY] = useState(0);
    const resizeTimeout = useRef(null);
    const loadMoreRef = useRef(null);

    const changeNameDialog = useRef(null)
    const addPhotosDialog = useRef(null)
    const [selectMode, setSelectMode] = useState(false)
    const [selectedPhotos, setSelectedPhotos] = useState([])
    const [coverMode, setCoverMode] = useState(false)
    const [coverImage, setCoverImage] = useState(null);

    const calculateColumns = () => {
        const width = window.innerWidth;
        if (width >= 1536) return 4;
        else if (width >= 1024) return 3;
        else if (width >= 768) return 2;
        else return 1;
    };

    const getPhotos = async () => {
        try {
            const response = await fetch("/api/gallery/photos/get", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ albumID: albumID }),
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

    const getAlbum = async () => {
        try {
            const response = await fetch("/api/gallery/albums/getname", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ albumID: albumID }),
            });
            const data = await response.json();
            setAlbum(data);
        } catch (err) {
            console.error(err);
        }
    };

    const handleResize = () => {
        clearTimeout(resizeTimeout.current);
        resizeTimeout.current = setTimeout(() => {
            getPhotos();
            setColumns(calculateColumns());
        }, 500);
    };

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
                    ? 330
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

    const openChangeNameDialog = () => {
        changeNameDialog.current.showModal()
    }

    const closeChangeNameDialog = () => {
        changeNameDialog.current.close()
    }

    const openAddPhotosDialog = () => {
        addPhotosDialog.current.showModal()
    }

    const closeAddPhotosDialog = () => {
        addPhotosDialog.current.close()
    }

    const selectModeChange = () => {
        coverMode === true && setCoverMode(false)
        setSelectMode(prev => !prev)
        setSelectedPhotos([])
    }

    const selectPhoto = (e) => {
        const photoClass = e.currentTarget.classList
        const photoID = e.currentTarget.id
        console.log(photoID);

        if (photoClass.contains('photo-select-mode')) {
            setSelectedPhotos(prev => [...prev, photoID])
            photoClass.remove('photo-select-mode')
            photoClass.add('photo-selected')
        }
        else {
            setSelectedPhotos(prev => prev.filter(photoId => photoId !== photoID));
            photoClass.add('photo-select-mode')
            photoClass.remove('photo-selected')
        }
    }

    const deletePhotos = async () => {
        try {
            const response = await fetch('/api/gallery/photos/delete', {
                method: "DELETE",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ selectedPhotos, albumID })
            })

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Błąd podczas usuwania zdjęć");
            }
            selectModeChange()
            getPhotos()
        }
        catch (err) {
            console.log(err)
        }
    }

    const changeCoverMode = () => {
        setCoverMode(prev => !prev);
        if (!coverMode) setSelectMode(false);
    }

    const changeCover = async (e, index) => {
        try {
            const response = await fetch('/api/gallery/albums/changecover', {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ albumID: albumID, coverID: e.currentTarget.id })
            })

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Błąd podczas aktualizacji folderu");
            } else {
                setCoverImage(index)
                setCoverMode(false)
            }
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getPhotos()
        getAlbum()
        setColumns(calculateColumns());
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [albumID])

    return (
        <section className='flex gap-8 flex-col flex-1 pt-[40px] w-full' style={{ height: 'calc(100% - 84px)' }}>
            <div className='flex gap-4 items-center'>
                <h3 className='text-[25px] font-bold text-[#353535]'>{album.name}</h3>
                <Icon icon="solar:pen-bold" width="25" height="25" className='color-[#353535] duration-500 cursor-pointer' onClick={openChangeNameDialog} />
            </div>

            <div className='flex gap-6'>
                <button className='bg-[#11161a] py-[10px] px-[50px] rounded-[5px] text-white text-[16px] font-light' onClick={openAddPhotosDialog}>Dodaj zdjęcia do albumu</button>
                <button className='bg-[#11161a] py-[10px] px-[50px] rounded-[5px] text-white text-[16px] font-light' onClick={changeCoverMode}>{coverMode === true ? 'Anuluj wybieranie' : 'Wybierz okładkę'}</button>
                <button className='bg-[#1a2127] py-[10px] px-[50px] rounded-[5px] text-white text-[16px] font-light' onClick={selectModeChange}>{selectMode === true ? "Anuluj wybieranie" : "Wybierz zdjęcia"}</button>
                <button className={`bg-[#1f272e] py-[10px] px-[50px] rounded-[5px] text-white text-[16px] font-light ${selectMode === false && 'bg-gray-400'}`} disabled={selectMode === false && true} onClick={deletePhotos}>Usuń wybrane</button>
            </div>

            <article className='w-full flex-1 overflow-y-scroll pr-4'>
                <div
                    className="relative  justify-center flex-col"
                    style={{
                        height: columns > 1 ? siteHeight : "auto",
                        display: columns === 1 ? "flex" : undefined,
                    }}
                >
                    {layoutReady &&
                        photos.slice(0, visibleCount).map((photo, index) => (
                            <div
                                key={index}
                                className={`hover:brightness-75 duration-300 ${selectMode === true && 'photo-select-mode cursor-pointer'} ${coverMode === true && 'cursor-pointer'} ${coverMode === true && index === coverImage && 'border-[2px] border-[#5A7889]'}`}
                                style={{
                                    transform:
                                        columns > 1
                                            ? `translate(${coords[index]?.x}px, ${coords[index]?.y}px)`
                                            : undefined,
                                    position: columns > 1 ? "absolute" : "relative",
                                }}
                                id={photo._id}
                                onClick={(e) => selectMode === true ? selectPhoto(e) : coverMode === true && changeCover(e, index)}
                            >
                                <Image
                                    src={photo.fullurl}
                                    placeholder="blur"
                                    blurDataURL={photo.base64hash}
                                    width={320}
                                    height={300}
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

            </article>

            <ChangeAlbumNameDialog dialogRef={changeNameDialog} closeDialog={closeChangeNameDialog} getAlbumName={getAlbum} album={album} albumID={albumID} />
            <AddPhotosDialog dialogRef={addPhotosDialog} closeDialog={closeAddPhotosDialog} folderId={albumID} getPhotos={getPhotos} />
        </section>
    )
}

export default page