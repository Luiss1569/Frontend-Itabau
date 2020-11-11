import React from 'react';

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Carrossel from '../../components/Carrossel'

import { Link } from 'react-router-dom'

import bg from '../../assets/img/ingredientes/bg.jpg'
import i1 from '../../assets/img/ingredientes/s1.png'

import './style.css'

function Ingredientes() {
    
    React.useEffect(() => {
        window.scrollTo(0, 0)
        try {
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
                <h3>Nossos ingredientes</h3>
            </div>
        </div>

        <div className='container container-ingre animated' data-about style={{marginTop: -30}}>
            <h4>Nossos ingredientes Açúcar Orgânico</h4>
            <label>É açúcar cristal extraído da cana, com plantio orgânico seguindo as formas da LEI 10.831.</label>

            <h4>Edulcorante natural de steviol</h4>
            <label>É um adoçante natural, proveniente da planta stevia.</label>

            <h4>Espessante goma guar</h4>
            <label>Guar é uma goma obtida das sementes da Cyamopsis tetragonolobus ou da Cyamopsis psoraloides,
                 nativas da Índia. Cultivada também no Paquistão, é utilizada na indústria de alimentos.</label>

            <h4>Extrato de sabugueiro</h4>
            <label>É utilizado para dar tonalidade ao picolé. Sabugueiro é um semi-arbusto.</label>

            <h4>Extrato de cenoura preta</h4>
            <label>É utilizado para dar tonalidade ao picolé. Traz todas as propriedades da cenoura, como
                beta-caroteno.</label>

            <h4>Leite pasteurizado integral e/ou reconstituído</h4>
            <label>Usamos leite integral tipo A, in natura, pasteurizado, e ou leite em pó integral.</label>

            <h4>Maltitol</h4>
            <label style={{wordWrap: 'break-word', width: '80%'}}>O Maltitol é um edulcorante natural obtido através da hidrogenação da Maltose. Esse
            ingrediente é um dos principais substitutos do açúcar nas formulações em geral para recuperar
            corpo mantendo as características do produto regular. Apresenta ainda excelente sabor e
            estabilidade térmica, não é cariogênio, apto para diabéticos e possui cerca de 70% do dulçor do
                 açúcar. Fonte: http://tovani.com.br/website/ingredientes/</label>

            <h4>Polidextrose</h4>
            <label>É um ingrediente já amplamente utilizado para a substituição do açúcar nos produtos
                alimentícios, sendo também reconhecido pela ANVISA como fibra alimentar. Seus benefícios são:</label>
            <ul>
                <li>90% fibra solúvel;</li>
                <li>Apresenta propriedades prebióticas;</li>
                <li>Contém apenas 1 kcal/g;</li>
                <li>Agente de corpo para a substituição do açúcar e gorduras;</li>
                <li>Alta solubilidade em água;</li>
                <li>Estável em pH ácido;</li>
                <li>Não tem sabor residual podendo também ser aplicado em produtos salgados.</li>
            </ul>
            <label style={{wordWrap: 'break-word', width: '90%'}}>Fonte: http://tovani.com.br/website/ingredientes/</label>

            <h4>Farinha de Arroz Integral</h4>
            <label>Farinha de arroz biodinâmica.</label>

            <h4>Pasta de Amendoim Torrado</h4>
            <label>A pasta de amendoim é um alimento à base de amendoim, que pode ser ou não adicionada de outros
            ingredientes. A produção começa com os critérios de seleção de fornecedores de matérias-primas,
            as matérias-primas dos nossos produtos recebem cuidados especiais, que incluem rigorosa seleção
            de grãos, análises físico-químicas, análises microbiológicas e controle de processo produtivo.
            Todo esse rigor objetiva a aprovação pelo Controle de Qualidade, garantindo todos os ingredientes
                como seguros e nutritivos.</label>

            <h4>Liquor de Cacau ou Massa de Cacau</h4>
            <label>É produzido a partir de grãos de cacau que foram fermentados, torrados, e separados de suas
            peles. Os grãos são moídos em massa de cacau (pasta de cacau). A massa é fundida para se tornar
            o licor, e o licor é arrefecido e moldado em blocos conhecidos como chocolate cozido sem açúcar
                 (chocolate amargo).</label>

            <h4>Poliglicerol Poliricinoleato</h4>
            <label>Contém nos ingredientes da barra de chocolate meio amargo e no chocolate branco que compramos,
            a barra de chocolate utilizamos para produzir recheios para os picolés naturais de: Flocos, Morango
            com flocos de chocolate e Chocolate Branco. O Poliglicerol Poliricinoleato é um emulsificante natural
                  extraído da mamona.</label>
        </div>

        <div className=' container animated'  style={{paddingBottom: 200}}>
            <div className='content-img left ' data-about='true'>
                <img src={i1} alt='picoles sem açucar' style={{width: '100%', marginLeft: '10%'}} />
            </div>
            <div className='content-itens right' data-about='true'>
                <h3>Nos mande uma mensagem, será um prazer atender a sua solicitação.</h3>
                <Link to={'/matriz'} style={{ textDecoration: 'none' }}><div className='button'>Enviar pedido</div></Link>
            </div>
        </div>


        <Footer />
    </>)
}

export default Ingredientes;