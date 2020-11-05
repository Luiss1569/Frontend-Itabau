import React from 'react';

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Carrossel from '../../components/Carrossel'
import Galery from '../../components/Galery'

import bg from '../../assets/img/fotos/bg.jpg'

import './style.css'

function Fotos() {
    window.scrollTo(0, 0)

    // const IMAGES =
    //     [{
    //         src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
    //         thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
    //         thumbnailWidth: 320,
    //         thumbnailHeight: 174,
    //     },
    //     {
    //         src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    //         thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
    //         thumbnailWidth: 320,
    //         thumbnailHeight: 212,
    //     },

    //     {
    //         src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
    //         thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
    //         thumbnailWidth: 320,
    //         thumbnailHeight: 212
    //     }]


    return (<>

        <Header />
        <Carrossel style={{ backgroundSize: 'cover ' }} images={[bg]} />
        <div className={'margin'} />
        <div className='container container-historia animated'>
            <div className='content-itens left' data-about>
                <h3>Galeria de Fotos</h3>
                <Galery images={[]} />
            </div>
        </div>
        <Footer />
    </>)
}

export default Fotos;