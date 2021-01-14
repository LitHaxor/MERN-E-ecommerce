import { CART_ADD_ITEMS } from "../Constants/cartConstants";

const initalState= {
    cartItems: []
}

export const cartReducer = (state = initalState, action) =>{
    switch (action.type) {
        case CART_ADD_ITEMS:
          const item = action.payload;
          const existItem= state.cartItems.find(x=> x.product === item.product);

          if(existItem){
              return{
                  ...state,
                  cartItems: state.cartItems.map( x => x.product === existItem.product ? item : x )
              }
          }
         else{
             return{
                 ...state,
                 cartItems: [
                     ...state.cartItems,
                     item
                    ]
             }
         }
    
        default:
            return state;
    }
}