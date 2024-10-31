"use client"

import React, { useState } from 'react'
import EditorText from '../ogloszenia/EditorText';
import EditorHtml from '../ogloszenia/EditorHtml';
import mammoth from 'mammoth';
import * as cheerio from 'cheerio';

const IntentionAddDialog = ({ addRef, rows, setRows, setUpdated }) => {
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState('');


    //upload pliku

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile && selectedFile.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
            setFile(selectedFile);
            setFileName(selectedFile.name);
        } else {
            setFileName('');
            console.error('Niepoprawny format pliku');
        }
    };

    const handleDrop = (event) => {
        event.preventDefault();
        event.stopPropagation();
        const selectedFile = event.dataTransfer.files[0];
        if (selectedFile && selectedFile.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
            setFile(selectedFile);
            setFileName(selectedFile.name);
        } else {
            setFileName('');
            console.error('Niepoprawny format pliku');
        }
    };

    const handleDragOver = (event) => {
        event.preventDefault();
        event.stopPropagation();
    };

    //konwersja pliku

    const extractTableRows = (htmlContent) => {
        const $ = cheerio.load(htmlContent); 
        const extractedRows = [];

        $('table tr').slice(1).each((index, element) => {
            // Tworzymy obiekt dla każdego wiersza
            const rowObj = {
                day: '',
                date: '',
                times: [],
                intentions: []
            };
        
            // Pierwsza komórka zawiera dzień tygodnia i datę
            const firstCell = $(element).find('td').eq(0);
            rowObj.day = firstCell.find('p').first().text().trim() || firstCell.find('h1, h2').text().trim();
            rowObj.date = firstCell.find('p strong').text().trim();
        
            // Druga komórka zawiera godziny
            const timeCell = $(element).find('td').eq(1);
            timeCell.find('p').each((i, p) => {
                const time = $(p).text().trim();
                if (time) rowObj.times.push(time); // Dodajemy każdą godzinę do tablicy times
            });
        
            // Trzecia komórka zawiera intencje
            const intentionCell = $(element).find('td').eq(2);
            intentionCell.find('p').each((i, p) => {
                const intention = $(p).text().trim();
                if (intention) {
                    // Zamiana wszystkich + na †
                    const modifiedIntention = intention.replace(/\+/g, '†');
                    rowObj.intentions.push(modifiedIntention); // Dodajemy zmodyfikowaną intencję do tablicy intentions
                }
            });
        
            // Dodajemy obiekt do tablicy głównej
            if (rowObj.day && rowObj.date) {
                extractedRows.push(rowObj);
            }
        });
        

        console.log(extractedRows);
        

        return extractedRows;
    };

    const handleConvert = async () => {
        if (!file) {
            alert('Proszę wybrać plik .docx');
            return;
        }


        const reader = new FileReader();
        reader.onload = async (event) => {
            const arrayBuffer = event.target.result;

            try {
                const result = await mammoth.convertToHtml({ arrayBuffer });

                setRows(extractTableRows(result.value));
                console.log(result.value)
                addRef.current.close()
                setUpdated(true)
                setFile(null)
                setFileName('')
            } catch (error) {
                console.error('Błąd konwersji pliku na HTML:', error);
            }
        };

        reader.readAsArrayBuffer(file);
    };

   

    return (
        <dialog ref={addRef} className='p-[30px] rounded-[10px] backdrop:bg-[#00000050]'>
            <div className='w-full flex flex-col gap-[30px]'>
                <p className='text-center text-[20px]'>Dodaj nowe intencje</p>

                <p className='text-center text-sm text-gray-600 mt-2'>Wybrany plik: {fileName ? fileName : 'Nie wybrano pliku'}</p>
                <div
                    className='flex items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100'
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                >
                    <label htmlFor="dropzone-file" className='flex flex-col items-center justify-center w-full h-full p-[20px]'>
                        <div className='flex flex-col items-center justify-center pt-5 pb-6'>
                            <svg className='w-8 h-8 mb-4 text-gray-500 dark:text-gray-400' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 16'>
                                <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2' />
                            </svg>
                            <p className='mb-2 text-sm text-gray-500 dark:text-gray-400'><span className='font-semibold'>Naciśnij</span> lub przeciągnij, aby załadować plik</p>
                            <p className='text-xs text-gray-500 dark:text-gray-400'>Obsługiwane formaty: DOCX</p>
                        </div>
                        <input id="dropzone-file" type="file" className='hidden' onChange={handleFileChange} />
                    </label>
                </div>


                <button onClick={handleConvert} className='bg-[#11161A] text-white py-2 px-4 rounded-md'>
                    Konwertuj
                </button>
                <button onClick={() => addRef.current.close()} className='bg-[#8a1616] text-white py-2 px-4 rounded-md'>Anuluj</button>
            </div>
        </dialog>
    )
}

export default IntentionAddDialog