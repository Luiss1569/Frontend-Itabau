import React from 'react';

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Carrossel from '../../components/Carrossel'

import bg from '../../assets/img/ingredientes/bg.jpg'

import './style.css'

function Video() {
    
    React.useEffect(() => {
        window.scrollTo(0, 0)
        try {
            document.querySelectorAll('.animated div[data-about]')[0].removeAttribute('data-about');
            document.querySelectorAll('.animated div[data-about]')[0].removeAttribute('data-about');
        } catch (error) {
            console.log(error);
        }
      },[])

    return (<>

        <Header />
        <Carrossel style={{ backgroundSize: 'cover ' }} images={[bg]} />
        <div className={'margin'} />

        <div className='container container-historia animated'>
            <div className='content-itens left' data-about>
                <h3>Reportagens da Itabaú:</h3>
            </div>
        </div>

        <div className={'container container-vid animated'}>
            <div className='content-img left '>
                <iframe width="480" height="270" src="https://www.youtube.com/embed/8Yoytt2b-o0" title='1' frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className='content-itens right ' data-about>
                <h3>PROGRAMA MUNDO EMPRESARIAL</h3>
                <label>TV Band 09/07/2017</label>
            </div>
        </div>

        <div className={'container container-reverse container-vid animated'} style={{ backgroundColor: '#fff' }}>
            <div className='content-img left '>
                <iframe width="480" height="270" src="https://www.youtube.com/embed/E3M8C2wFm6U" title='2' frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className='content-itens right ' data-about='true'>
                <h3>NT Vale</h3>
                <label>01/10/2012</label>
            </div>
        </div>

        <div className={'container container-vid animated'}>
            <div className='content-img left '>
                <iframe width="480" height="270" src="https://www.youtube.com/embed/82PTJAqk_JA" title='3' frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className='content-itens left ' data-about='true'>
                <h3>Planeta Vanguarda</h3>
                <label>29/06/2012</label>
            </div>
        </div>

        <div className={'container container-reverse container-vid animated'} style={{ backgroundColor: '#fff' }}>
            <div className='content-img left ' >
                <iframe width="480" height="270" src="https://www.youtube.com/embed/YuYfanHipTA" title='4' frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className='content-itens right ' data-about='true'>
                <h3>Sincovat</h3>
                <label>30/09/2014</label>
            </div>
        </div>

        <div className={'container container-vid animated'}>
            <div className='content-img left '>
                <iframe width="480" height="270" src="https://www.youtube.com/embed/rTCtwOjV4QA" title='5' frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className='content-itens left ' data-about='true'>
                <h3>Programa Empresários de Sucesso</h3>
                <label>30/09/2014</label>
            </div>
        </div>

        <div className='container container-historia animated'>
            <div className='content-itens left' data-about>
                <h3>Curiosidades</h3>
            </div>
        </div>

        <div className={'container container-vid animated'}>
            <div className='content-img left '>
            <iframe width="480" height="270" src="https://www.youtube.com/embed/ygm0jjnbeIY" title='6' frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className='content-itens left ' data-about='true'>
                <h3>Ovos Orgânicos Yamaguishi</h3>
            </div>
        </div>

        <div className={'container container-reverse container-vid animated'} style={{ backgroundColor: '#fff' }}>
            <div className='content-img left '>
            <iframe width="480" height="270" src="https://www.youtube.com/embed/Wb3K76IFfWM" title='7' frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className='content-itens right ' data-about='true'>
                <h3>O que é um alimento Biodinâmico?</h3>
                <label>Reportagem feita por Orgânico Simples.</label>
            </div>
        </div>

        <div className={'container container-vid animated'}>
            <div className='content-img left '>
            <iframe width="480" height="270" src="https://www.youtube.com/embed/fdxPs0-gx2k" title='8' frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className='content-itens left ' data-about='true'>
                <h3>O que é agrofloresta?</h3>
                <label>Reportagem feita por Orgânico Simples.</label>
            </div>
        </div>

        <Footer />
    </>)
}

export default Video;