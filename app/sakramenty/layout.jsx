import SacramentsNavbar from '@components/sacraments/SacramentsNavbar'
import Title from '@components/Title'
import React from 'react'

const layout = () => {
  return (
    <div className='pt-[80px]'>
      <Title title="Sakramenty" title2="" subtitle="Informacje" />
      <div className='mt-[60px]'>
        <SacramentsNavbar />
      </div>
    </div>
  )
}

export default layout