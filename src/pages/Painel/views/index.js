import React from 'react';

import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Carrossel from '../../../components/Carrossel'
import { Link } from 'react-router-dom'

import bg from '../../../assets/img/matriz/bg.jpg'

function Lançamento() {
    window.scrollTo(0, 0)

    return (<>

        <Header />
        <Carrossel style={{ backgroundSize: 'cover ' }} images={[bg]} />
        <div className={'margin'} />
        <div className='container animated'>
            <div className='content-itens left'>
                <h3>Clientes</h3>
                <p>Adicionar, Atualizar ou apagar</p>
                <Link to={'/painel/cliente'} style={{ textDecoration: 'none' }}><div className='button'>Ver Clientes</div></Link>
            </div>
            <div className='content-itens left'>
                <h3>Lançamentos</h3>
                <p>Alterar Lançamentos</p>
                <Link to={'/painel/lancamentos'} style={{ textDecoration: 'none' }}><div className='button'>Adicionar Laçamentos</div></Link>
            </div>
        </div>
        <div className='container container-reverse animated' style={{ paddingTop: 50, paddingBottom: 100 }}>
            <div className='content-itens left' data-about>
                <h3>Pesquisa de Opinião</h3>
                <p>Visualizar Pesquisa</p>
                <Link to={'/painel/pesquisa'} style={{ textDecoration: 'none' }}><div className='button'>Ver Pesquisa</div></Link>
            </div>
            <div className='content-itens left' data-about>
                <h3>Matriz</h3>
                <p>Visualizar Mensagens direcionadas a Matriz</p>
                <Link to={'/painel/matriz'} style={{ textDecoration: 'none' }}><div className='button'>Ver Mensagens</div></Link>
            </div>
        </div>
        <Footer />
    </>)
}

export default Lançamento;