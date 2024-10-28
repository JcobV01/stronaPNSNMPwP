import React from 'react'

const CalendarTextsSection = ({readings, formatTitle}) => {
    return (
        <article className='w-[1200px] xl:w-[90%] m-auto flex flex-col gap-[40px]'>
            {
                readings?.map((text, index) => (
                    <div key={index} className='flex flex-col gap-[10px]'>
                        <h4 className='font-light text-[30px] lg:text-[28px]'>
                            <span className='font-medium text-[30px]'>{text.title == "Aklamacja" ? text.title : formatTitle(text?.title)}</span>
                            {text.title != "Aklamacja" && text?.title.slice(text.title.indexOf("(") + 1, text.title.length - 1)}
                        </h4>
                        <h5>{text.subtitle}</h5>
                        {
                            text.title.split(" ")[0] != "Psalm" && text.title.split(" ")[0] != "Aklamacja" ? 
                                text.content.map((paragraph, indexInside) => (
                                    <p key={indexInside} className={`text-[20px] lg:text-[18px] ${indexInside == 0 && 'font-medium'}`}>{paragraph}</p>
                                ))
                                :
                                text.content.map((paragraph, indexInside) => (
                                    <p key={indexInside} className={`text-[20px] lg:text-[18px] ${indexInside%2 == 0 && 'font-medium'}`} dangerouslySetInnerHTML={{__html: paragraph}}></p>
                                ))
                        }
                    </div>
                ))
            }
        </article>
    )
}

export default CalendarTextsSection