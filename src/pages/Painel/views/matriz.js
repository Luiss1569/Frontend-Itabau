import React, { useEffect, useState } from 'react';
import api from '../../../services/api'

import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Carrossel from '../../../components/Carrossel'
import Table from './tables/matriz'
import { Link } from 'react-router-dom'

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const bg = `${window.location.origin}/img/historia_sorvete/bg.jpg`

function PainelMatriz({history}) {
    const [mensagens, setMensagens] = useState([])

    useEffect(() => {
        window.scrollTo(0, 300)
        async function testLogin(){
            const log = await localStorage.getItem('@itabau/login')
            if(!log){
                history.push('/home')
            }
        }  
        testLogin()
        async function getMensagens() {
            const response = await fetch(`${api}/php/matriz/get.php`, {
                method: 'get',
            }).then(function (response) {
                return response.json();
            })
            if (response.data) {
                setMensagens([])
            } else {
                setMensagens(response)
            }


        }
        getMensagens()
    }, [history])

    return (<>

        <Header />
        <Carrossel style={{ backgroundSize: 'cover ' }} images={[bg]} />
        <div className={'margin'} />
        <div className='container container-historia animated' style={{ paddingBottom: 200 }}>
            <div className='content-itens left' data-about>
                <h3 style={{paddingBottom:30}}><Link to='/painel/home' ><ArrowBackIcon /></Link>Mensagens</h3>
            </div>
            <Table data={mensagens}/>
        </div>
        <Footer />
    </>)
}

export default PainelMatriz;