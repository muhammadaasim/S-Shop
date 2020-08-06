import React from 'react'
import {useParams} from 'react-router-dom';
import Shoes from '../shoes.json'

function ProductItems () {
  let { id }=useParams();
  const Shoe=Shoes[id];
  if(!Shoe)
  {
      return <h2>Product Not Found!</h2>
  }
    return (
        <div>
            <h1>Product Items</h1>
            <div className="lnk">
            <h4>{Shoe.name}</h4>
            <h5>{Shoe.price}</h5>
            </div>
        </div>
    )
}

export default ProductItems
