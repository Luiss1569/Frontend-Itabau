import React from 'react';

import Header from '../../components/Header'
import Carrossel from '../../components/Carrossel'

import c1 from '../../assets/img/carrossel/c1.jpg'
import c2 from '../../assets/img/carrossel/c2.jpg'
import c3 from '../../assets/img/carrossel/c3.jpg'

import i1 from '../../assets/img/index/i1.jpg'
import i2 from '../../assets/img/index/i2.jpg'


import './styles.css';
import { Link } from 'react-router-dom';

function Index() {

  return <>

    <Header />
    <Carrossel images={[c1,c2,c3]}/>
    <div className={'margin'}/>

    <div className='container'>
      <div className='content-img'> 
        <img src={i1} alt='picoles sem açucar'/>
      </div>
      <div className='content-itens'> 
        <h3>Picolés Orgânicos</h3>
        <label>Além de deliciosas guloseimas, alimentos saudáveis</label>
        <p>A linha de picolés orgânicos da Itabaú é para você que mantém uma alimentação saudável e valoriza 
          a qualidade de vida. Das matérias-primas ao processo de produção, nossos picolés levam as principais 
          certificações que regulam o segmento. Cultivo das frutas sem o uso de agrotóxicos, ausência de realçador 
          de sabores e produtos com muito mais frutas.</p>
        <Link to={'/picoles'} style={{textDecoration: 'none'}}><div className='button'>Ver sabores</div></Link>
      </div>
    </div>
    
    <div style={{width: '100%', height:500}}/>

  </>;  
}

export default Index;