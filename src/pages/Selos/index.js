import React from 'react';

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Carrossel from '../../components/Carrossel'

import bg from '../../assets/img/selos/bg.jpg'

import s1 from '../../assets/img/selos/s1.jpg'
import s2 from '../../assets/img/selos/s2.jpg'
import s3 from '../../assets/img/selos/s3.jpg'

import './style.css'

function Selos() {
    window.scrollTo(0, 0)

    return (<>

        <Header />
        <Carrossel style={{ backgroundSize: 'cover ' }} images={[bg]} />
        <div className={'margin'} />
        <div className='container animated'>
            <div className='content-img left ' data-about='true'>
                <img src={s1} alt='picoles sem açucar' style={{ width: '310px', height: "auto", marginLeft: '10%' }} />
            </div>

            <div className='content-itens right ' data-about='true'>
                <h3>IBD</h3>
                <label>Associação de Certificação Instituto Biodinâmico</label>
                <p>O IBD – Associação de Certificação Instituto Biodinâmico é uma organização que desenvolve
                atividades de certificação de produtos orgânicos e biodinâmicos. Foi instituída em 1991,
                desmembrando-se do então Instituto Biodinâmico de Desenvolvimento Rural.
                E orgulha-se em ser a maior certificadora da América Latina e a única certificadora
                brasileira de produtos orgânicos com credenciamento IFOAM (mercado internacional),
                ISO/IEC 17065 (mercado europeu-regulamento CE 834/2007), Demeter (mercado internacional),
                USDA/NOP (mercado norte-americano) e aprovado para uso do selo SISORG (mercado brasileiro),
                       o que torna seu certificado aceito globalmente.</p>
            </div>
        </div>

        <div className='container animated'>
            <div className='content-img left ' data-about='true'>
                <img src={s2} alt='picoles sem açucar' style={{ width: '310px', height: "auto", marginLeft: '10%' }} />
            </div>

            <div className='content-itens right ' data-about='true'>
                <h3>SISORG</h3>
                <label>O Sistema Brasileiro de Avaliação de Conformidade Orgânica</label>
                <p>
                    O Sistema Brasileiro de Avaliação de Conformidade Orgânica (SISORG), administrado pelo
                    Ministério da Agricultura, Pecuária e Abastecimento – MAPA, do governo brasileiro, foi
                    criado para identificar e controlar a produção nacional de alimentos orgânicos, quanto a sua
                    origem e processo produtivo.
                    Trata-se de uma estrutura operativa constituída de órgãos da administração pública federal e
                    pelos Organismos de Avaliação da Conformidade – OAC (estes, formados e autorizados após
                    Certificação por Auditoria e Sistemas Participativos de Garantia, credenciados pelo Ministério).
                    Mediante convênios, os Estados e o Distrito Federal poderão ingressar no SisOrg.
                </p>
            </div>
        </div>

        <div className='container container-historia animated'>
            <div className='content-itens right ' data-about='true'>
                <p>
                    O selo público oficial que passou a ser usado para identificar e controlar a produção nacional de orgânicos a partir de 1 de janeiro de 2011.
                    O produto orgânico, ou alimento orgânico, tem de ser produzido em um ambiente de produção orgânica, realizada com base nos princípios agroecológicos que contemplam o uso responsável do solo, da água, do ar e dos demais recursos naturais, respeitando as relações sociais e culturais.
                </p>
                <p>Na agricultura orgânica não é permitido o uso de substâncias que coloquem em risco a saúde humana e o meio ambiente. Não são utilizados fertilizantes sintéticos solúveis, agrotóxicos e transgênicos.
</p>
                <p>O selo visa identificar os produtos orgânicos em que a avaliação da conformidade foi realizada por organismos credenciados pelo Ministério da Agricultura, Pecuária e Abastecimento. A folha verde como elemento principal remete à pureza do produto, por ser a parte mais delicada da planta. Aproveitamos a letra "O" da palavra orgânico para sugerir o sol por trás do horizonte, principal fonte de energia para o plantio. Um fio de contorno preto delimita irregularmente a figura, acompanhando seu desenho. O fundo que preenche o interior do fio de contorno deve ser branco.</p>
                <p>Veja abaixo o Certificado emitido pelo IBD à Itabaú:</p>
            </div>
        </div>

        <div className='container container-historia animated' style={{marginTop:-20}}>
            <div className='content-img left ' data-about='true'>
                <img src={s3} alt='picoles sem açucar'/>
            </div>
        </div>

        <Footer />
    </>)
}

export default Selos;