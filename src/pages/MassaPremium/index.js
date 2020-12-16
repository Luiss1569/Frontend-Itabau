import React from 'react';

import {Link} from 'react-router-dom'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Carrossel from '../../components/Carrossel'

import bg from '../../assets/img/massa/bg.jpg'
import logo from '../../assets/img/logo-itabau-massa.png'

import p1 from '../../assets/img/massa/p1.jpg'
import p2 from '../../assets/img/massa/p2.jpg'
import p3 from '../../assets/img/massa/p3.jpg'
import p4 from '../../assets/img/massa/p4.jpg'
import p5 from '../../assets/img/massa/p5.jpg'

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
        <Carrossel style={{ backgroundSize: 'cover ' }} images={[bg]}><h3>Massa Premium <img src={logo} alt="logo" style={{width: 100, position: 'absolute', bottom: 0, right: -120}}/></h3></Carrossel>
        <div className={'margin'} />

        <div className='container container-historia animated' >
            <div className='content-itens left' prime data-about>
            </div>
            <div className='content-img  galery-massa left' style={{ marginTop: 100 }} data-about>
                <div className='box-img'>
                    <Link to='/massa/all'>
                        <img
                            className='buttonImg'
                            src={p1}
                            alt="..." />
                    </Link>
                </div>
                <div className='box-img'>
                    <Link to='/massa/tradicionais'>
                        <img
                            className='buttonImg'
                            src={p2}
                            alt="..." />
                    </Link>
                </div>
                <div className='box-img'>
                    <Link to='/massa/vegano'>
                        <img
                            className='buttonImg'
                            src={p3}
                            alt="..." />
                    </Link>
                </div>
                <div className='box-img'>
                    <Link to='/massa/acucar'>
                        <img
                            className='buttonImg'
                            src={p4}
                            alt="..." />
                    </Link>
                </div>
                 <div className='box-img'>
                    <Link to='/massa/acai'>
                        <img
                            className='buttonImg'
                            src={p5}
                            alt="..." />
                    </Link>
                </div>
            </div>
        </div>

        <Footer />
    </>)
}

export default Picoles;