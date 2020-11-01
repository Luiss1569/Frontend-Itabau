import React from 'react';

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Carrossel from '../../components/Carrossel'

import bg from '../../assets/img/massa/bg.jpg'

import './style.css'

function MassaPremium() {
    window.scrollTo(0, 0)

    return (<>

        <Header />
        <Carrossel style={{ backgroundSize: 'cover ' }} images={[bg]} />
        <div className={'margin'} />
        <div className='container container-historia animated'>
            <div className='content-itens left'data-about>
                <h3>Massa Premium</h3>
                
            </div>
           
        </div>
        <Footer />
    </>)
}

export default MassaPremium;