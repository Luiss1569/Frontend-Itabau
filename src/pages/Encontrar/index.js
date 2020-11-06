import React, { useState, useMemo } from 'react';

import Skeleton from '@material-ui/lab/Skeleton';

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Carrossel from '../../components/Carrossel'
import Location from '../../components/Location'
import PlacesAutoComplete from '../../components/PlacesAutoComplete'

import Lottie from 'react-lottie';

import animationLocation from '../../assets/animations/location-finding.json'

import bg from '../../assets/img/encontrar/bg.jpg'

import './style.css'

function Lançamento() {
    const cont = [0, 1, 2]
    const [location, setLocation] = useState('')
    const [locations, setLocations] = useState([])
    const [loading, setLoading] = useState(false)

    React.useEffect(()=>{
        window.scrollTo(0, 0)
    },[])

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
        // eslint-disable-next-line
    }, [location])

    const render = () => {

        if (!location && locations.length === 0) {
            return (
                <div style={{ width: '80%', height: 300 }} />
            )
        }

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
                    <Location locations={[{
                        nome: 'Salgadao',
                        cidade: 'São Bento do Sapucaí-SP',
                        lat: '-45.7249803',
                        long: '-22.6858218',
                        rua: 'asdasdasd asdad',
                        bairro: 'asdads asdasd',
                        tel: '1299793443'
                    },{
                        nome: 'Salgadao',
                        cidade: 'São Bento do Sapucaí-SP',
                        lat: '-45.7249803',
                        long: '-22.6858218',
                        rua: 'asdasdasd asdad',
                        bairro: 'asdads asdasd',
                        tel: '1299793443'
                    },{
                        nome: 'Salgadao',
                        cidade: 'São Bento do Sapucaí-SP',
                        lat: '-45.7249803',
                        long: '-22.6858218',
                        rua: 'asdasdasd asdad',
                        bairro: 'asdads asdasd',
                        tel: '1299793443'
                    }]}/>
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
            <div className='content-location  galery right' >
                {render()}
            </div>
        </div>

        <Footer />
    </>)
}

export default Lançamento;