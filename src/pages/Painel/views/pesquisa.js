import React, { useEffect, useState } from 'react';
import api from '../../../services/api'

import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Carrossel from '../../../components/Carrossel'
import Table from './tables/pesquisa'
import { Link } from 'react-router-dom'

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import bg from '../../../assets/img/massa/bg.jpg'

function PainelPesquisa({history}) {
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
            const response = await fetch(`${api}/php/pesquisa/get.php`, {
                method: 'get',
            }).then(function (response) {
                return response.json();
            })
            if (response.data) {
                setMensagens([])
            } else {
                setMensagens(response)
                console.log(response);
            }
            console.log(response);

        }
        getMensagens()
    }, [history])

    return (<>

        <Header />
        <Carrossel style={{ backgroundSize: 'cover ' }} images={[bg]} />
        <div className={'margin'} />
        <div className='container container-historia animated' style={{ paddingBottom: 200 }}>
            <div className='content-itens left' data-about>
                <h3><Link to='/painel/home' ><ArrowBackIcon /></Link>Opinião</h3>
                <p>Legenda</p>
                <p style={{ marginTop: -20 }}>
                    <ul>
                        <li>O que você acha dos produtos Itabaú e suas variedades? (O1)</li>
                        <li>Se você pudesse melhorar algo em nosso produtos, o que melhoraria? (O2)</li>
                        <li>Qual o sabor que falta de picolé e sorvete de massa em nossa linha, que você acha interessante termos? (O3)</li>
                        <li>O que você acha do preço dos nossos produto? (O4)</li>
                        <li>Você recomendaria a Itabaú para seus parentes, amigos ou companheiros? (O5)</li>
                        <li>Com qual frequência você toma sorvete? (O6)</li>
                        <li>Por favor, diga-nos o que podemos fazer para melhorar? (O7)</li>
                    </ul>
                </p>
            </div>
           <Table data={mensagens}/>
        </div>
        <Footer />
    </>)
}

export default PainelPesquisa;