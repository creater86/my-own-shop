import React, { useEffect, useState } from 'react'
import './Nav.css'

const images = [
  '/shirt.avif',
  '/1.avif',
  '/2.avif',
  '/3.avif',
  '/4.avif'
];

export const Nav = () => {

  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
    <div className='banner'>
        <img
          src={images[index]}
          alt='slide'
          className='Slides'
       
        />
    
    </div>
      <div>
      </div>
    </>
  )
}