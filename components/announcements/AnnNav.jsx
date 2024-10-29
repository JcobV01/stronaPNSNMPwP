import React from 'react'

const AnnNav = ({clicked = "actual", changeCliked}) => {
  return (
    <nav className="flex gap-[30px] w-[1000px] m-auto">
        <button onClick={() => changeCliked("previous")} className="flex-1 py-[20px] shadow-[0px_4px_4px_0px_#00000025] rounded-[10px]" style={{backgroundColor: clicked == "previous" ? '#5A7889' : '#FFFFFF'}}>
          <p className="text-center text-[20px] font-medium tracking-[10px]" style={{color: clicked == "previous" ? '#FFFFFF' : '#353535'}}>Poprzednie</p>
        </button>
        <button onClick={() => changeCliked("actual")} className="flex-1 py-[20px] shadow-[0px_4px_4px_0px_#00000025] rounded-[10px]" style={{backgroundColor: clicked == "actual" ? '#5A7889' : '#FFFFFF'}}>
          <p className="text-center text-white text-[20px] font-medium tracking-[10px]" style={{color: clicked == "actual" ? '#FFFFFF' : '#353535'}}>Aktualne</p>
        </button>
      </nav>
  )
}

export default AnnNav