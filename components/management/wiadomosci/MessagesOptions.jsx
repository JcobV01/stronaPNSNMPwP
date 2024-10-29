import React, { useState } from 'react'
import Image from 'next/image';

import moreImg from '@public/assets/icons/mamagement/more.png'

const MessagesOptions = ({ handleDelete, handleDetails }) => {
    const [showOptions, setShowOptions] = useState(false);

    const toogleOptions = () => {
        setShowOptions(prev => !prev);
    };

    return (
        <div className='relative'>
            <button onClick={toogleOptions}>
                <Image src={moreImg} alt='Ikona trzech kropeczek - więcej' />
            </button>
            {showOptions &&
                <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg">
                    <button onClick={() => { handleDetails(); setShowOptions(false); }} className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left">
                        Szczegóły
                    </button>
                    <button onClick={() => { handleDelete(); setShowOptions(false); }} className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left" >
                        Usuń
                    </button>
                </div>
            }
        </div>
    )
}

export default MessagesOptions