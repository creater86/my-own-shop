import React from 'react'
import Header from './Header'
import Footer from './Footer'
import './Cart.css'

function Cart({cart,setCart}) {



  // remove product
  const removeItem = (index) => {
    const updatedCart = cart.filter((item,i)=> i !== index)
    setCart(updatedCart)
  }

  // increase quantity
  const increaseQty = (index) => {
    const updatedCart = [...cart]
    updatedCart[index].quantity += 1
    setCart(updatedCart)
  }

  // decrease quantity
  const decreaseQty = (index) => {
    const updatedCart = [...cart]

    if(updatedCart[index].quantity > 1){
      updatedCart[index].quantity -= 1
      setCart(updatedCart)
    }

  }

  // total amount calculation
  const totalAmount = cart.reduce((total,item)=>{
    return total + item.price * item.quantity
  },0)

  // payment button
  const payment = ()=>{
    alert("Payment Gateway Coming Soon")
  }

  return (
    <div>

      <Header/>

      <div className='cart-container'>

      {cart.length === 0 ? (
        <h2 style={{color:"red",textAlign:"center",fontSize:"24px",margin:"20% 0"}}>Cart Empty</h2>
      ) : (

        <>
        
        {cart.map((item,index)=>(

          <div key={index} className="cart-card">

            <img src={item.image} alt={item.title} />

            <div className="cart-info">

              <h3>{item.title}</h3>

              <p>Size: {item.size}</p>

              <h4>₹{item.price}</h4>

              <div className="qty-box">

                <button onClick={()=>decreaseQty(index)}>-</button>

                <span>{item.quantity}</span>

                <button onClick={()=>increaseQty(index)}>+</button>

              </div>

              <button className="remove" onClick={()=>removeItem(index)}>
                Remove
              </button>

            </div>

          </div>

        ))}

        {/* total section */}

        <div className="cart-total">

          <h2>Total : ₹{totalAmount}</h2>

          <button className="pay-btn" onClick={payment}>
            Proceed To Payment
          </button>

        </div>

        </>

      )}
      






      </div>

      <Footer/>

    </div>
  )
}

export default Cart