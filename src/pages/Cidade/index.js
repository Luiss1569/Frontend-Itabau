import React from 'react';

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Carrossel from '../../components/Carrossel'
import Galery from '../../components/Galery'

import bg from '../../assets/img/cidade/bg.jpg'

import c1 from '../../assets/img/cidade/c1.jpg'
import c2 from '../../assets/img/cidade/c2.jpg'
import c3 from '../../assets/img/cidade/c3.jpg'
import c4 from '../../assets/img/cidade/c4.jpg'
import c5 from '../../assets/img/cidade/c5.jpg'

import f1 from '../../assets/img/cidade/fotos/1.jpg'
import f2 from '../../assets/img/cidade/fotos/2.jpg'
import f3 from '../../assets/img/cidade/fotos/3.jpg'
import f4 from '../../assets/img/cidade/fotos/4.jpg'
import f5 from '../../assets/img/cidade/fotos/5.jpg'
import f6 from '../../assets/img/cidade/fotos/6.jpg'
import f7 from '../../assets/img/cidade/fotos/7.jpg'
import f8 from '../../assets/img/cidade/fotos/8.jpg'
import f9 from '../../assets/img/cidade/fotos/9.jpg'
import f10 from '../../assets/img/cidade/fotos/10.jpg'
import f11 from '../../assets/img/cidade/fotos/1.jpg'
import f12 from '../../assets/img/cidade/fotos/12.jpg'
import f13 from '../../assets/img/cidade/fotos/13.jpg'
import f14 from '../../assets/img/cidade/fotos/14.jpg'
import f15 from '../../assets/img/cidade/fotos/15.jpg'
import f16 from '../../assets/img/cidade/fotos/16.jpg'
import f17 from '../../assets/img/cidade/fotos/17.jpg'
import f18 from '../../assets/img/cidade/fotos/18.jpg'
import f19 from '../../assets/img/cidade/fotos/19.jpg'
import f20 from '../../assets/img/cidade/fotos/20.jpg'
import f21 from '../../assets/img/cidade/fotos/21.jpg'
import f22 from '../../assets/img/cidade/fotos/22.jpg'
import f23 from '../../assets/img/cidade/fotos/23.jpg'
import f24 from '../../assets/img/cidade/fotos/24.jpg'
import f25 from '../../assets/img/cidade/fotos/25.jpg'
import f26 from '../../assets/img/cidade/fotos/1.jpg'
import f27 from '../../assets/img/cidade/fotos/27.jpg'
import f28 from '../../assets/img/cidade/fotos/28.jpg'
import f30 from '../../assets/img/cidade/fotos/30.jpg'
import f31 from '../../assets/img/cidade/fotos/31.jpg'
import f32 from '../../assets/img/cidade/fotos/32.jpg'
import f33 from '../../assets/img/cidade/fotos/33.jpg'
import f34 from '../../assets/img/cidade/fotos/34.jpg'
import f35 from '../../assets/img/cidade/fotos/35.jpg'


import './style.css'

