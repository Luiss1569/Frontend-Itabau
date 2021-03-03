import React from 'react';

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Carrossel from '../../components/Carrossel'
import Galery from '../../components/Galery'
import './style.css'

const bg  = `${window.location.origin}/img/fotos/bg.jpg`

const f1  = `${window.location.origin}/img/fotos/f1.jpg`
const f2  = `${window.location.origin}/img/fotos/f2.jpg`
const f3  = `${window.location.origin}/img/fotos/f3.jpg`
const f4  = `${window.location.origin}/img/fotos/f4.jpg`
const f5  = `${window.location.origin}/img/fotos/f5.jpg`
const f6  = `${window.location.origin}/img/fotos/f6.jpg`
const f7  = `${window.location.origin}/img/fotos/f7.jpg`
const f8  = `${window.location.origin}/img/fotos/f8.jpg`
const f9  = `${window.location.origin}/img/fotos/f9.jpg`
const f10 =  `${window.location.origin}/img/fotos/f10.jpg`
const f11 =  `${window.location.origin}/img/fotos/f1.jpg`
const f12 =  `${window.location.origin}/img/fotos/f12.jpg`
const f13 =  `${window.location.origin}/img/fotos/f13.jpg`
const f14 =  `${window.location.origin}/img/fotos/f14.jpg`
const f15 =  `${window.location.origin}/img/fotos/f15.jpg`
const f18 =  `${window.location.origin}/img/fotos/f18.jpg`
const f19 =  `${window.location.origin}/img/fotos/f19.jpg`
const f20 =  `${window.location.origin}/img/fotos/f20.jpg`
const f21 =  `${window.location.origin}/img/fotos/f21.jpg`
const f22 =  `${window.location.origin}/img/fotos/f22.jpg`
const f23 =  `${window.location.origin}/img/fotos/f23.jpg`
const f24 =  `${window.location.origin}/img/fotos/f24.jpg`
const f25 =  `${window.location.origin}/img/fotos/f25.jpg`
const f26 =  `${window.location.origin}/img/fotos/f1.jpg`
const f27 =  `${window.location.origin}/img/fotos/f27.jpg`
const f28 =  `${window.location.origin}/img/fotos/f28.jpg`
const f29 =  `${window.location.origin}/img/fotos/f29.jpg`
const f30 =  `${window.location.origin}/img/fotos/f30.jpg`
const f31 =  `${window.location.origin}/img/fotos/f31.jpg`
const f32 =  `${window.location.origin}/img/fotos/f32.jpg`
const f33 =  `${window.location.origin}/img/fotos/f33.jpg`
const f34 =  `${window.location.origin}/img/fotos/f34.jpg`
const f35 =  `${window.location.origin}/img/fotos/f35.jpg`
const f36 =  `${window.location.origin}/img/fotos/f36.jpg`
const f37 =  `${window.location.origin}/img/fotos/f37.jpg`
const f38 =  `${window.location.origin}/img/fotos/f38.jpg`
const f39 =  `${window.location.origin}/img/fotos/f39.jpg`
const f40 =  `${window.location.origin}/img/fotos/f40.jpg`
const f41 =  `${window.location.origin}/img/fotos/f41.jpg`
const f42 =  `${window.location.origin}/img/fotos/f42.jpg`
const f43 =  `${window.location.origin}/img/fotos/f43.jpg`
const f44 =  `${window.location.origin}/img/fotos/f44.jpg`
const f49 =  `${window.location.origin}/img/fotos/f49.jpg`
const f50 =  `${window.location.origin}/img/fotos/f50.jpg`
const f51 =  `${window.location.origin}/img/fotos/f51.jpg`
const f52 =  `${window.location.origin}/img/fotos/f52.jpg`
const f53 =  `${window.location.origin}/img/fotos/f53.jpg`

