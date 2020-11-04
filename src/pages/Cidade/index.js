import React from 'react';

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Carrossel from '../../components/Carrossel'

import bg from '../../assets/img/cidade/bg.jpg'

import c1 from '../../assets/img/cidade/c1.jpg'
import c2 from '../../assets/img/cidade/c2.jpg'

import './style.css'

function Cidade() {
    window.scrollTo(0, 0)

    return (<>

        <Header />
        <Carrossel style={{ backgroundSize: 'cover ' }} images={[bg]} />
        <div className={'margin'} />
        <div className='container container-historia animated'>
            <div className='content-itens left' data-about>
                <h3>Conheça nossa cidade</h3>
                <h4 style={{ fontSize: 20 }}>São Bento do Sapucaí-SP</h4>
                <p>O Município da Estância Climática de São Bento do Sapucaí situa-se ao leste do Estado de São
                Paulo, nos contrafortes da Serra da Mantiqueira, Região Vale do Paraíba, mais especificamente
                no Alto Sapucaí. Compreende uma área de 279 km², dividindo em perímetro urbano: 91.405 km2 e
                rural 187,595 km2, com uma população de 10.355 (censo 2000) habitantes, sendo 44,68% na zona
                urbana e 55,2% na zona rural. Seu clima é ameno e saudável e o solo fértil permite uma
                agricultura diversificada que, ao lado da pecuária, forma a base econômica do Município que
                        também produz hortifrutigranjeiros.</p>
            </div>
            <div className='content-img right' data-about>
                <img src={c1} alt='São Bento' />
                <span>Fundação: 16 de agosto de 1832.</span>
            </div>
        </div>

        <div className='container container-historia animated'>
            <div className='content-itens left' data-about>
                <p>Conheça mais a história da nosso cidade, clicando no link a seguir - <a href=' https://www.saobentodosapucai.sp.gov.br/site/historia/' target='_blank' rel="noreferrer">Hístoria de São Bento do Sapucaí</a></p>
                <p style={{marginTop: -20}}>Site Oficial - <a href='https://www.tripadvisor.com.br/Attractions-g2535594-Activities-Sao_Bento_do_Sapucai_State_of_Sao_Paulo.html' target='_blank' rel="noreferrer">Aqui</a></p>
                <h4 style={{ fontSize: 20 }}>O que fazer em São Bento do Sapucaí-SP</h4>
                <p>Atrações pela Tripadvisor - <a href='https://www.tripadvisor.com.br/Attractions-g2535594-Activities-Sao_Bento_do_Sapucai_State_of_Sao_Paulo.html' rel="noreferrer" target='_blank'>Acessar site</a></p>
                <p style={{marginTop: -20}}>Atrações pela Viva Mundo- <a href='http://vivaomundo.com.br/roteiro-sao-bento-do-sapucai-sp/' target='_blank' rel="noreferrer">Acessar site</a></p>
            </div>

        </div>

        <div className='container container-historia animated'>
            <div className='content-itens left' style={{marginBottom:30}} data-about>
                <h3>Pedra do Baú</h3>
            </div>

            <div className='content-img right' data-about>
                <img src={c2} alt='São Bento' />
                <span>Monumento Natural Pedra do Baú</span>
            </div>
        </div>

        <div className='container container-historia animated'>
            <div className='content-itens left' data-about>
                <h4>A Saga do Baú</h4>
                <p>Conhecida e admirada por muitos viajantes desde tempos remotos, a Pedra do Baú sempre chamou a
                     atenção na paisagem por seu contorno único e beleza cênica. Atingindo 1950m de altitude em seu topo, 
                     em plena Mantiqueira Paulista, a Pedra e seu entorno está envolta não apenas na cerração da manhã e dos dias
                      nublados, mas também em diversas lendas, originárias da imaginação popular sobre o “gigante adormecido no 
                      seio da mata virgem” (LIMA SILVA, Isaura). A mais famosa localmente é a dos Três Irmãos, mas há ainda: a Mãe 
                      do Ouro, o Reino do Rei Beijaúme, o Baú e seu tesouro, a Toca e outras baseadas em casos relatados e 
                      “aumentados”. Fonte de inspiração ainda de sonetos, como “A mágoa do granito” (Affonso José de Carvalho, 
                      1918), “Pedra do Bahú” (Plínio Salgado, 1915) e “Pedra do Baú” (Bento Cortez, 1962).</p>
                <p>E aí ficou interessado nessa história fantástica dos três irmão?! Clique no link a seguir e viaje no tempo: <a href='https://www.saobentodosapucai.sp.gov.br/site/historia-pedra-do-bau/' target='_blank' rel="noreferrer">Clique aqui</a></p>
            </div>

        </div>

        <Footer />
    </>)
}

export default Cidade;