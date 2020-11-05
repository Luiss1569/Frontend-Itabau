import React from 'react';

import Header from '../../../../components/Header'
import Footer from '../../../../components/Footer'
import Carrossel from '../../../../components/Carrossel'

import bg from '../../../../assets/img/massa/bg.jpg'

import './style.css'

function Organicos() {
    window.scrollTo(0, 0)

    return (<>

        <Header />
        <Carrossel style={{ backgroundSize: 'cover ' }} images={[bg]} />
        <div className={'margin'} />
        <div className='container container-massa animated'>
            <div className='content-itens left'>
                <h3>Picolés Orgânicos</h3>
            </div>
        </div>
        <div className='container container-massa animated'>
            <div className='content-itens content-box right' data-about>
                <h3>O que são produtos orgânicos?</h3>
                <p>Produto orgânico é um alimento sadio, limpo, cultivado sem agrotóxicos e sem fertilizantes 
                    químicos. Eles provêm de sistemas agrícolas baseados em processos naturais, que não agridem 
                    a natureza e mantêm a vida do solo intacta. Quer saber mais acesse nossa fonte a seguir
                    <a href=' http://somostodosum.ig.com.br/artigos/corpo-e-mente/o-que-sao-produtos-organicos-1848.html.' 
                    rel="noreferrer" target='_blank'>Acessar site</a>
                    </p>
                <p>Nós somos auditados pela empresa IBD, onde o mesmo no concede o selo SISORG que é obrigatorio 
                    em todos os produtos orgânicos. Saiba mais sobre os selos,
                    <a href=' http://somostodosum.ig.com.br/artigos/corpo-e-mente/o-que-sao-produtos-organicos-1848.html.' rel="noreferrer" target='_blank'>Aqui</a></p> 
            </div>
        </div>
        <div className='container container-massa animated'>
            <div className='content-itens left' style={{ backgroundColor: '#fff' }} data-about>
               
            </div>
        </div>
        <Footer />
    </>)
}

export default Organicos;