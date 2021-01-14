import './App.css';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
import cartScreen from './Screens/CartScreen';
import { useSelector } from 'react-redux';

function App() {

  const cart = useSelector( state => state.cart);
  const { cartItems } = cart;
  return (
   <BrowserRouter>
   
    <div className="grid-container">

        <header className="row">

            <div >
                <Link to="/" className="brand">MERN E-Commerce</Link>
            </div>

            <div>
                <Link to="/cart">Cart
                {cartItems.length > 0 &&(
                  <span className="badge">{cartItems.length}</span>
                )
                }
                </Link>
                <Link to="/signin">signin</Link>
            </div>

        </header>
        


        <main>

          <Route path="/product/:id" component={ProductScreen}/>
          
          <Route path='/' component={HomeScreen} exact/>
          
          <Route path="/cart/:id?" component={cartScreen}/>
        </main>
        
        <footer className="row center">Open Source</footer>
       
    </div>

   </BrowserRouter>

  );
}

export default App;
