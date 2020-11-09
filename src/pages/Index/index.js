import React, { useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom'
import api from '../../services/api'

import Header from '../../components/Header'
import Carrossel from '../../components/Carrossel'
import Footer from '../../components/Footer'
import Location from '../../components/Location'

import Lottie from 'react-lottie';

import animationLocation from '../../assets/animations/location-finding.json'
import animationIce from '../../assets/animations/ice-cream.json'
import animationFacebook from '../../assets/animations/facebook.json'
import animationInstagram from '../../assets/animations/instagram.json'
import iceLoad from '../../assets/animations/iceLoad.json'

import c1 from '../../assets/img/carrossel/c1.jpg'
import c2 from '../../assets/img/carrossel/c2.jpg'
import c3 from '../../assets/img/carrossel/c3.jpg'

import i1 from '../../assets/img/index/i1.jpg'
import i2 from '../../assets/img/index/i2.jpg'
import i3 from '../../assets/img/index/i3.jpg'
import i4 from '../../assets/img/index/i4.jpg'
import familia from '../../assets/img/index/familia.png'


import './styles.css';
import { Link } from 'react-router-dom';

function Index() {
  const location = useLocation()
  const [iceAnimation, setIceAnimation] = useState(location.pathname === '/home' ? true : false)
  const [load, setLoad] = useState(location.pathname === '/home' ? false : true)
  const [lat, setLat] = useState(null)
  const [long, setLong] = useState(null)
  const [locations, setLocations] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    setTimeout(() => { setLoad(false) }, 3000)
    setTimeout(() => { setIceAnimation(true) }, 5000)
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude)
      setLong(position.coords.longitude)
    });
    try {
      document.querySelectorAll('.animated div[data-about]')[1].removeAttribute('data-about');
      document.querySelectorAll('.animated div[data-about]')[0].removeAttribute('data-about');
    } catch (e) {
      console.log(e);
    }
    setTimeout(function () {
      document.querySelectorAll('.container-ice[visible]').forEach(div => {
        div.removeAttribute('visible')
      });
    }, 6000)
  })

  useMemo(() => {
    console.log(lat, long);
    async function getLocations() {

      if (lat & long) {
        const response = await fetch(`${api}/php/cliente/get.php?lat=${lat}&long=${long}&limit=5`, {
          method: 'get',
        }).then(function (response) {
          return response.json();
        })
        if (response.data) {
          setLocations([])
        } else {
          setLocations(response)
        }
        console.log(response);
      }
    }
    getLocations()
    // eslint-disable-next-line
  }, [long])

  return <>
    <Header />
    <Carrossel images={[c1, c2, c3]} />
    <div className={'margin'} />

    <div className={'container-ice'} visible='true'>
      <Lottie options={{
        loop: false,
        autoplay: iceAnimation,
        animationData: animationIce,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      }}
        height={300}
        width={200} />

    </div>

    <div className='container animated'>
      <div className='content-img left ' data-about='true'>
        <img src={i1} alt='picoles sem açucar' />
      </div>

      <div className='content-itens right ' data-about='true'>
        <h3>Picolés Orgânicos</h3>
        <label>Além de deliciosas guloseimas, alimentos saudáveis</label>
        <p>A linha de picolés orgânicos da Itabaú é para você que mantém uma alimentação saudável e valoriza
        a qualidade de vida. Das matérias-primas ao processo de produção, nossos picolés levam as principais
        certificações que regulam o segmento. Cultivo das frutas sem o uso de agrotóxicos, ausência de realçador
          de sabores e produtos com muito mais frutas.</p>
        <Link to={'/picoles'} style={{ textDecoration: 'none' }}><div className='button'>Ver sabores</div></Link>
      </div>
    </div>

    <div className=' container container-reverse animated'>
      <div className='content-img left ' data-about='true'>
        <img src={i2} alt='picoles sem açucar' />
      </div>
      <div className='content-itens right' data-about='true'>
        <h3>Picolés Recheados</h3>
        <label>Aquele picolé para deixar seu dia incrível</label>
        <p>O picolé natural recheado é feito com os mesmo princípios do picolé natural, sem adição de aromas
        artificiais, corantes e conservante, porém colocamos neles recheios magníficos, que lhe proporciona
          um sensação inesquecível, e impossível provar somente um.</p>
        <Link to={'/picoles'} style={{ textDecoration: 'none' }}><div className='button'>Ver sabores</div></Link>
      </div>
    </div>

    <div className='container animated'>
      <div className='content-img left ' data-about='true'>
        <img src={i3} alt='picoles sem açucar' />
      </div>

      <div className='content-itens right' data-about='true'>
        <h3>Picolés Naturais</h3>
        <label>Pra você que não abre mão da qualidade</label>
        <p>Com 0% de utilização de aditivos artificiais, contamos com uma extensa linha de deliciosos sabores
           naturais, que utilizam matérias-primas da mais alta qualidade.</p>
        <Link to={'/picoles'} style={{ textDecoration: 'none' }}><div className='button'>Ver sabores</div></Link>
      </div>
    </div>

    <div className='container container-map animated' style={{ backgroundColor: '#f7f7f7' }}>
      <div className='content-itens right' data-about='true'>
        <Lottie options={{
          loop: true,
          autoplay: true,
          animationData: animationLocation,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
          }
        }}
          height={200}
          width={200} />
        <h3>Onde comprar sorvetes Itabaú?</h3>
        <Link to={'/encontrar'} style={{ textDecoration: 'none' }}><div className='button'>Pesquisar Endereço</div></Link>
      </div>

    </div>
    {locations ? (
      <>
        <div className='container container-reverse container-location animated' style={{ paddingBottom: 70 }}>
          <div className="content-itens">
            <h3>Locais Proximos</h3>
          </div>
          <div className='content-location  galery right' style={{ padding: 0, marginTop: 20 }}>
            {<Location locations={locations} />}
          </div>
        </div>
      </>
    ) : (
        <></>
      )
    }

    <div className='container animated'>
      <div className='content-img left ' data-about='true'>
        <img src={i4} alt='picoles sem açucar' />
      </div>

      <div className='content-itens right' data-about='true'>
        <h3>Sorvetes de Massa</h3>
        <label>Pra você que não abre mão da qualidade</label>
        <p>A Itabaú também conta com uma linha especial de Sorvetes no formato Massa Premium, com uma grande
        variedade e deliciosos sabores, ainda com a mesma qualidade da produção dos picolés, pois são feitos
        com produtos selecionados, e em sua calda base não é adicionado nenhum tipo de gordura, e todos são
            adoçados com açúcar orgânico.</p>
        <Link to={'/picoles'} style={{ textDecoration: 'none' }}><div className='button'>Ver sabores</div></Link>
      </div>
    </div>


    <div className="container  container-vid animated">
      <div className='content-itens right' data-about='true'>
        <h3>Orgânico Natural e Saudável</h3>
        <Link to={'/videos'} style={{ textDecoration: 'none' }}><div className='button'>Ver todos os vídeos</div></Link>
      </div>

      <div className='content-img left' data-about='true'>
        <Link to=''>
          {/* eslint-disable-next-line*/}
          <iframe src="//www.youtube.com/embed/8Yoytt2b-o0?feature=youtu.be&amp;wmode=transparent"
            allowfullscreen="" className="uk-responsive-width" width="480" height="270">

          </iframe>
        </Link>
      </div>

    </div>

    <div className="container container-familia animated">
      <div className='content-itens left' data-about='true'>
        <h3>Sorvetes saudavéis feitos pela nossa <strong>FAMÍLIA</strong> em</h3>
        <p>São Bento do Sapucaí-SP</p>
      </div>
      <div className='content-img right' data-about='true'>
        <img src={familia} alt='familia' />
      </div>
    </div>

    <div className='container container-social animated'>
      <div className='content-itens left' data-about='true'>
        <h3>Junte-se à família Itabaú</h3>
        <p>Curta e acompanhe a Itabaú nas principais redes sociais, mande seus comentários, críticas,
          sugestões, dúvidas e fique por dentro de todas as novidades. Seja muito bem vindo a nossa família.</p>
        <div style={{ display: 'flex', flexDirection: 'row', flex: 1, justifyContent: 'center' }}>
          <a href='https://www.facebook.com/ItabauSorvete' target='_blank' rel="noreferrer">
            <div style={{ pointerEvents: 'none' }}>
              <Lottie options={{
                loop: true,
                autoplay: true,
                animationData: animationFacebook,
                rendererSettings: {
                  preserveAspectRatio: 'xMidYMid slice'
                }
              }}
                height={100}
                width={100} />
            </div>
          </a>
          <a href='https://www.instagram.com/itabau_sorvetes/' target='_blank' rel="noreferrer">
            <div style={{ pointerEvents: 'none' }}>
              <Lottie options={{
                loop: true,
                autoplay: true,
                animationData: animationInstagram,
                rendererSettings: {
                  preserveAspectRatio: 'xMidYMid slice'
                }
              }}
                height={100}
                width={100} />
            </div>
          </a>
        </div>
      </div>
    </div>

    <Footer />

    {
      load ? (<div style={{ position: 'fixed', backgroundColor: '#fff', top: 0, bottom: 0, left: 0, right: 0, zIndex: 2010, display: 'flex', flex: 1, width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
        <Lottie options={{
          loop: true,
          autoplay: true,
          animationData: iceLoad,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
          }
        }}
          height={400}
          width={400} />
      </div>) : ""
    }

  </>;
}

export default Index;