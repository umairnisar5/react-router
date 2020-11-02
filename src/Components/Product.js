import React from 'react'
import Shoes from './../shoes.json';



function Product() {
  return (
    <div>
       <h1>wellcome to product</h1>
       <div>
         {Object.keys(Shoes).map(keyName =>{
           return ( <div> 
           <h2>{keyName}</h2>
           </div> )
         })}
       </div>
    </div>
  );
}

export default Product;
