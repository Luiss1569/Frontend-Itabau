import React from 'react';

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Carrossel from '../../components/Carrossel'
import { Timeline } from 'antd';

import bg from '../../assets/img/Historia/bg.jpg'
import rme from '../../assets/img/Historia/rme.jpg'
import f1 from '../../assets/img/Historia/f1.jpg'
import f2 from '../../assets/img/Historia/f2.jpg'

import g1 from '../../assets/img/Historia/g1.jpg'
import g2 from '../../assets/img/Historia/g2.jpg'
import g3 from '../../assets/img/Historia/g3.jpg'
import g4 from '../../assets/img/Historia/g4.jpg'
import g5 from '../../assets/img/Historia/g5.jpg'
import g6 from '../../assets/img/Historia/g6.jpg'
import g7 from '../../assets/img/Historia/g7.jpg'
import g8 from '../../assets/img/Historia/g8.jpg'
import g9 from '../../assets/img/Historia/g9.jpg'
import g10 from '../../assets/img/Historia/g10.jpg'

import './style.css'

function Historia() {
    const geracoes = [g3, g4, g5, g6, g7, g8]

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
        <Carrossel images={[bg]}> <h3 className="title">Nossa História</h3></Carrossel>
        <div className={'margin'} />

        <div className="container animated">
            <div className="content-img left " data-about="true">
                <img src={rme} alt="proprietarios" />
            </div>

            <div className="content-itens right " data-about="true">
                <p>
                    A Itabaú Sorvetes foi fundada no alto da serra da Mantiqueira, aos pés do maior monumento
                    natural do alto Vale do Paraíba, a Pedra do Baú, pelos até então apicultores Ricardo Inke e
                    Carlos Robson Galvão. Ao final da década de 1980 após uma enorme colheita de mel, inicia-se a
                    produção de sorvetes com mel, como alternativa para dar vazão ao mel colhido.
          </p>
            </div>
        </div>

        <div className="container container-reverse-hist animated">
            <div className="content-img left " data-about="true">
                <img src={f2} alt="proprietarios" />
                <p>CHALÉ ITABAÚ</p>
            </div>

            <div className="content-itens right " data-about="true" style={{ marginRight: 10 }}>
                <p>
                    Os sabores exóticos e a alta qualidade do produto caíram no gosto dos turistas e munícipes, com
                    grande aceitação, isso no final de 1988 onde tínhamos uma sorveteria no centro de nossa
                    cidade. Resolve-se então no dia 30 de junho de 1990 fundar formalmente a Itabaú Produtos
                    Naturais Ltda. Em março de 1993 Carlos Robson adquire a parte do sócio Ricardo Camargo que
                    parte para o ramo de restaurantes.
          </p>
            </div>
        </div>

        <div className="container animated">
            <div className="content-img left " data-about="true">
                <img src={f1} alt="proprietarios" />
                <p>1º SORVETERIA ITABAÚ  - NO  CENTRO DA CIDADE DE SÃO BENTO </p>
            </div>
            <div className="content-itens right " data-about="true">
                <p>
                    A empresa continua de cunho familiar e procura firmar uma
                    outra marca como sorvetes DYMEL, Sorvetes Favo, depois Fratelli, como não conseguiu registro
                    junto ao INPI, voltou a marca de origem. A marca comercial é "Itabaú Sorvetes", e com novos
                    projetos vindo, criamos as submarcas, Itabaú – A energia da montanha, que representa toda a
                    linha de Massa Premium e Itabaú – O picolé do Robson que representa toda linha de picolés
                    naturais e orgânicos.
          </p>
            </div>
        </div>

        <div className='container container-historia animated' style={{ marginTop: 0 }}>
            <div className='content-img  galery left' data-about>
                <Timeline mode="alternate">
                    <Timeline.Item label="Esse é nosso 1º freezer, pintado à mão por Marília Inke.">
                        <div className='box-img'>
                            <h3>1º geração</h3>
                            <img
                                src={g1}
                                alt="..." />
                        </div>
                    </Timeline.Item>
                    <Timeline.Item label="Foto do freezer da nossa 1º sorveteria no centro da cidade. ">
                        <div className='box-img'>
                            <h3>2º geração</h3>
                            <img
                                src={g2}
                                alt="..." />
                        </div>
                    </Timeline.Item>
                    {geracoes.map((image, index) => (
                        <Timeline.Item>
                            <div className='box-img'>
                                <h3>{index + 3}º geração</h3>
                                <img
                                    src={image}
                                    alt="..." />
                            </div>
                        </Timeline.Item>
                    ))}
                    <Timeline.Item>
                        <div className='box-img'>
                            <h3>9º geração</h3>
                            <img
                                src={g9}
                                alt="..." />
                            <label></label>
                        </div>
                    </Timeline.Item>
                    <Timeline.Item color="green" label="Geração Atual">
                        <div className='box-img'>
                            <h3>10º geração</h3>
                            <img
                                src={g10}
                                alt="..." />
                            <label></label>
                        </div>
                    </Timeline.Item>
                </Timeline>
            </div>
        </div>

        <Footer />
    </>)
}

export default Historia;