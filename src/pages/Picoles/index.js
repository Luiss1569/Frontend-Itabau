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

import './style.css'

function Picoles() {
    React.useEffect(() => {
        window.scrollTo(0, 0)
        try {
          document.querySelectorAll('.animated div[data-about]')[0].removeAttribute('data-about');
          document.querySelectorAll('.animated div[data-about]')[0].removeAttribute('data-about');
        } catch (error) {
            console.log(error);
        }
      })

    return (<>

        <Header />
        <Carrossel style={{ backgroundSize: 'cover ' }} images={[bg]}><h3>Picolés</h3></Carrossel>
        <div className={'margin'} />

        <div className='container container-historia animated' >
            <div className='content-itens left' prime data-about>
            </div>
            <div className='content-img  galery left' style={{ marginTop: 100 }} data-about>
                <div className='box-img'>
                    <Link to='/picoles/organicos'>
                        <img
                            className='buttonImg'
                            src={p1}
                            alt="..." />
                    </Link>
                </div>
                <div className='box-img'>
                    <Link to='/picoles/acucar'>
                        <img
                            className='buttonImg'
                            src={p2}
                            alt="..." />
                    </Link>
                </div>
                <div className='box-img'>
                    <Link to='/picoles/naturais'>
                        <img
                            className='buttonImg'
                            src={p3}
                            alt="..." />
                    </Link>
                </div>
                <div className='box-img'>
                    <Link to='/picoles/recheados'>
                        <img
                            className='buttonImg'
                            src={p4}
                            alt="..." />
                    </Link>
                </div>
            </div>
        </div>

        <Footer />
    </>)
}

export default Picoles;