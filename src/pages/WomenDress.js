import React from 'react'
import Header from './Header'
import WomenProduct from './WomenData.json'
import Star from './Star'
import './Main.css'
import { Nav } from './Nav'
import Footer from './Footer'
import {  useNavigate } from 'react-router-dom'
function WomenDress() {
  const navigation=useNavigate()

  const handelclick=(item)=>{
    navigation(`/Product/${item.id}`)
  }
  return (
    <div>
        <Header/>
        <Nav/>
        <div className="Product-Container">
        {WomenProduct.map((item) => (
          <div className="PathSlider" key={item.id} >
            <img src={item.image} alt={item.title} onClick={()=>handelclick(item)} />
            <h3 className="para">{item.title}</h3>
            <p className="para">{`Price: ₹${item.price}`}</p>
           <Star/>
          </div>
        ))}
      </div>
        <div>
          <Footer/>
          
        </div>
    </div>
  )
}

export default WomenDress