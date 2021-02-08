import './App.css';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
import cartScreen from './Screens/CartScreen';
import { useSelector, useDispatch } from 'react-redux';
import SigninScreen from './Screens/SigninScreen';
import { signOut } from './Actions/userActions';
import RegisterScreen from './Screens/RegisterScreen';

function App() {

  const cart = useSelector( state => state.cart);
  const { cartItems } = cart;
  const userSignedin=  useSelector((state)=> state.userSignin);
  const {userInfo} = userSignedin;
  const dispatch = useDispatch();
  const signOutHandler = () =>{
      dispatch(signOut());
  }
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
                {
                  userInfo ? 
                  (
                    <div className="dropdown">
                        <Link to="#">{userInfo.name} <i className="fa fa-caret-down"></i></Link>
                        <ul className="dropdown-content">
                          <Link to="#signout" onClick={()=>signOutHandler()}>Signout</Link>
                        </ul>
                    </div>
                  ): (<Link to="/signin">signin</Link>)
                }
            </div>

        </header>
        


        <main>

          <Route path="/product/:id" component={ProductScreen}/>
          
          <Route path='/' component={HomeScreen} exact/>
          
          <Route path="/register" component={RegisterScreen}/>

          <Route path="/signin" component={SigninScreen}/>

          <Route path="/cart/:id?" component={cartScreen}/>

        </main>
        
        <footer className="row center">Open Source</footer>
       
    </div>

   </BrowserRouter>

  );
}

export default App;
