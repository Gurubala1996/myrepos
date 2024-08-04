import { useState } from "react"
import { list } from "./list "
import "./productsmap.css"
import {Cards} from "./cards"

function Products({handleClick}) {

    return(
        <div>
            <div className="container-fluid bg-white shopping_items">
                {list && list?.map((item) => <Cards item={item} handleClick={handleClick} />)}

            </div>
        </div>
    )
    
}

export {Products}