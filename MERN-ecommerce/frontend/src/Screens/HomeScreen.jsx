import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Product from '../Components/Product';
import LoadingBox from '../Components/LoadingBox';
import MessageBox from '../Components/MessageBox';

const HomeScreen = () =>
{
    const [products, setProducts] = useState([]);

    const [Loading, setLoading] = useState(false);

    const [Error, setError] = useState(false);

    useEffect(

        ()=>{

            const fetchData = async () =>{

               try{
                    setLoading( true );

                    const { data } = await axios.get('/api/products/');

                    setLoading( false );

                    setProducts( data );

               } catch(err){

                   setError(err.message);

                   setLoading(false);

               }

            }

            fetchData();

        }

    , []);



        
   return(
    <div>
        {/* Iterates Products and Renders it */}    
            {
                Loading ? ( <LoadingBox/> )
                :
                Error ? ( <MessageBox variant='danger'>{Error}</MessageBox> )
                :
                (<div className="row center">
                    { products.map(
                     (product) =>(
                        <Product key={ product._id } product=  { product }/>
                    )
                    )}
                </div>)
                
            }         

    </div>
   )
}

export default HomeScreen;