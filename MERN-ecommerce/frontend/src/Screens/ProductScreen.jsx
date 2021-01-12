import React from 'react';
import Rating from '../Components/Rating';
import data from '../data';

const ProductScreen = (props) =>
{
    const product = data.products.find( x => x._id === props.match.params.id)
    if(!product)
    {
        return <div>Product Not found!</div>
    }
    
    return(
        <div>
            <a href="/">Back to Home</a>
            <div className="row top">


                <div className="col-2">
                    <img src={product.image} className="img-large" alt=""/>
                </div>


                <div className="col-1">
                    <ul>


                        <li>
                            <h1>{product.name}</h1>
                        </li>

                        <li>
                            <Rating 
                                rating= {product.rating} 
                                numReviews= {product.numReviews}/>
                        </li>

                        <li>
                            Price: ${product.price.toFixed(2)}
                        </li>

                        <li>
                            Description: {product.description}
                        </li>

                    </ul>
                </div>


                <div className="col-1">

                    <div className="card card-body">

                        <ul>

                            <li>

                                <div className="row">
                                    <div>Price</div>
                                    <div className="price">$ {product.price.toFixed(2)}</div>
                                </div>

                            </li>

                            <li>

                                <div className="row">
                                    <div>Status</div>
                                </div>

                                <div>
                                    {
                                        product.stock > 0? (
                                            <span className="success">In Stock</span>
                                        ) : (
                                            <span className="danger">Unavailable</span>
                                        )
                                    }
                                </div>

                            </li>

                            <li>
                                <button className="primary block">Add Cart</button>
                            </li>

                        </ul>

                    </div>

                </div>


            </div>
        </div>
    )

}

export default ProductScreen;