import "./cards.css"

function Cards({item , handleClick}) {

    return(
        <div className="single_item">
            <div><h6>{item.title}</h6></div>
            <div className="imd_div"><img className="img_cart" src={item.img} alt="" /></div>
            <div><h6>₹ {item.price}</h6></div>
            <div><button onClick={()=>handleClick(item)}>Add to Cart</button></div>
        </div>
    )
    
}
export {Cards}