import React from 'react'

const AnnNav = () => {
  return (
    <nav className="flex gap-[30px] w-[1000px] m-auto">
        <div className="flex-1 py-[20px] shadow-[0px_4px_4px_0px_#00000025] bg-white rounded-[10px]">
          <p className="text-center text-[20px] font-medium tracking-[10px]">Poprzednie</p>
        </div>
        <div className="flex-1 py-[20px] shadow-[0px_4px_4px_0px_#00000025] bg-[#5A7889] rounded-[10px]">
          <p className="text-center text-white text-[20px] font-medium tracking-[10px]">Aktualne</p>
        </div>
      </nav>
  )
}

export default AnnNav