const p1  = `${window.location.origin}/img/fotos/p1.jpg`
const p2  = `${window.location.origin}/img/fotos/p2.jpg`
const p3  = `${window.location.origin}/img/fotos/p3.jpg`
const p4  = `${window.location.origin}/img/fotos/p4.jpg`
const p5  = `${window.location.origin}/img/fotos/p5.jpg`
const p6  = `${window.location.origin}/img/fotos/p6.jpg`
const p7  = `${window.location.origin}/img/fotos/p7.jpg`
const p8  = `${window.location.origin}/img/fotos/p8.jpg`
const p9  = `${window.location.origin}/img/fotos/p9.jpg`
const p10 =  `${window.location.origin}/img/fotos/p10.jpg`
const p11 =  `${window.location.origin}/img/fotos/p11.jpg`
const p12 =  `${window.location.origin}/img/fotos/p12.jpg`
const p13 =  `${window.location.origin}/img/fotos/p13.jpg`
const p14 =  `${window.location.origin}/img/fotos/p14.jpg`
const p15 =  `${window.location.origin}/img/fotos/p15.jpg`
const p16 =  `${window.location.origin}/img/fotos/p16.jpg`
const p17 =  `${window.location.origin}/img/fotos/p17.jpg`
const p18 =  `${window.location.origin}/img/fotos/p18.jpg`
const p19 =  `${window.location.origin}/img/fotos/p19.jpg`
const p20 =  `${window.location.origin}/img/fotos/p20.jpg`
const p22 =  `${window.location.origin}/img/fotos/p22.jpg`
const p23 =  `${window.location.origin}/img/fotos/p23.jpg`
const p24 =  `${window.location.origin}/img/fotos/p24.jpg`
const p25 =  `${window.location.origin}/img/fotos/p25.jpg`
const p26 =  `${window.location.origin}/img/fotos/p26.jpg`
const p27 =  `${window.location.origin}/img/fotos/p27.jpg`
const p28 =  `${window.location.origin}/img/fotos/p28.jpg`
const p29 =  `${window.location.origin}/img/fotos/p29.jpg`
const p30 =  `${window.location.origin}/img/fotos/p30.jpg`
const p31 =  `${window.location.origin}/img/fotos/p31.jpg`
const p32 =  `${window.location.origin}/img/fotos/p32.jpg`
const p33 =  `${window.location.origin}/img/fotos/p33.jpg`
const p34 =  `${window.location.origin}/img/fotos/p34.jpg`
const p35 =  `${window.location.origin}/img/fotos/p1.jpg`
const p36 =  `${window.location.origin}/img/fotos/p36.jpg`
const p37 =  `${window.location.origin}/img/fotos/p37.jpg`
const p38 =  `${window.location.origin}/img/fotos/p38.jpg`
const p39 =  `${window.location.origin}/img/fotos/p39.jpg`

