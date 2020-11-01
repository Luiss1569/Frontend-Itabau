import React from 'react';

import {Link} from 'react-router-dom'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Carrossel from '../../components/Carrossel'

import bg from '../../assets/img/lancamentos/bg.jpg'

import p1 from '../../assets/img/picoles/p1.jpg'
import p2 from '../../assets/img/picoles/p2.jpg'
import p3 from '../../assets/img/picoles/p3.jpg'
import p4 from '../../assets/img/picoles/p4.jpg'
import catalogo from '../../assets/img/picoles/lista-completa-sabores.pdf'

import Lottie from 'react-lottie';

import animationPrint from '../../assets/animations/printer.json'

import './style.css'

function Picoles() {
    window.scrollTo(0, 0)

    return (<>

        <Header />
        <Carrossel style={{ backgroundSize: 'cover ' }} images={[bg]} />
        <div className={'margin'} />

        <div className='container container-historia animated' >
            <div className='content-itens left' data-about>
                <h3>Picolés</h3>
            </div>
            <div className='content-img  galery left' style={{ marginTop: 50 }} data-about>
                <div className='box-img'>
                    <Link to=''>
                        <img
                            className='buttonImg'
                            src={p1}
                            alt="..." />
                    </Link>
                </div>
                <div className='box-img'>
                    <Link to=''>
                        <img
                            className='buttonImg'
                            src={p2}
                            alt="..." />
                    </Link>
                </div>
                <div className='box-img'>
                    <Link to=''>
                        <img
                            className='buttonImg'
                            src={p3}
                            alt="..." />
                    </Link>
                </div>
                <div className='box-img'>
                    <Link to=''>
                        <img
                            className='buttonImg'
                            src={p4}
                            alt="..." />
                    </Link>
                </div>
            </div>
        </div>

        <div className='container container-historia animated' >
            <div className='content-itens left' data-about>
                <a href={catalogo} target='_blank' rel="noreferrer">
                    <Lottie options={{
                        loop: true,
                        autoplay: true,
                        animationData: animationPrint,
                        rendererSettings: {
                            preserveAspectRatio: 'xMidYMid slice'
                        }
                    }}
                        height={100}
                        width={100} />
                    <p style={{ textAlign: 'center' }}>Clique aqui para baixar e imprimir a ista completa de sabores!</p>
                </a>
            </div>
        </div>
        <Footer />
    </>)
}

export default Picoles;