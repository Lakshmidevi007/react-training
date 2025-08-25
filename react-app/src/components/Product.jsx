import React, { useState} from "react";

function Product(props){
    const[quantity,setQuantity]=useState(0);

    const increaseQuantity=()=>{
        setQuantity(quantity+1);
    };
    
    

    return(
    
            <div>
            <img className="image" src={props.logo} alt="" onClick={increaseQuantity}/>

            <p className="set">Quantity:{quantity}</p>
        </div>
        
    );

}
export default Product;
