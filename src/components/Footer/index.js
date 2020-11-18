import React from 'react';
import { Link } from 'react-router-dom'

import logo from '../../assets/img/footer/logo_completo.png'

import './styles.css';

function Footer() {

    return <>

        <div className='container-footer'>
            <div className='content-img rigth' data-about='true'>
                <img src={logo} alt='logo' />
            </div>
            <div className='content-itens left' data-about='true'>
                <Link to='/home' style={{ textDecoration: 'none', color: '#f5f5f5', fontSize: 12 }}>CASA</Link>
                <Link to='/historia' style={{ textDecoration: 'none', color: '#f5f5f5', fontSize: 12 }}>A ITABAÚ</Link>
                <Link to='/lancamentos' style={{ textDecoration: 'none', color: '#f5f5f5', fontSize: 12 }}>SORVETES</Link>
                <Link to='/selos' style={{ textDecoration: 'none', color: '#f5f5f5', fontSize: 12 }}>SAIBA MAIS</Link>
                <Link to='/encontrar' style={{ textDecoration: 'none', color: '#f5f5f5', fontSize: 12 }}>ONDE ENCONTRAR</Link>
                <Link to='/matriz' style={{ textDecoration: 'none', color: '#f5f5f5', fontSize: 12 }}>NOSSA CIDADE</Link>
                <Link to='/painel' style={{ textDecoration: 'none', color: '#f5f5f5', fontSize: 12 }}>PAINEL</Link>
            </div>
            <span>Copyright &copy; {1900 + new Date().getYear()} , todos os direitos reservados Itabaú - Site Desenvolvido por <a href='https://github.com/luiss1569' target='_blank' rel="noreferrer">Luis Ricardo</a></span>
        </div>
    </>;
}

export default Footer;