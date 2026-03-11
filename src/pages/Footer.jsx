import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <div className='fixing'>
           <h1 className='intro'>HOMEGROWN INDIAN BRAND</h1>
        <h2 className='customer'>Over 6 Million Happy Customers</h2>
         <div className='abouts'> About the Souled store</div>
     <section className='about'>
       
          
      <ul className='Need'>
        <h4>NEED HELP</h4>
        <li><a href="#">Contact Us</a></li>
        <li><a href="#">Track Order</a></li>
        <li><a href="#">Return & Refunds</a></li>
        <li><a href="#">FAQs</a></li>
        <li><a href="#">My Account</a></li>
      </ul>

      <ul className='more'>
        <h4>MORE INFO</h4>
        <li><a href="#">T&C</a></li>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Sitemap</a></li>
        <li><a href="#">Get Notified</a></li>
        <li><a href="#">Blog</a></li>
      </ul>
   
        
        
     </section>
    </div>
  )
}

export default Footer