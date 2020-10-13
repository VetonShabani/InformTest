import React, { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import './sign-in.style.scss';

const SignIn = ({handleSignIn}) => {
    const [userLogin, setUserLogin] = useState({email: '', password: ''});
    const [handleAnimation, setHandleAnimation] = useState(true)
    const handleChange = (e) => { 
        const {name, value} = e.target;
        setUserLogin({
            ...userLogin, [name] : value,
        })
    }
    const handleClose = () => {
        setHandleAnimation(false)
        setTimeout(() => {
            setHandleAnimation(true)
            return handleSignIn()
        },400)
    }
    return (
        <div className='sign-in'>
            <div className={`${handleAnimation ? 'modal-slide-in' : 'modal-slide-out'} sign-in-wrapper`}>
                <div className="sign-in-inner">
                    <i className="fas fa-times close-btn fa-3x" onClick={handleClose}></i>
                    <p>PLEASE SIGN IN</p>
                    <FormInput 
                    label={'EMAIL:'}
                    type={'email'}
                    name={'email'}
                    value={userLogin.email}
                    handleChange={handleChange}
                    required
                    />
                    <FormInput 
                    label={'PASSWORD:'}
                    type={'password'}
                    name={'password'}
                    value={userLogin.password}
                    handleChange={handleChange}
                    required
                    />
                    
                    <div className='button-wrapper'>
                        <button className='sign-in-btn'>SIGN IN</button>
                        <button className='sign-in-google'>SIGN IN WITH GOOGLE</button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default SignIn;