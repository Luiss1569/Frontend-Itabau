import React from 'react';

import Header from '../../../../components/Header'
import Footer from '../../../../components/Footer'
import Carrossel from '../../../../components/Carrossel'
import PicolesTab from '../../../../components/PicolesTab'
import LogoCarrossel from "../../../../components/LogoPicoleCarrossel";

import bg from '../../../../assets/img/picoles/recheado/bg.jpg'

import recheados from './data/recheados.json'

import './style.css'

function Recheados() {
    window.scrollTo(0, 0)

    return (<>

        <Header />
        <Carrossel style={{ backgroundSize: 'cover ' }} images={[bg]}>   <h3>Picolés Recheados</h3><LogoCarrossel/></Carrossel>
        <div className={'margin'} />
        <div className='container container-massa animated'>
            <div className='content-itens content-box right' data-about>
                <h3>Picolés Recheados</h3>
                <p>Aquele picolé para deixar seu dia incrível. O picolé natural recheado é feito com os mesmo 
                    princípios do picolé natural, sem adição de aromas artificiais, corantes e conservante,
                     porém colocamos neles recheios magníficos, que lhe proporciona um sensação inesquecível, e 
                     impossível provar somente um.
                </p>
                <p>Nós somos auditados pela empresa IBD, onde o mesmo no concede o selo SISORG que é obrigatorio
                em todos os produtos orgânicos. Saiba mais sobre os selos,
                    <a style={{ marginLeft: 5 }} href=' http://somostodosum.ig.com.br/artigos/corpo-e-mente/o-que-sao-produtos-organicos-1848.html.' rel="noreferrer" target='_blank'>Aqui</a></p>
            </div>
        </div>
        <div className='container container-historia container-picoles animated'>
            <div className='content-itens left' style={{ backgroundColor: '#fff' }} data-about>
                <h4>Naturais Recheados - Sem Glúten e Com Lactose</h4>
            </div>
        </div>
        <PicolesTab  picoles={recheados}/>

        <Footer />
    </>)
}

export default Recheados;