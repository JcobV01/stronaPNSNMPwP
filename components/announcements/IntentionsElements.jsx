import Title from '@components/Title'
import React from 'react'
import IntentionsAcordeon from './IntentionsAcordeon';

const IntentionsElements = ({ intentions }) => {
    const formatDate = (dateString) => {
        const monthNames = [
            "stycznia", "lutego", "marca", "kwietnia", "maja", "czerwca",
            "lipca", "sierpnia", "września", "października", "listopada", "grudnia"
        ];

        const [day, month] = dateString.split('.').map(Number);
        const monthName = monthNames[month - 1];
        return `${day} ${monthName}`;
    }

    return (
        <article>
            <Title title="Intencje" title2="" subtitle="Mszy świętych" />
            <div className='grid grid-cols-3 grid-rows-3 gap-[25px] mt-[50px] '>
                {intentions?.map((element, index) => (
                    <div className={`h-[350px] bg-white shadow-[0px_4px_4px_0px_#00000025] p-[30px] flex flex-col gap-[5px] ${index == 6 ? 'col-span-3' : 'w-[350px] items-center'}`} key={index}>
                        <div className='w-[200px] h-[5px] bg-green-800 mx-auto'></div>
                        <h4 className='text-[35px] font-semibold tracking-[4px] text-center'>{element.day}</h4>
                        <p className='text-[#B0B0B0] text-[15px] text-center'>{formatDate(element.date)}</p>

                        {element.times.length < 3 || index == 6 ? element.times.map((hour, index2) => (
                            <div className={`flex gap-[5px] mt-[10px] ${index != 6 && 'flex-col text-center'} mx-auto`} key={index2 * 100}>
                                <p className='text-[#5A7889]  text-[18px] tracking-[5px] font-semibold'>{hour}</p>
                                <p className='tracking-[2px] text-[16px]'>{element.intentions[index2]}</p>
                            </div>
                        ))
                            :
                            <div id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
                                {
                                    element.times.map((hour, index2) => (
                                        <IntentionsAcordeon hour={hour} intention={element.intentions[index2]} key={index2*100} id={index2*100}/>
                                    ))
                                }
                            </div>
                        }
                    </div>
                ))}
            </div>
        </article>
    )
}

export default IntentionsElements