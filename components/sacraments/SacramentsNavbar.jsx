'use client';

import React, { useState } from 'react'
import dynamic from 'next/dynamic';
import CardToNavbar from './CardToNavbar';

const prevSacraments = [
  {
    name: 'baptism',
    title: 'Sakrament',
    subtitle: 'chrztu'
  },
  {
    name: 'confirmation',
    title: 'Sakrament',
    subtitle: 'bierzmowanie'
  },
  {
    name: 'anointing',
    title: 'Sakrament',
    subtitle: 'namaszczenia chorych'
  },
  {
    name: 'confession',
    title: 'Sakrament',
    subtitle: 'pokuty i pojednania'
  },
  {
    name: 'marriage',
    title: 'Sakrament',
    subtitle: 'małżeństwa'
  },
  {
    name: 'funeral',
    title: 'Chrześcijański',
    subtitle: 'pogrzeb'
  },
]

const components = {
  baptism: dynamic(() => import('./Baptism')),
  confirmation: dynamic(() => import('./Confirmation')),
  anointing: dynamic(() => import('./Anointing')),
  confession: dynamic(() => import('./Confession')),
  marriage: dynamic(() => import('./Marriage')),
  funeral: dynamic(() => import('./Funeral')),
}

const SacramentsNavbar = () => {
  const [selectedComponent, setSelectedComponent] = useState('baptism');

  const ComponentToRender = components[selectedComponent];

  return (
    <>
      <nav className='flex-center gap-[20px] flex-wrap'>
        {prevSacraments.map((sacrament) => (
          <CardToNavbar key={sacrament.name} name={sacrament.name} image={sacrament.image} title={sacrament.title} subtitle={sacrament.subtitle} setComponent={setSelectedComponent} isActive={selectedComponent === sacrament.name}/>
        ))}
      </nav>
      <section className='flex-center mt-[70px]'>
        <ComponentToRender />
      </section>
    </>
  )
}

export default SacramentsNavbar