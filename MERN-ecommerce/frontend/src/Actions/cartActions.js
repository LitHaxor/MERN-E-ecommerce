import Axios from 'axios';
import { CART_ADD_ITEMS, CART_REMOVE_ITEMS } from '../Constants/cartConstants';

export const addToCart = ( productId, qty ) => async (dispatch, getState) =>{
    const { data } = await Axios.get(  `/api/products/${productId}` );

    dispatch({
        type: CART_ADD_ITEMS,
        payload:{
            name: data.name,
            image: data.image,
            price: data.price,
            stock: data.stock,
            product: data._id,
            qty,
        }
    });

    localStorage.setItem('cartItems',
     JSON.stringify(getState().cart.cartItems));
 };


 export const removeFromCart = (productId) => (dispatch, getState) =>{

    //dispatching 
    dispatch(
         {
             type: CART_REMOVE_ITEMS,
             payload: productId
         });

         //saving to localstore
         localStorage.setItem('cartItems', 
         JSON.stringify(getState().cart.cartItems)
         );
        
 }