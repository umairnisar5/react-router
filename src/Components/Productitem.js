import React from 'react'
import { useParams } from 'react-router-dom';
import Shoes from './../shoes.json';



function ProductItem() {
  const { id } = useParams();
  const shoe  = Shoes[id];

  if (!shoe)
  return <h2>Product Not Found! </h2>


  return (
    <div>
       <h1>wellcome to Product Item</h1>
       <div className="link">  
           <h3>{shoe.name}</h3>
           <img src={shoe.img} height={400} />
           </div> 
    </div>
  );
}

export default ProductItem;
