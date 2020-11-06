import React from 'react';

import Header from '../../../../components/Header'
import Footer from '../../../../components/Footer'
import Carrossel from '../../../../components/Carrossel'
import PicolesTab from '../../../../components/PicolesTab'

import bg from '../../../../assets/img/massa/bg.jpg'

import sem_gluten from './data/sem_gluten.json'
import gluten from './data/gluten.json'
import vegano from './data/vegano.json'
import sem_acucar from './data/sem_acucar.json'

import './style.css'

function Naturais() {
    window.scrollTo(0, 0)
    
    return (<>

        <Header />
        <Carrossel style={{ backgroundSize: 'cover ' }} images={[bg]} />
        <div className={'margin'} />
        <div className='container container-massa animated'>
            <div className='content-itens left'>
                <h3>Picolés Naturais</h3>
            </div>
        </div>
        <div className='container container-massa animated'>
            <div className='content-itens content-box right' data-about>
                <h3>O que é Picolé Natural?</h3>
                <p>O produto natural é aquele que não contém nada de ingredientes artificiais e nem conservantes. 
                    Mesmo sendo natural nós da familia Itabaú utilizamos açúcar orgânico em toda a sua linha, visando
                     manter sempre a qualidade. Os poucos sabores que contém aroma como coco, chocolate branco, leite 
                     condensado... são aromas naturais usados apenas para realçar o sabor, e veja que eles sempre são 
                     um dos últimos da lista de ingredientes (os ingredientes são listados em ordem decrecente).
                </p>
                <p>Nós somos auditados pela empresa IBD, onde o mesmo no concede o selo SISORG que é obrigatorio
                em todos os produtos orgânicos. Saiba mais sobre os selos,
                    <a style={{ marginLeft: 5 }} href=' http://somostodosum.ig.com.br/artigos/corpo-e-mente/o-que-sao-produtos-organicos-1848.html.' rel="noreferrer" target='_blank'>Aqui</a></p>
            </div>
        </div>
        <div className='container container-historia container-picoles animated'>
            <div className='content-itens left' style={{ backgroundColor: '#fff' }} data-about>
                <h4>Naturais - Sem Glúten e Com Lactosee</h4>
            </div>
        </div>
        <PicolesTab  picoles={sem_gluten}/>

        <div className='container container-historia container-picoles animated'>
            <div className='content-itens left' style={{ backgroundColor: '#fff' }} data-about>
                <h4>Orgânicos Veganos - Sem Glúten e Sem Lactose</h4>
            </div>
        </div>
        <PicolesTab  picoles={vegano}/>

        <div className='container container-historia container-picoles animated'>
            <div className='content-itens left' style={{ backgroundColor: '#fff' }} data-about>
                <h4>Naturais - Com Glúten e Com Lactose</h4>
            </div>
        </div>
        <PicolesTab  picoles={gluten}/>

        <div className='container container-historia container-picoles animated'>
            <div className='content-itens left' style={{ backgroundColor: '#fff' }} data-about>
                <h4>Naturais Veganos - Sem Glúten e Sem Lactose</h4>
            </div>
        </div>
        <PicolesTab  picoles={vegano}/>

        <div className='container container-historia container-picoles animated'>
            <div className='content-itens left' style={{ backgroundColor: '#fff' }} data-about>
                <h4>Sem Açúcar - Veganos, Sem Glúten e Com Lactose</h4>
            </div>
        </div>
        <PicolesTab  picoles={sem_acucar}/>

        <Footer />
    </>)
}

export default Naturais;