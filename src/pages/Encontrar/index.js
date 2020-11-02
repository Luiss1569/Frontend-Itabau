import React, { useState, useEffect, useMemo } from 'react';

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Carrossel from '../../components/Carrossel'
import PlacesAutoComplete from '../../components/PlacesAutoComplete'

import Lottie from 'react-lottie';

import animationLocation from '../../assets/animations/location-finding.json'

import bg from '../../assets/img/encontrar/bg.jpg'
import l1 from '../../assets/img/lancamentos/l1.jpg'

import './style.css'

function Lançamento() {
    window.scrollTo(0, 0)

    const [location, setLocation] = useState('')

    useMemo(() => {
        console.log(location);
    }, [location])

    return (<>

        <Header />
        <Carrossel style={{ backgroundSize: 'cover ' }} images={[bg]} />
        <div className={'margin'} />

        <div className='container container-historia animated'>
            <div className='content-itens left' data-about>
                <h3>Onde Encontrar?</h3>
            </div>
        </div>

        <div className='container container-location animated'>

            <div className='content-img right' data-about style={{ marginTop: -80, paddingTop:0 }}>
                <Lottie options={{
                    loop: true,
                    autoplay: true,
                    animationData: animationLocation,
                    rendererSettings: {
                        preserveAspectRatio: 'xMidYMid slice'
                    }
                }}
                    height={200}
                    width={200} />
            </div>

            <div className='content-itens left' data-about style={{marginTop: 35, margin: 'auto'}}>
                <PlacesAutoComplete setLocation={setLocation} />
            </div>
        </div>
        <Footer />
    </>)
}

export default Lançamento;