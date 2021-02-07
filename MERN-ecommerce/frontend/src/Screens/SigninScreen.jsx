import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom'
import { signIn } from '../Actions/userActions';
import LoadingBox from '../Components/LoadingBox';
import MessageBox from '../Components/MessageBox';

const SigninScreen = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    

    const redirect = props.location.search 
        ? props.location.search.split('=')[1] :'/';

    const userSignedin = useSelector((state)=> state.userSignin);
    const { userInfo, loading, error } = userSignedin;

    const dispatch = useDispatch();
    const submitHandler = (event) => {
        event.preventDefault();
        dispatch(signIn(email, password));
    }
    useEffect(()=>{
        if(userInfo){
            props.history.push(redirect);
        }
    }, [props.history, redirect, userInfo]);

return (
<div>
    <form className="form" onSubmit={submitHandler}>
        <div>
            <h1>Sign In</h1>
        </div>
        {loading && <LoadingBox/> }
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        <div>
            <label htmlFor="email">Email Adress</label>
            <input type="email" name="email" required onChange={(e)=> setEmail(e.target.value) }/>
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" required onChange={(e)=> setPassword(e.target.value) }/>
        </div>
        <div>
            <label/>
            <button className="primary" type="submit">Sign in</button>
        </div>
        <div>
            <label/>
            <div>
                New customer? <Link to="/register">Create your account</Link>
            </div>
        </div>
    </form>
</div>
)
}

export default SigninScreen