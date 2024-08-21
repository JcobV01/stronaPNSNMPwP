import Image from "next/image"
import Link from "next/link"

import arrow from '@public/assets/icons/right-arrow.svg'

const DayCard = ({date, name, color="#3C9530", texts}) => {
  return (
    <div className="w-[1075px] m-auto flex items-center xl:w-[800px] lg:w-[100%] lg:px-[20px] md:flex-col">
        <div className="w-[165px] h-[165px] flex flex-col flex-center rounded-[5px] md:h-auto md:w-full md:flex-row md:gap-[20px] md:rounded-b-none" style={{backgroundColor: color}}>
            <p className="text-white text-[50px] font-light md:text-[30px] sm:text-[25px]">16</p>
            <p className="text-white text-[25px] sm:text-[20px]">Sierpnia</p>
        </div>
        <div className="flex flex-col gap-[4px] flex-1 bg-white pl-[60px] h-full py-[15px] rounded-r-[5px] relative md:w-full sm:px-[30px]">
            <h4 className="text-[22px] mb-[13px] md:text-[20px] sm:text-[17px]">Piątek XIX Tygodnia Zwykłego</h4>

            <div className="flex gap-[30px]">
                <p><span className="text-[15px] font-medium sm:text-[13px]">I czytanie: </span> Ez 16, 1-15. 60. 63</p>
                {/* <p><span className="text-[15px] font-medium">II czytanie: </span> Ez 16, 1-15. 60. 63</p> */}
            </div>

            <p><span className="text-[15px] font-medium sm:text-[13px]">Psalm: </span> Iz 12, 2. 3 i 4bcd. 5-6</p>
            <p><span className="text-[15px] font-medium sm:text-[13px]">Ewangelia: </span> Mt 19, 3-12</p>

            <Link href="/kalendarz" className="absolute bottom-[15px] right-[15px] flex gap-[10px] sm:static">
                <p className="text-[15px] sm:w-full sm:text-right">Zobacz więcej</p>
                <Image src={arrow} width="auto" height="auto" alt="Ikona strzałki"/>
            </Link>
        </div>
    </div>
  )
}

export default DayCard