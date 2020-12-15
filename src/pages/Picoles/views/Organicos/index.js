import React from 'react';

import Header from '../../../../components/Header'
import Footer from '../../../../components/Footer'
import Carrossel from '../../../../components/Carrossel'
import PicolesTab from '../../../../components/PicolesTab'
import LogoCarrossel from "../../../../components/LogoPicoleCarrossel";

import bg from '../../../../assets/img/picoles/organicos/bg.jpg'

import organicos from './data/organicos.json'
import vegano from './data/vegano.json'
import xAcucar from './data/xAcucar.json'

import './style.css'

function Organicos() {
    React.useEffect(() => {
        window.scrollTo(0, 0)
        try {
          document.querySelectorAll('.animated div[data-about]')[0].removeAttribute('data-about');
          document.querySelectorAll('.animated div[data-about]')[0].removeAttribute('data-about');
        } catch (error) {
            console.log(error);
        }
      })
  
    return (<>

        <Header />
        <Carrossel style={{ backgroundSize: 'cover ' }} images={[bg]}><h3>Picolés Orgânicos</h3><LogoCarrossel/></Carrossel>
        <div className={'margin'} />
        <div className='container container-massa animated'>
            <div className='content-itens content-box right' data-about>
                <h3>O que são produtos orgânicos?</h3>
                <p>Produto orgânico é um alimento sadio, limpo, cultivado sem agrotóxicos e sem fertilizantes
                químicos. Eles provêm de sistemas agrícolas baseados em processos naturais, que não agridem
                a natureza e mantêm a vida do solo intacta. Quer saber mais acesse nossa fonte a seguir
                    <a href=' http://somostodosum.ig.com.br/artigos/corpo-e-mente/o-que-sao-produtos-organicos-1848.html.'
                        rel="noreferrer" target='_blank' style={{ marginLeft: 5 }}>Acessar site</a>
                </p>
                <p>Nós somos auditados pela empresa IBD, onde o mesmo no concede o selo SISORG que é obrigatorio
                em todos os produtos orgânicos. Saiba mais sobre os selos,
                    <a style={{ marginLeft: 5 }} href=' http://somostodosum.ig.com.br/artigos/corpo-e-mente/o-que-sao-produtos-organicos-1848.html.' rel="noreferrer" target='_blank'>Aqui</a></p>
            </div>
        </div>
        <div className='container container-historia container-picoles animated'>
            <div className='content-itens left' style={{ backgroundColor: '#fff' }} data-about>
                <h4>Orgânicos - Sem Glúten e Com Lactose</h4>
            </div>
        </div>
        <PicolesTab  picoles={organicos}/>

        <div className='container container-historia container-picoles animated'>
            <div className='content-itens left' style={{ backgroundColor: '#fff' }} data-about>
                <h4>Orgânicos Veganos - Sem Glúten e Sem Lactose</h4>
            </div>
        </div>
        <PicolesTab  picoles={vegano}/>

        <div className='container container-historia container-picoles animated'>
            <div className='content-itens left' style={{ backgroundColor: '#fff' }} data-about>
                <h4>Orgânicos Veganos - Sem Açúcar, Sem Glúten e Sem Lactose</h4>
            </div>
        </div>
        <PicolesTab  picoles={xAcucar}/>

        <Footer />
    </>)
}

export default Organicos;