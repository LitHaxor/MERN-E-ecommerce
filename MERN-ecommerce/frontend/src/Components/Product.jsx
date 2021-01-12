import React from 'react';
import Rating from './Rating';

const Product = (props) =>{
    


    const product = props.product;
    return(
        <div className="card">

                <a href={`/product/${product._id}`}>

                    <img src={product.image} className="medium" alt="product"/>

                </a>


                <div className="card-body">

                    <a href={`/product/${product._id}`}>
    
                        <h2>{product.name}</h2>
    
                    </a>
    
                    <Rating rating ={product.rating}  numReviews= {product.numReviews}/>
                    
    
                    <div className="price">
                        
                        ${product.price.toFixed(2)}
    
                    </div>

    
                </div>

        </div>
    )
}

export default Product;