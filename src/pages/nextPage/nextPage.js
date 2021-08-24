import React from 'react';
import { useHistory } from 'react-router';
import LoginImage from './../../assets/images/loginImage.svg';

import './styles/nextPage.scss'

const NextPage = () => {
    const history = useHistory();

    const backToPage = () => {
        history.push('/')
    }

    return (
        <div className='tela-nextPage'>
            <div className="card">
                <div className="btn-voltar">
                    <button onClick={() => backToPage()} className="btn-login">Voltar</button>
                </div>
            </div>
        </div>
    )

}

export default NextPage;