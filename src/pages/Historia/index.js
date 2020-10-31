import React from 'react';

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Carrossel from '../../components/Carrossel'

import bg from '../../assets/img/Historia/bg.jpg'
import rme from '../../assets/img/Historia/rme.jpg'

import g1 from '../../assets/img/Historia/g1.jpg'
import g2 from '../../assets/img/Historia/g2.jpg'
import g3 from '../../assets/img/Historia/g3.jpg'
import g4 from '../../assets/img/Historia/g4.jpg'
import g5 from '../../assets/img/Historia/g5.jpg'
import g6 from '../../assets/img/Historia/g6.jpg'
import g7 from '../../assets/img/Historia/g7.jpg'
import g8 from '../../assets/img/Historia/g8.jpg'
import g9 from '../../assets/img/Historia/g9.jpg'
import g9_2 from '../../assets/img/Historia/g9-2.jpg'

import './style.css'

function Historia() {
    window.scrollTo(0, 0)
    const geracoes = [g1, g2, g3, g4, g5, g6, g7, g8, g9, g9_2]

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
            <div className='content-img  galery left' data-about>
                {geracoes.map((image, index) => (
                    <div className='box-img'>
                        <img
                            src={image}
                            alt="..." />
                        <div className={"content"}>
                            <h3>{index + 1}º geração</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <div className='container container-historia animated'>
            <div className='content-itens left' data-about>
                <p>A empresa ganha alguns logos ao longo do tempo, cresce paulatinamente e solidamente no
                mercado regional, pela qualidade e pelos sabores exóticos, como abobora com coco, queijo,
                batata doce com beterraba vegano, arroz doce, mandioca com coco vegano e entre outros tantos.
                A empresa tem como compromisso manter a qualidade do sorvete, para fornecer um alimento
                nutritivo. Ao fazer esta opção a empresa desenvolve e oferece a seus consumidores os
                      sorvetes orgânicos.</p>
            </div>
            <div className='content-itens right' data-about style={{ marginTop: -40 }}>
                <p>Os membros da família ainda são os maiores colaboradores da empresa.
                    Quase no quintal da empresa está a Pedra do Baú.</p>
            </div>
        </div>

        <Footer />
    </>)
}

export default Historia;