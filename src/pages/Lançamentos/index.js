import React from 'react';

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Carrossel from '../../components/Carrossel'

import bg from '../../assets/img/lancamentos/bg.jpg'
import l1 from '../../assets/img/lancamentos/l1.jpg'

import './style.css'

function Lançamento() {
    window.scrollTo(0, 0)

    return (<>

        <Header />
        <Carrossel style={{ backgroundSize: 'cover ' }} images={[bg]} />
        <div className={'margin'} />
        <div className='container container-historia animated'>
            <div className='content-itens left'data-about>
                <h3>Lançamentos</h3>
                <p>Os últimos lançamentos da linha de picolés naturais sem adição de açúcar da Itabaú são:</p>
                <p style={{ marginTop: -20 }}>
                    <ul>
                        <li>Mousse de Maracujá;</li>
                        <li>Mousse de Morango.</li>
                    </ul>
                </p>
            </div>
            <div className='content-img right' data-about style={{ marginTop: 0}}>
                <img src={l1} alt='img' />
            </div>
        </div>
        <Footer />
    </>)
}

export default Lançamento;