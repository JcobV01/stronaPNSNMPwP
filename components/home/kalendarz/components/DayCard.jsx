import Image from "next/image"
import Link from "next/link"

import arrow from '@public/assets/icons/right-arrow.svg'

const DayCard = ({date='', name, color="#3C9530", texts="", memory=""}) => {
    console.log(memory)
  return (
    <div className="w-[1075px] m-auto flex items-center xl:w-[800px] lg:w-[100%] lg:px-[20px] md:flex-col">
        <div className="w-[165px] h-[165px] flex flex-col flex-center rounded-[5px] md:h-auto md:w-full md:flex-row md:gap-[20px] md:rounded-b-none" style={{backgroundColor: color}}>
            <p className="text-white text-[50px] font-light md:text-[30px] sm:text-[25px]">{date[0]?.split(" ")[0]}</p>
            <p className="text-white text-[23px] sm:text-[20px]">{date[0]?.split(" ")[1]}</p>
        </div>
        <div className="flex flex-col gap-[4px] flex-1 bg-white pl-[60px] h-full py-[15px] rounded-r-[5px] relative md:w-full sm:px-[30px]">
            <h4 className="text-[22px] mb-[13px] md:text-[20px] sm:text-[17px]">{memory?.length > 0 ? memory : date[1]?.charAt(1).toUpperCase() + date[1]?.slice(2)}, {name}</h4>

            <div className="flex gap-[30px]">
                <p><span className="text-[15px] font-medium sm:text-[13px]">I czytanie: </span>{texts[0]?.title.split("(")[1].slice(0, -1)}</p>
                {texts?.length > 4 && <p><span className="text-[15px] font-medium">II czytanie: </span>{texts[2]?.title.split("(")[1].slice(0, -1)}</p>}
            </div>

            <p><span className="text-[15px] font-medium sm:text-[13px]">Psalm: </span>{texts[1]?.title.split("(")[1].slice(0, -1)}</p>
            <p><span className="text-[15px] font-medium sm:text-[13px]">Ewangelia: </span>{
            texts.length > 4 ? texts[4]?.title.split("(")[1].slice(0, -1)
            :
            texts[3]?.title.split("(")[1].slice(0, -1)
            }</p>

            <Link href="/kalendarz" className="absolute bottom-[15px] right-[15px] flex gap-[10px] sm:static">
                <p className="text-[15px] sm:w-full sm:text-right">Zobacz więcej</p>
                <Image src={arrow} width="auto" height="auto" alt="Ikona strzałki"/>
            </Link>
        </div>
    </div>
  )
}

export default DayCard