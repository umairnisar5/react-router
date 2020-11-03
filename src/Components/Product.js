import React from 'react'
import { Link } from 'react-router-dom';

import Shoes from './../shoes.json';



function Product() {
  return (
    <div>
       <h1>wellcome to product</h1>
       <div className="productContainer">
         {Object.keys(Shoes).map(keyName =>{
           const shoe = Shoes[keyName];
           return ( 
             <Link key={keyName} className="link" to={'/product/${keyName}'}>  
           <h2>{shoe.name}</h2>
           <img src={shoe.img} height={150} />
           </Link> 
           )
         })}
       </div>
    </div>
  );
}

export default Product;
