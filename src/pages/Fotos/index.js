import React from 'react';

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Carrossel from '../../components/Carrossel'
import Galery from '../../components/Galery'

import bg from '../../assets/img/fotos/bg.jpg'

import f1  from '../../assets/img/fotos/f1.jpg'
import f2  from '../../assets/img/fotos/f2.jpg'
import f3  from '../../assets/img/fotos/f3.jpg'
import f4  from '../../assets/img/fotos/f4.jpg'
import f5  from '../../assets/img/fotos/f5.jpg'
import f6  from '../../assets/img/fotos/f6.jpg'
import f7  from '../../assets/img/fotos/f7.jpg'
import f8  from '../../assets/img/fotos/f8.jpg'
import f8_1  from '../../assets/img/fotos/f8-1.jpg'
import f9  from '../../assets/img/fotos/f9.jpg'
import f10  from '../../assets/img/fotos/f10.jpg'
import f11  from '../../assets/img/fotos/f1.jpg'
import f12  from '../../assets/img/fotos/f12.jpg'
import f13  from '../../assets/img/fotos/f13.jpg'
import f14  from '../../assets/img/fotos/f14.jpg'
import f15  from '../../assets/img/fotos/f15.jpg'
import f16  from '../../assets/img/fotos/f16.jpg'
import f18  from '../../assets/img/fotos/f18.jpg'
import f19  from '../../assets/img/fotos/f19.jpg'
import f20  from '../../assets/img/fotos/f20.jpg'
import f21  from '../../assets/img/fotos/f21.jpg'
import f22  from '../../assets/img/fotos/f22.jpg'
import f23  from '../../assets/img/fotos/f23.jpg'
import f24  from '../../assets/img/fotos/f24.jpg'
import f25  from '../../assets/img/fotos/f25.jpg'
import f26  from '../../assets/img/fotos/f1.jpg'
import f27  from '../../assets/img/fotos/f27.jpg'
import f28  from '../../assets/img/fotos/f28.jpg'
import f29  from '../../assets/img/fotos/f29.jpg'
import f30  from '../../assets/img/fotos/f30.jpg'
import f31  from '../../assets/img/fotos/f31.jpg'
import f32  from '../../assets/img/fotos/f32.jpg'
import f33  from '../../assets/img/fotos/f33.jpg'
import f34  from '../../assets/img/fotos/f34.jpg'
import f35  from '../../assets/img/fotos/f35.jpg'
import f36  from '../../assets/img/fotos/f36.jpg'
import f37  from '../../assets/img/fotos/f37.jpg'
import f38  from '../../assets/img/fotos/f38.jpg'
import f39  from '../../assets/img/fotos/f39.jpg'
import f40  from '../../assets/img/fotos/f40.jpg'
import f41  from '../../assets/img/fotos/f41.jpg'
import f42  from '../../assets/img/fotos/f42.jpg'
import f43  from '../../assets/img/fotos/f43.jpg'
import f44  from '../../assets/img/fotos/f44.jpg'
import f45  from '../../assets/img/fotos/f45.jpg'
import f46  from '../../assets/img/fotos/f46.jpg'
import f48  from '../../assets/img/fotos/f48.jpg'
import f49  from '../../assets/img/fotos/f49.jpg'

import './style.css'

function Fotos() {
    window.scrollTo(0, 0)

    const IMAGES =
        [{
            src: f1,
            thumbnail: f1,
        },
        {
            src: f2,
            thumbnail:f2,
        },
        {
            src: f3,
            thumbnail:f3,
        },
        {
            src: f4,
            thumbnail:f4,
        },
        {
            src: f5,
            thumbnail:f5,
        },
        {
            src: f6,
            thumbnail:f6,
        },
        {
            src: f7,
            thumbnail:f7,
        },
        {
            src: f8,
            thumbnail:f8,
        },
        {
            src: f8_1,
            thumbnail:f8_1,
        },
        {
            src: f9,
            thumbnail:f9,
        },
        {
            src: f10,
            thumbnail:f10,
        },
        {
            src: f11,
            thumbnail:f11,
        },
        {
            src: f12,
            thumbnail:f12,
        },
        {
            src: f13,
            thumbnail:f13,
        },
        {
            src: f14,
            thumbnail:f14,
        },
        {
            src: f15,
            thumbnail:f15,
        },
        {
            src: f16,
            thumbnail:f16,
        },
        {
            src: f18,
            thumbnail:f18,
        },
        {
            src: f19,
            thumbnail:f19,
        },
        {
            src: f20,
            thumbnail:f20,
        },
        {
            src: f21,
            thumbnail:f21,
        },
        {
            src: f22,
            thumbnail:f22,
        },
        {
            src: f23,
            thumbnail:f23,
        },
        {
            src: f24,
            thumbnail:f24,
        },
        {
            src: f25,
            thumbnail:f25,
        },
        {
            src: f26,
            thumbnail:f26,
        },
        {
            src: f27,
            thumbnail:f27,
        },
        {
            src: f28,
            thumbnail:f28,
        },
        {
            src: f29,
            thumbnail:f29,
        },
        {
            src: f30,
            thumbnail:f30,
        },
        {
            src: f31,
            thumbnail:f31,
        },
        {
            src: f32,
            thumbnail:f32,
        },
        {
            src: f33,
            thumbnail:f33,
        },
        {
            src: f34,
            thumbnail:f34,
        },
        {
            src: f35,
            thumbnail:f35,
        },
        {
            src: f36,
            thumbnail:f36,
        },
        {
            src: f37,
            thumbnail:f37,
        },
        {
            src: f38,
            thumbnail:f38,
        },
        {
            src: f39,
            thumbnail:f39,
        },
        {
            src: f40,
            thumbnail:f40,
        },
        {
            src: f41,
            thumbnail:f41,
        },
        {
            src: f42,
            thumbnail:f42,
        },
        {
            src: f43,
            thumbnail:f43,
        },
        {
            src: f44,
            thumbnail:f44,
        },
        {
            src: f45,
            thumbnail:f45,
        },
        {
            src: f46,
            thumbnail:f46,
        },
        {
            src: f48,
            thumbnail:f48,
        },
        {
            src: f49,
            thumbnail:f49,
            
        }]


    return (<>

        <Header />
        <Carrossel style={{ backgroundSize: 'cover ' }} images={[bg]} />
        <div className={'margin'} />
        <div className='container container-historia animated'>
            <div className='content-itens left' data-about>
                <h3>Galeria de Fotos</h3>
                <div style={{width:'80%', height: 50}}/>
                <Galery images={IMAGES} />
            </div>
        </div>
        <Footer />
    </>)
}

export default Fotos;