import React from 'react';

import Header from '../../../../components/Header'
import Footer from '../../../../components/Footer'
import Carrossel from '../../../../components/Carrossel'
import PicolesTab from '../../../../components/PicolesTab'
import Hidden from "@material-ui/core/Hidden";

import logo from '../../../../assets/img/logo-itabau-picole.png'
import bg from '../../../../assets/img/picoles/acucar/bg.jpg'

import organicos from './data/organico.json'
import naturais from './data/naturais.json'

import './style.css'

function Acucar() {
    window.scrollTo(0, 0)

    return (<>

        <Header />
        <Carrossel style={{ backgroundSize: 'cover ' }} images={[bg]}><h3>Sem Adição de Açúcar</h3><Hidden mdDown implementation="css"><img src={logo} alt="logo" style={{width: 400, position: 'absolute', bottom: 10, right: 40}}/></Hidden> </Carrossel>
        <div className={'margin'} />
        <div className='container container-historia container-picoles animated'>
            <div className='content-itens left' style={{ backgroundColor: '#fff' }} data-about>
                <h4>Orgânicos - Sem Adição de Açúcar</h4>
            </div>
        </div>
        <PicolesTab  picoles={organicos}/>

        <div className='container container-historia container-picoles animated'>
            <div className='content-itens left' style={{ backgroundColor: '#fff' }} data-about>
                <h4>Naturais - Sem Adição de Açúcar</h4>
            </div>
        </div>
        <PicolesTab  picoles={naturais}/>

        <Footer />
    </>)
}

export default Acucar;