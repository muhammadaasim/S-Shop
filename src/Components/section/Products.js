import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {DataContext} from '../../GlobalContext/Context';
import '../css/products.css';
export default class Product extends Component {
    static contextType=DataContext;
   render(){
       const {products}=this.context;
    return (
        <div id="product">
            {
            products.map(product =>(
                <div className="card" key={products._id}>
                    <Link to={`/product/${product._id}`}>
                    <img src={product.src} alt="Product"/>
                    </Link>
                    <div className="content">
                        <h3>
            <Link to={`/product/${product._id}`}>{product.title}</Link>
                        </h3>
                        <span>${product.price}</span>
                        <br/>
                        <button>Add to cart</button>
                    </div>
                </div>
            ))
        }
        </div>
    )
}
}