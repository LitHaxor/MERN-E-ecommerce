import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';

function App() {
  return (
   <BrowserRouter>
   
    <div className="grid-container">

        <header className="row">

            <div >
                <a href="/" className="brand">MERN E-Commerce</a>
            </div>

            <div>
                <a href="/cart">Cart</a>
                <a href="/signin">signin</a>
            </div>

        </header>
        


        <main>

          <Route path="/product/:id" component={ProductScreen}/>
          
          <Route path='/' component={HomeScreen} exact/>
          

        </main>
        
        <footer className="row center">Open Source</footer>
       
    </div>

   </BrowserRouter>

  );
}

export default App;
