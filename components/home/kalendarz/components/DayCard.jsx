import Link from "next/link"

import { Icon } from "@iconify/react"

const DayCard = ({dateText, date='', name, color="zielony", texts="", memory=""}) => {

    const displayColor = {
        "zielony": '#3C9530',
        "czerwony": '#e01111',
        "fioletowy": '#860ac9',
        "różowy": "#ff3dfb",
        "biały": "#ffffff"
    }

  return (
    <div className="w-[1075px] m-auto flex items-center xl:w-[800px] lg:w-[100%] lg:px-[20px] md:flex-col">
        <div className="w-[165px] h-[165px] flex flex-col flex-center rounded-[5px] md:h-auto md:w-full md:flex-row md:gap-[20px] md:rounded-b-none" style={{backgroundColor: displayColor[color]}}>
            <p className={`${color == "biały" ? 'text-[#353535]': 'text-white'} text-[50px] font-light md:text-[30px] sm:text-[25px]`}>{date[0]?.split(" ")[0]}</p>
            <p className={`${color == "biały" ? 'text-[#353535]': 'text-white'} text-[23px] sm:text-[20px]`}>{date[0]?.split(" ")[1]}</p>
        </div>
        <div className="flex flex-col gap-[4px] flex-1 bg-white pl-[60px] h-full py-[15px] rounded-r-[5px] relative md:w-full sm:px-[30px]">
            <h4 className="text-[22px] mb-[13px] md:text-[20px] sm:text-[17px] line-clamp-1">{memory?.length > 0 ? memory?.charAt(0).toUpperCase() + memory?.slice(1) : date[1]?.charAt(1).toUpperCase() + date[1]?.slice(2)}, {name}</h4>

            <div className="flex gap-[30px]">
                <p><span className="text-[15px] font-medium sm:text-[13px]">I czytanie: </span>{texts[0]?.title.slice(texts[0]?.title.indexOf("(") + 1, texts[0]?.title.length -1)}</p>
                {texts?.length > 4 && <p><span className="text-[15px] font-medium">II czytanie: </span>{texts[2]?.title.split("(")[1].slice(0, -1)}</p>}
            </div>

            <p><span className="text-[15px] font-medium sm:text-[13px]">Psalm: </span>{texts[1]?.title.slice(texts[1]?.title.indexOf("(") + 1, texts[1]?.title.length -1)}</p>
            <p><span className="text-[15px] font-medium sm:text-[13px]">Ewangelia: </span>{
            texts.length > 4 ? texts[4]?.title.slice(texts[4]?.title.indexOf("(") + 1, texts[4]?.title.length -1)
            :
            texts[3]?.title.slice(texts[3]?.title.indexOf("(") + 1, texts[3]?.title.length -1)
            }</p>

            <Link href={`/kalendarz?date=${dateText}`} className="absolute bottom-[15px] right-[15px] flex gap-[10px] sm:static">
                <p className="text-[15px] sm:w-full sm:text-right">Zobacz więcej</p>
                <Icon icon="la:angle-double-right" width="20" height="22.5" alt="Ikona strzałki"/>
            </Link>
        </div>
    </div>
  )
}

export default DayCard