function Cidade() {

    React.useEffect(() => {
        window.scrollTo(0, 0)
        try {
            document.querySelectorAll('.animated div[data-about]')[0].removeAttribute('data-about');
        } catch (error) {
            console.log(error);
        }
    }, [])

    const IMAGES = [
         {
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
            src: f11,
            thumbnail: f11,
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
        },
        {
            src: f15,
            thumbnail: f15,
        },
        {
            src: 7,
            thumbnail: f16,
        },
        {
            src: f17,
            thumbnail: f17,
        },
        {
            src: f18,
            thumbnail: f18,
        },
        {
            src: f19,
            thumbnail: f19,
        },
        {
            src: f20,
            thumbnail: f20,
        },
        {
            src: f21,
            thumbnail: f21,
        },
        {
            src: f22,
            thumbnail: f22,
        },
        {
            src: f23,
            thumbnail: f23,
        },
        {
            src: f24,
            thumbnail: f24,
        },
        {
            src: f25,
            thumbnail: f25,
        },
        {
            src: f26,
            thumbnail: f26,
        },
        {
            src: f27,
            thumbnail: f27,
        },
        {
            src: f28,
            thumbnail: f28,
        },

        {
            src: f30,
            thumbnail: f30,
        },
        {
            src: f31,
            thumbnail: f31,
        },
        {
            src: f32,
            thumbnail: f32,
        },
        {
            src: f33,
            thumbnail: f33,
        },
        {
            src: f34,
            thumbnail: f34,
        },
        {
            src: f35,
            thumbnail: f35,
        }
    ]

    return (<>

        <Header />
        <Carrossel style={{ backgroundSize: 'cover ' }} images={[bg]}><h3>Conheça nossa cidade</h3></Carrossel>
        <div className={'margin'} />
        <div className='container container-historia animated'>
            <div className='content-itens left' data-about>
                <h3>São Bento do Sapucaí-SP</h3>
                <p>O Município da Estância Climática de São Bento do Sapucaí situa-se ao leste do Estado de São
                Paulo, nos contrafortes da Serra da Mantiqueira, Região Vale do Paraíba, mais especificamente
                no Alto Sapucaí. Compreende uma área de 279 km², dividindo em perímetro urbano: 91.405 km2 e
                rural 187,595 km2, com uma população de 10.355 (censo 2000) habitantes, sendo 44,68% na zona
                urbana e 55,2% na zona rural. Seu clima é ameno e saudável e o solo fértil permite uma
                agricultura diversificada que, ao lado da pecuária, forma a base econômica do Município que
                        também produz hortifrutigranjeiros.</p>
            </div>
            <div className='content-img  box-img right' data-about>
                <img src={c1} alt='São Bento' />
                <h3>Fundação: 16 de agosto de 1832.</h3>
            </div>
        </div>

        <div className='container container-historia animated'>
            <div className='content-itens left' data-about>
                <p>Conheça mais a história da nosso cidade, clicando no link a seguir - <a href=' https://www.saobentodosapucai.sp.gov.br/site/historia/' target='_blank' rel="noreferrer">Hístoria de São Bento do Sapucaí</a></p>
                <p style={{ marginTop: -20 }}>Site Oficial - <a href='https://www.tripadvisor.com.br/Attractions-g2535594-Activities-Sao_Bento_do_Sapucai_State_of_Sao_Paulo.html' target='_blank' rel="noreferrer">Aqui</a></p>
                <h4 style={{ fontSize: 20 }}>O que fazer em São Bento do Sapucaí-SP</h4>
                <p>Atrações pela Tripadvisor - <a href='https://www.tripadvisor.com.br/Attractions-g2535594-Activities-Sao_Bento_do_Sapucai_State_of_Sao_Paulo.html' rel="noreferrer" target='_blank'>Acessar site</a></p>
                <p style={{ marginTop: -20 }}>Baú ecoturismo - <a href='https://bauecoturismo.com.br/pedra-do-bau/' target='_blank' rel="noreferrer">Acessar site</a></p>
                <p style={{ marginTop: -20 }}>Primatas do Baú- <a href='https://www.instagram.com/primatas_do_bau/?hl=pt' target='_blank' rel="noreferrer">Acessar site</a></p>
                <p style={{ marginTop: -20 }}>Dimyclimbing - <a href='https://www.instagram.com/dimyclimbing/?hl=pt' target='_blank' rel="noreferrer">Acessar site</a></p>
                <p style={{ marginTop: -20 }}>Guia São Bento do Sapucaí-SP - <a href='https://www.saobentodosapucai.sp.gov.br/site/wp-content/uploads/2016/07/guia-pratico-sbs.pdf' target='_blank' rel="noreferrer">Acessar site</a></p>
            </div>
        </div>

        <div className='container container-historia animated'>
            <div className='content-itens left' style={{ marginBottom: 30 }} data-about>
                <h3>Pedra do Baú</h3>
            </div>

            <div className='content-img box-img right' data-about>
                <img src={c2} alt='São Bento' />
                <h3>Monumento Natural Pedra do Baú</h3>
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

        <div className='container container-historia animated'>
            <div className='content-itens left' data-about>
                <h3>Família Zé Pereira</h3>
                <p>No início do Século XX surge um boneco pelas ruas de São Bento do Sapucaí, seu nome é Zé
                Pereira. Ao longo dos anos sua família foi crescendo e é hoje a família mais amada da cidade.
                Para conhecer mais essa família super animada acesse:
               <a href=' https://www.saobentodosapucai.sp.gov.br/site/ze-pereira/'>Acessar aqui</a>
                .Conheça o museu:<a href='https://www.saobentodosapucai.sp.gov.br/site/museu-do-ze-pereira/'>Museu</a> </p>
            </div>
            <div className='content-img box-img right' data-about>
                <img src={c3} alt='São Bento' />
                <h3>Bloco Zé Pereira</h3>
            </div>
        </div>

        <div className='container container-historia animated' style={{ marginTop: 0 }}>
            <div className='content-itens right' data-about>
                <h3>Conheça os Artesanatos da Cidade (ARTEBEN – ARTE NO QUILOMBO)</h3>
            </div></div>

        <div className='container animated' style={{ marginTop: 0 }}>
            <div className='content-img   left' style={{ marginRight: 20}} >
                <div className='box-img'>
                    <a href='https://www.facebook.com/arteben.sbs' target='_blank' rel="noreferrer">
                        <img
                            src={c4}
                            style={{height: '60vh'}}
                            alt="..." />
                    </a>
                    <a href="https://instagram.com/arteben.sbs"><h3>@arteben.sbs</h3></a>
                </div>
            </div>
             <div className='content-img   left'>
                    <div className='box-img'>
                        <a href='https://www.facebook.com/artenoquilombo/' target='_blank' rel="noreferrer">
                            <img
                                src={c5}
                                alt="..." />
                        </a>
                        <a href="https://instagram.com/artenoquilombo"><h3>@artenoquilombo </h3></a>
                    </div>
                </div>
        </div>

        <div className='container container-historia animated'>
            <div className='content-itens left' data-about>
                <h3>Galeria</h3>
                <div style={{ width: '80%', height: 50 }} />
                <Galery images={IMAGES} />
            </div>
        </div>
        <Footer />
    </>)
}

export default Cidade;