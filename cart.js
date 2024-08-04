import { useEffect, useState } from "react"
import "./cart.css"

function Cart({cart , setCart , handleChange}) {

    const [price , setPrice] = useState(0)

    useEffect(()=>
    {
        handlePrice();

    })

    const handlePrice = () =>
    {
        let ans = 0;

        cart.map((product)=> ans += product.amount * product.price)

        setPrice(ans)

        console.log(price);

    }

    const handleRemove = (id) =>
    {
        const updatedCart = cart.filter((product) => product.id !== id)

        setCart(updatedCart)

        handlePrice();

    }

    return(
        <div className="cart-page">

            <div className="cart_maiDiv">
                {cart && cart.map ((product)=>
                {
                    return(
                        <div className="cart_items">
                            <span><h6>{product.title}</h6></span>
                            <span className="imd_div1"><img className="img_cart1" src={product.img} alt="" /></span>
                            <span><h6>₹ {product.price}</h6></span>
                            <span className="span_countDiv"><button className="span_count" onClick={()=>handleChange(product , -1)}>-</button></span>
                            <span><button>{product.amount}</button></span>
                            <span className="span_countDiv"><button className="span_count" onClick={()=>handleChange(product , +1)}>+</button></span>
                            <span><button className="btn bg-danger text-white" onClick={()=>handleRemove(product.id)}>Delete</button></span>
                        </div>
                    )
                })}
            </div>

            <div className="price_div">
                <div><h4>Total Price of your Cart </h4></div>
                <div><h4>₹ {price} </h4></div>
            </div>
        </div>
    )
    
}

export {Cart}