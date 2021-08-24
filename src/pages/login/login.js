import React, { useState } from 'react';
import LoginImage from './../../assets/images/loginImage.svg';

import './styles/login.scss'

const Login = () => {
    const [isSubtmited, setIsSubmited] = useState(false);

    const goToNextPage = () => {
        setIsSubmited((true))
    }

    return (
        <div className='tela-login'>
            <img src={LoginImage} className='img-login' alt="imagem login" />
            <div className={isSubtmited ? "card-hide card" : "card"}>
                <div className="form">
                    <div className="input-block">
                        <label>E-mail</label>
                        <input type="email" className="login-email" />
                    </div>
                    <div className="input-block">
                        <label>Senha</label>
                        <input type="password" className="login-password" />
                    </div>
                    <button onClick={() => goToNextPage()} className="btn-login">Login</button>
                </div>
            </div>
        </div>
    )

}

export default Login;