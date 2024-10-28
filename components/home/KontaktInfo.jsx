import { Icon } from '@iconify/react'
import React from 'react'

const KontaktInfo = ({icon, title, desc}) => {
    return (
        <>
            <div className="flex items-center gap-[10px] mt-[10px]">
                <Icon icon={icon} width="30" height="30" className="text-[#5A7889]" />
                <p className="text-[#B0B0B0] text-[17px]">{title}</p>
            </div>
            <p className="text-[#ECECEC] text-[17px] tracking-[3.4px] mt-[5px] pl-[40px]">{desc}</p>
        </>
    )
}

export default KontaktInfo