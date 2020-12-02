import React from 'react';

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Carrossel from '../../components/Carrossel'
import Galery from '../../components/Galery'

import bg from '../../assets/img/Historia/bg.jpg'
import rme from '../../assets/img/Historia/rme.jpg'
import itabauPDF from "../../assets/pdf/itabau.pdf";

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

import f1 from '../../assets/img/Historia/f1.jpg'
import f2 from '../../assets/img/Historia/f2.jpg'
import f3 from '../../assets/img/Historia/f3.jpg'
import f4 from '../../assets/img/Historia/f4.jpg'
import f5 from '../../assets/img/Historia/f5.jpg'
import f6 from '../../assets/img/Historia/f6.jpg'
import f7 from '../../assets/img/Historia/f7.jpg'
import f8 from '../../assets/img/Historia/f8.jpg'
import f9 from '../../assets/img/Historia/f9.jpg'
import f10 from '../../assets/img/Historia/f10.jpg'
import f12 from '../../assets/img/Historia/f12.jpg'
import f13 from '../../assets/img/Historia/f13.jpg'
import f14 from '../../assets/img/Historia/f14.jpg'

import './style.css'

function Historia() {
    const geracoes = [g1, g2, g3, g4, g5, g6, g7, g8, g9, g9_2]

    React.useEffect(() => {
        window.scrollTo(0, 0)
        try {
            document.querySelectorAll('.animated div[prime]')[0].removeAttribute('data-about');
        } catch (error) {
            console.log(error);
        }
    })

    const IMAGES = [{
        src: f1,
        thumbnail: f1,
    },
    {
        src: f2,
        thumbnail: f2,
    },
    {
        src: f3,
        thumbnail: f3,
    },
    {
        src: f4,
        thumbnail: f4,
    },
    {
        src: f5,
        thumbnail: f5,
    },
    {
        src: f6,
        thumbnail: f6,
    },
    {
        src: f7,
        thumbnail: f7,
    },
    {
        src: f8,
        thumbnail: f8,
    },
    {
        src: f9,
        thumbnail: f9,
    },
    {
        src: f10,
        thumbnail: f10,
    },
    {
        src: f12,
        thumbnail: f12,
    },
    {
        src: f13,
        thumbnail: f13,
    },
    {
        src: f14,
        thumbnail: f14,
    }]

    return (<>

        <Header />
        <Carrossel images={[bg]} />
        <div className={'margin'} />

        <div className='container container-historia animated'>
            <div className='content-itens left' prime="true" data-about>
                <h3>Nossa Historia</h3>
                <p>A Itabaú Sorvetes, foi fundada no alto da serra da Mantiqueira, aos pés do maior monumento natural do alto Vale do Paraíba,
                    a Pedra do Baú, pelos até então apicultores Ricardo Camargo Inke e Carlos Robson Galvão. </p>
            </div>
            <div className='content-img right' data-about>
                <img src={rme} alt='nos' />
            </div>
            <span>Na foto da esquerda para direita: Carlos Robson Galvão, Marília Inke e Ricardo Camargo Inke.</span>
            <div className='content-itens left' data-about style={{ marginTop: 0 }}>
                <p>Os sabores exóticos e a alta qualidade do produto caíram no gosto dos turistas e munícipes, com  grande aceitação, isso no
                final de 1988. Resolve-se então no dia 30 de junho de 1990 fundar formalmente a Itabaú Produtos Naturais Ltda. Em março de
                1993 Carlos Robson adquire a parte do sócio Ricardo Camargo que parte para o ramo de restaurantes. A empresa continua de
                cunho familiar e procura firmar uma outra marca como sorvetes DYMEL, Sorvetes Favo, depois Fratelli, como não conseguiu
                registro junto ao INPI, voltou a marca de origem. A marca comercial é "Itabaú Sorvetes", e com novos projetos vindo, criamos
                as submarcas, Itabaú – A energia da montanha, que representa toda a linha de Massa Premium e Itabaú – O picolé do Robson que
                     representa toda  linha de picolés naturais e orgânicos. </p>
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
                <p>A empresa ganha alguns logos ao longo do tempo, cresce paulatinamente e solidamente no mercado regional, pela qualidade e
                pelos sabores exóticos, como abobora com coco, queijo, batata doce com beterraba vegano, arroz doce, mandioca com coco
                vegano e entre outros tantos. A empresa tem como compromisso manter a qualidade do sorvete, fazendo com que  passe de
                guloseima a um alimento, e para completar esta opção a empresa desenvolve e oferece a seus consumidores os sorvetes
                     orgânicos.</p>
            </div>
            <div className='content-itens right' data-about style={{ marginTop: -40 }}>
                <p>Os membros da família ainda são os maiores colaboradores da empresa.
                    Quase no quintal da empresa está a Pedra do Baú.</p>
            </div>
            <div className='content-itens right' style={{ marginTop: 30 }}>
                <Galery images={IMAGES} />
            </div>
        </div>
        <Footer />
    </>)
}

export default Historia;