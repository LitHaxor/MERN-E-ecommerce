import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailProduct } from '../Actions/productActions';
import LoadingBox from '../Components/LoadingBox';
import MessageBox from '../Components/MessageBox';
import Rating from '../Components/Rating';

const ProductScreen = (props) =>
{
   const dispatch = useDispatch();
   const productDetail = useSelector( state => state.productDetail);
   const productId = props.match.params.id;
   const {loading, error, product} = productDetail;

   useEffect(()=>{
        dispatch(detailProduct(productId));
   }, [dispatch, productId]);

    if(!product)
    {
        return <div>Product Not found!</div>
    }
    
    return(
        <div>
            {loading ? (
                <LoadingBox/>
            ) : error ? (
                <MessageBox variant="danger">{error}</MessageBox>
            ) : (
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
            )}
        </div>
       
    )

}

export default ProductScreen;