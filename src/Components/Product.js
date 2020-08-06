import React from 'react'
import Shoes from '../shoes.json'
import {Link} from 'react-router-dom';

function Product(){
    // console.log(Shoes);
    return (
        <div>
            <h1>Products</h1>
            <div className="productContainer">
                {Object.keys(Shoes).map(keyName=>{
                    const Shoe=Shoes[keyName];
                    return (<Link Key={keyName} className="lnk" to={`/product/${keyName}`}>
                        <h4>{Shoe.name}</h4>
                        <h5>{Shoe.price}</h5>
                    </Link>)
                })}
            </div>
        </div>
    )
}

export default Product
