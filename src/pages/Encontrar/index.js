import React, { useState, useMemo } from 'react';
import api from '../../services/api'

import Skeleton from '@material-ui/lab/Skeleton';

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Carrossel from '../../components/Carrossel'
import Location from '../../components/Location'
import PlacesAutoComplete from '../../components/PlacesAutoComplete'

import Lottie from 'react-lottie';

import animationLocation from '../../assets/animations/location-finding.json'
import './style.css'

const bg = `${window.location.origin}/img/encontrar/bg.jpg`


function Lançamento() {
    const cont = [0, 1, 2]
    const [location, setLocation] = useState('')
    const [locations, setLocations] = useState([])
    const [lat, setLat] = useState(null);
    const [long, setLong] = useState(null);
    const [loading, setLoading] = useState(false)

    React.useEffect(() => {
        window.scrollTo(0, 0)
        try {
            document.querySelectorAll('.animated div[data-about]')[0].removeAttribute('data-about');
            document.querySelectorAll('.animated div[data-about]')[0].removeAttribute('data-about');
        } catch (error) {
            console.log(error);
        }
    }, [])

    React.useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                function (position) {
                    setLat(position.coords.latitude);
                    setLong(position.coords.longitude);
                },
                function (error) {
                    console.log(error);
                },
                { enableHighAccuracy: true }
            );
        }
    }, []);

    useMemo(() => {
        console.log(lat, long);
        async function getLocations() {
            if (lat & long) {
                const response = await fetch(
                    `${api}/php/cliente/get.php?lat=${lat}&long=${long}&limit=40`,
                    {
                        method: "get",
                    }
                ).then(function (response) {
                    return response.json();
                });
                if (response.data) {
                    setLocations([]);
                } else {
                    setLocations(response);
                }
            }
        }
        getLocations();
        // eslint-disable-next-line
    }, [long]);


    useMemo(() => {
        if (!location) {
            return 0
        }

        async function loadLocations() {
            setLoading(true)
            const data = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDNsh5nO2nantURwxD1Amcg6G4Ldgqv7ug&address=${location}`, {
                method: 'get',
            }).then(function (response) {
                return response.json();
            })
            if (data.status !== "OK") {
                setLocations([])
                return
            }
            const lat = data.results[0].geometry.location.lat
            const long = data.results[0].geometry.location.lng
            console.log(lat, long);
            if (lat & long) {
                const response = await fetch(`${api}/php/cliente/get.php?lat=${lat}&long=${long}&limit=50`, {
                    method: 'get',
                }).then(function (response) {
                    return response.json();
                }).catch(function (error) {
                    console.log('There has been a problem with your fetch operation: ' + error.message);
                    return { data: true }
                });
                if (response.data) {
                    setLocations([])
                } else {
                    setLocations(response)
                }
                setLoading(false)
                console.log(response);
            }
        }
        loadLocations()
        // eslint-disable-next-line
    }, [location])

    const render = () => {

        if (location === '' && locations.length === 0) {
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

        if (locations) {
            return (
                <Location locations={locations} />
            )
        }

    }

    return (<>

        <Header />
        <Carrossel style={{ backgroundSize: 'cover ' }} images={[bg]}><h3>Onde Encontrar?</h3></Carrossel>
        <div className={'margin'} />

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

        <div className='container  container-location animated' style={{ marginTop: 0, marginBottom: 20, paddingBottom: 10 }}>
            <div className='content-location  galery right' >
                {render()}
            </div>
        </div>

        <Footer />
    </>)
}

export default Lançamento;