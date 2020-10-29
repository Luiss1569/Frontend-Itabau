import React from 'react';

import Header from '../../components/Header'
import Carrossel from '../../components/Carrossel'

import c1 from '../../assets/img/carrossel/c1.jpg'
import c2 from '../../assets/img/carrossel/c2.jpg'
import c3 from '../../assets/img/carrossel/c3.jpg'

import './styles.css';

function Index() {

  return <>

    <Header />
    <Carrossel images={[c1,c2,c3]}/>
    <div style={{height:5000}}/>
  </>;
}

export default Index;