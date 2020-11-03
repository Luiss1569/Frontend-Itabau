import React, { useState, useEffect, useMemo } from 'react';

import Skeleton from '@material-ui/lab/Skeleton';

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Carrossel from '../../components/Carrossel'
import PlacesAutoComplete from '../../components/PlacesAutoComplete'

import Lottie from 'react-lottie';

import animationLocation from '../../assets/animations/location-finding.json'
import animationIconLocation from '../../assets/animations/iconLocation.json'

import bg from '../../assets/img/encontrar/bg.jpg'

import './style.css'
import { PinDropSharp } from '@material-ui/icons';

function Lançamento() {

    const cont = [0, 1, 2, 3, 4]

    const [location, setLocation] = useState('')
    const [locations, setLocations] = useState([])
    const [loading, setLoading] = useState(false)

    useMemo(() => {
        if (!location) {
            return 0
        }

        async function loadLocations() {
            setLoading(true)
            setTimeout(() => {
                document.querySelector('#loading').removeAttribute('data-about')
            }, 1000);
            setTimeout(() => {
                setLoading(false)
                setLocations(cont)
            }, 3000)
        }
        loadLocations()
    }, [location])

    const render = () => {

        if (location && loading) {
            return (
                cont.map(() => (
                    <div id='loading' data-about='true'>
                        <Skeleton width={300} height={50} />
                        <Skeleton width={300} height={200} style={{ marginTop: -50 }} />
                        <Skeleton width={300} height={150} style={{ marginTop: -60 }} />
                    </div>
                ))
            )
        }

        if (locations.length > 0) {
            return (
                cont.map(() => (
                    <div className='box-location'>
                        <div className='header'>
                            <PinDropSharp style={{ color: '#fff', marginRight: 5 }} />
                            <h4>São Bento do Sapucai-SP</h4>
                        </div>
                        <div className='body'>
                            <div className='content'>
                                <a href=''>
                                    <Lottie options={{
                                        loop: true,
                                        autoplay: true,
                                        animationData: animationIconLocation,
                                        rendererSettings: {
                                            preserveAspectRatio: 'xMidYMid slice'
                                        }
                                    }}
                                        height={100}
                                        width={100} />
                                </a>
                            </div>
                            <h4>Rua: São José</h4>
                            <h4>Nº 188 - Centro</h4>
                            <h4>Tel. (35)3651-2450</h4>
                        </div>
                    </div>
                ))
            )
        }

        if (location && locations.length === 0) {
            <div>
                <h3>Infelizmente não encontramos lojas perto!</h3>
            </div>
        }

    }

    return (<>

        <Header />
        <Carrossel style={{ backgroundSize: 'cover ' }} images={[bg]} />
        <div className={'margin'} />

        <div className='container container-historia animated'>
            <div className='content-itens left'>
                <h3>Onde Encontrar?</h3>
            </div>
        </div>

        <div className='container container-location animated'>

            <div className='content-img right' data-about style={{ marginTop: -80, paddingTop: 0 }}>
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

            <div className='content-itens left' data-about style={{ marginTop: 35, margin: 'auto' }}>
                <PlacesAutoComplete setLocation={setLocation} />
            </div>
        </div>

        <div className='container container-location animated'>
            <div className='content-location  galery right'>
                {render()}
            </div>
        </div>

        <Footer />
    </>)
}

export default Lançamento;