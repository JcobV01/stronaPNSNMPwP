'use client';

import React, { useState } from 'react'
import dynamic from 'next/dynamic';
import CardToNavbar from './CardToNavbar';

import candle from '@public/assets/icons/sacraments/candle.svg'
import pigeon from '@public/assets/icons/sacraments/peace-pigeon.svg'
import pitcher from '@public/assets/icons/sacraments/pitcher.svg'
import stole from '@public/assets/icons/sacraments/stole.svg'
import rings from '@public/assets/icons/sacraments/rings.svg'
import coffin from '@public/assets/icons/sacraments/coffin.svg'

const prevSacraments = [
  {
    name: 'baptism',
    image: candle,
    title: 'Sakrament',
    subtitle: 'chrztu'
  },
  {
    name: 'confirmation',
    image: pigeon,
    title: 'Sakrament',
    subtitle: 'bierzmowanie'
  },
  {
    name: 'anointing',
    image: pitcher,
    title: 'Sakrament',
    subtitle: 'namaszczenia chorych'
  },
  {
    name: 'confession',
    image: stole,
    title: 'Sakrament',
    subtitle: 'pokuty i pojednania'
  },
  {
    name: 'marriage',
    image: rings,
    title: 'Sakrament',
    subtitle: 'małżeństwa'
  },
  {
    name: 'funeral',
    image: coffin,
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
      <nav className='flex-center gap-[20px]'>
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