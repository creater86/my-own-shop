import React, { useEffect, useState } from 'react'
import './Nav.css'

const images = [
  process.env.PUBLIC_URL + '/shirt.avif',
  process.env.PUBLIC_URL + '/1.avif',
  process.env.PUBLIC_URL + '/2.avif',
  process.env.PUBLIC_URL + '/3.avif',
  process.env.PUBLIC_URL + '/4.avif'
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