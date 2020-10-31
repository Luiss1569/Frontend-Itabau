import React, { useState, useEffect } from 'react';

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Carrossel from '../../components/Carrossel'

import bg from '../../assets/img/Historia/bg.jpg'
import rme from '../../assets/img/Historia/rme.jpg'

import './style.css'

function Historia() {
    window.scrollTo(0,0)

    return (<>

        <Header />
        <Carrossel images={[bg]} />
        <div className={'margin'} />

        <div className='container container-historia animated'>
            <div className='content-itens left'>
                <h3>Nossa Historia</h3>
                <p>A Itabaú sorvetes com mel, foi fundada no alto da serra da Mantiqueira, aos pés do maior
                monumento natural do alto Vale do Paraíba, a Pedra do Baú, pelos até então apicultores
                Ricardo Camargo Inke e Carlos Robson Galvão. Ao final da década de 1980 após uma enorme
                colheita de mel, inicia-se a produção de sorvetes com mel, como alternativa para dar vazão
                ao mel colhido. Este foi nosso primeiro freezer (Apiário Itabaú) pintado a mão pela Marilia
                    Inke.</p>
            </div>
            <div className='content-img' data-about>
                <img src={rme} alt='nos' />
            </div>
            <span>Na foto da esquerda para direita: Carlos Robson Galvão, Marília Inke e Ricardo Camargo Inke.</span>
            <div className='content-itens right' data-about style={{ marginTop: 0 }}>
                <p>Os sabores exóticos e a alta qualidade do produto caíram no gosto dos turistas e munícipes;
                com a grande aceitação, resolve-se então no dia 30 de junho de 1990 fundar formalmente a
                Itabaú Produtos Naturais Ltda. Em março de 1993 Carlos Robson adquire a parte do sócio
                Ricardo Camargo que parte para o ramo de restaurantes. A empresa continua de cunho familiar
                e procura firmar uma outra marca como sorvetes DYMEL, Sorvetes Favo, depois Fratelli, como
                não conseguiu registro junto ao INPI, voltou a marca de origem. A marca comercial é "ITABAÚ
                     a energia da montanha" e " ITABAÚ O Picolé do Robson ".</p>
            </div>
        </div>

        <div className='container container-historia animated' style={{ marginTop: 0 }}>
            <div className='content-img left' data-about>
                <h3>1</h3>
                <img src={rme} alt='nos' />
            </div>
        </div>
        <Footer />
    </>)
}

export default Historia;