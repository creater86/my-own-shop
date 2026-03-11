import React, {  useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { useNavigate, useParams } from 'react-router-dom'
import MenData from './MenData.json'
import Womendata from "./WomenData.json"
import './ShowProduct.css'
function ShowProduct({cart,setCart}) {
   const navigation=useNavigate()
  const size= ["S","M","L","XL","XXL"]
   const {id}=useParams()
   let allProduct=[...MenData,...Womendata]
   const Products=allProduct.find((item)=>item.id===Number(id))
   const[sizes,setSizes]=useState("")
   const [quantity,setQuantity]=useState(1)
   const [open,setOpen] = useState(false)

   
  const handelcart = () => {

  if (sizes === '') {
    alert('Please select a size')
    return
  }

  const cartItem = {
    id: Products.id,
    title: Products.title,
    price: Products.price,
    image: Products.image,
    size: sizes,
    quantity: quantity
  }

  setCart([...cart, cartItem])

  navigation("/navigation")
}
   
  return (

    <div>
        <Header/>
        <main className='main'>
          <section className='Left-Side'>
             <img src={Products.image}  className="sizing"alt={Products.image} />         
          </section>
          <section className='Right-side'>
            <section className='border'>
              <h1>{Products.title}</h1>
              <p >{Products.category}</p>
            </section>
            <section>
               <h1>{`₹${Products.price}`}</h1>
               <p>MRP incl.of all taxes</p>
               <h2>Please select a size.</h2>
               {
               size.map((item)=>(
                  <button key={item} className={`btn ${sizes===item?'active-size':''}`} onClick={()=>setSizes(item)}>{item}</button>
               ))
               }
          
            </section>
           
            <section className='dk'>
              <label htmlFor="dks"> Quantity</label>
              <input
                id='dks'
                type="number"
                min={1}
                max={10}
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
              />
            </section>

            <button className='carts' onClick={handelcart}>Add to carts</button>
            <h3 onClick={()=>setOpen(!open)} className="toggle">
                 Product Details {open ? "▲" : "▼"}
            </h3>
            {open&&(<section className='details'>
            <h2>{Products.title}</h2>
            <p>{Products.category}</p>
             
              <h3>product details</h3>
              <p>
                Material & Care:
                The hydros are made of injection moulded EVA which is known for its comfort.
                The moulded construction provides uniform flexibility. The inner footbed is made of higher density EVA proving extra soft base for your feet.
                The charms are made of moulded silicone.
                Care: wash with mild soap/cold water using a soft clean cloth, let it air dry and do not wash using hot/warm water
              </p>
              <h5>Country of Origin: <p>India (and proud)</p></h5>
              <p>
                <h4>Manufactured & Sold By:</h4>
                The Store Pvt. Ltd.
                224,dharmapuri
                J.R. Boricha Marg
                Lower Parel (E)
                pennagaram - 636810
                connect@thestore.com
                Customer care no. +91 22-68493328
              </p>
              <p>
                <h4>Description</h4>
                {Products.description}
              </p>
          
          </section>
            
            
            )}
          </section>
          
        </main>
        <section className='listing-item'>
         
      <div className="product-row" >
        {allProduct.map((item) => (
          <div className="card" key={item.id} onClick={() => navigation(`/Product/${item.id}`)}>
            <img src={item.image} alt={item.title} />
            <p>{item.title}</p>
            <h4>₹{item.price}</h4>
          </div>
        ))}
        </div>

        </section>
        <Footer/>
    </div>
  )
}

export default ShowProduct