function Fotos() {
    window.scrollTo(0, 0)

    const FAMILIA =
        [{
            src: f1,
            thumbnail: f1,
        },
        {
            src: f2,
            thumbnail: f2,
        },
        {
            src: f3,
            thumbnail: f3,
        },
        {
            src: f4,
            thumbnail: f4,
        },
        {
            src: f5,
            thumbnail: f5,
        },
        {
            src: f6,
            thumbnail: f6,
        },
        {
            src: f7,
            thumbnail: f7,
        },
        {
            src: f8,
            thumbnail: f8,
        },
        {
            src: f9,
            thumbnail: f9,
        },
        {
            src: f10,
            thumbnail: f10,
        },
        {
            src: f11,
            thumbnail: f11,
        },
        {
            src: f12,
            thumbnail: f12,
        },
        {
            src: f13,
            thumbnail: f13,
        },
        {
            src: f14,
            thumbnail: f14,
        },
        {
            src: f15,
            thumbnail: f15,
        },
        {
            src: f18,
            thumbnail: f18,
        },
        {
            src: f19,
            thumbnail: f19,
        },
        {
            src: f20,
            thumbnail: f20,
        },
        {
            src: f21,
            thumbnail: f21,
        },
        {
            src: f22,
            thumbnail: f22,
        },
        {
            src: f23,
            thumbnail: f23,
        },
        {
            src: f24,
            thumbnail: f24,
        },
        {
            src: f25,
            thumbnail: f25,
        },
        {
            src: f26,
            thumbnail: f26,
        },
        {
            src: f27,
            thumbnail: f27,
        },
        {
            src: f28,
            thumbnail: f28,
        },
        {
            src: f29,
            thumbnail: f29,
        },
        {
            src: f30,
            thumbnail: f30,
        },
        {
            src: f31,
            thumbnail: f31,
        },
        {
            src: f32,
            thumbnail: f32,
        },
        {
            src: f33,
            thumbnail: f33,
        },
        {
            src: f34,
            thumbnail: f34,
        },
        {
            src: f35,
            thumbnail: f35,
        },
        {
            src: f36,
            thumbnail: f36,
        },
        {
            src: f37,
            thumbnail: f37,
        },
        {
            src: f38,
            thumbnail: f38,
        },
        {
            src: f39,
            thumbnail: f39,
        },
        {
            src: f40,
            thumbnail: f40,
        },
        {
            src: f41,
            thumbnail: f41,
        },
        {
            src: f42,
            thumbnail: f42,
        },
        {
            src: f43,
            thumbnail: f43,
        },
        {
            src: f44,
            thumbnail: f44,
        },
        {
            src: f49,
            thumbnail: f49,

        },
     {
            src: f50,
            thumbnail: f50,
        },
        {
            src: f51,
            thumbnail: f51,
        },
        {
            src: f53,
            thumbnail: f53,
        },
        {
            src: f52,
            thumbnail: f52,
        }]

    const PRODUCAO =  [
        {
            src: p1,
            thumbnail: p1,
        },
        {
            src: p2,
            thumbnail: p2,
        },
        {
            src: p3,
            thumbnail: p3,
        },
        {
            src: p4,
            thumbnail: p4,
        },
        {
            src: p5,
            thumbnail: p5,
        },
        {
            src: p6,
            thumbnail: p6,
        },
        {
            src: p7,
            thumbnail: p7,
        },
        {
            src: p8,
            thumbnail: p8,
        },
        {
            src: p9,
            thumbnail: p9,
        },
        {
            src: p10,
            thumbnail: p10,
        },
        {
            src: p11,
            thumbnail: p11,
        },
        {
            src: p12,
            thumbnail: p12,
        },
        {
            src: p13,
            thumbnail: p13,
        },
        {
            src: p14,
            thumbnail: p14,
        },
        {
            src: p15,
            thumbnail: p15,
        },
        {
            src: p16,
            thumbnail: p16,
        },
        {
            src: p17,
            thumbnail: p17,
        },
        {
            src: p18,
            thumbnail: p18,
        },
        {
            src: p19,
            thumbnail: p19,
        },
        {
            src: p20,
            thumbnail: p20,
        },
        {
            src: p22,
            thumbnail: p22,
        },
        {
            src: p23,
            thumbnail: p23,
        },
        {
            src: p24,
            thumbnail: p24,
        },
        {
            src: p25,
            thumbnail: p25,
        },
        {
            src: p26,
            thumbnail: p26,
        },
        {
            src: p27,
            thumbnail: p27,
        },
        {
            src: p28,
            thumbnail: p28,
        },
        {
            src: p29,
            thumbnail: p29,
        },
        {
            src: p30,
            thumbnail: p30,
        },
        {
            src: p31,
            thumbnail: p31,
        },
        {
            src: p32,
            thumbnail: p32,
        },
        {
            src: p33,
            thumbnail: p33,
        },
        {
            src: p34,
            thumbnail: p34,
        },
        {
            src: p35,
            thumbnail: p35,
        },
        {
            src: p36,
            thumbnail: p36,
        },
        {
            src: p37,
            thumbnail: p37,
        },
        {
            src: p38,
            thumbnail: p38,
        },
        {
            src: p39,
            thumbnail: p39,
        }
    ]   

    return (<>

        <Header />
        <Carrossel style={{ backgroundSize: 'cover ' }} images={[bg]}> <h3>Galeria de Fotos</h3></Carrossel>
        <div className={'margin'} />
        <div className='container container-historia animated'>
            <div className='content-itens left' data-about>
                <h3>Família</h3>
                <div style={{ width: '80%', height: 50 }} />
                <Galery images={FAMILIA} />
            </div>
        </div>
         <div className='container container-historia animated'>
            <div className='content-itens left' data-about>
                <h3>Produção</h3>
                <div style={{ width: '80%', height: 50 }} />
                <Galery images={PRODUCAO} />
            </div>
        </div>
        <Footer />
    </>)
}

export default Fotos;