import "./navbar.css";
import { IoCartOutline } from "react-icons/io5";

function Navbar({size , show , setShow}) {


    return(
        <div className="Container-fluid bg-dark text-white d-flex justify-content-between align-item-center ps-2 pe-2 sticky-top">

            <div className="">
            <h2 className="heading" onClick={()=>setShow(true)}>Shipping Cart</h2>
            </div>

            <div className="">
                <h2 className="icon-focus" onClick={()=>setShow(false)}>
                <span className="icon-cart"><IoCartOutline /></span>
                <span className="count">{size}</span>
                </h2>
            </div>
                
        </div>
    )
    
}

export {Navbar};