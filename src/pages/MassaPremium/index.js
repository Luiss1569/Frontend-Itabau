import React from 'react';

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Carrossel from '../../components/Carrossel'

import bg from '../../assets/img/massa/bg.jpg'

import './style.css'

function MassaPremium() {
    window.scrollTo(0, 0)

    const sabores = ['Abacaxi com hortelã', 'Abacaxi Suíço (ao leite)', 'Banana, mel e aveia', 'Brigadeiro',
        'Cappuccino', 'Chocolate', 'Chocolate alemão (chocolate com amendoim)', 'Chocolate Branco', 'Chocolate suíço',
        'Coco', 'Coco com abóbora', 'Coco com maracujá', 'Coco mestiço', 'Coco queimado', 'Creme', 'Creme com ameixa',
        'Doce de leite', 'Flocos', 'Frutas vermelhas', 'Iogurte Natural', 'Iogurte com amora preta', 'Iogurte com damasco',
        'Leite condensado', 'Leite condensado com Amarula (com teor alcoólico)', 'Leite condensado com morango',
        'Limão suíço com mel', 'Maracujá trufado', 'Menta com flocos de chocolate', 'Milho verde', 'Morango', 'Mousse de limão',
        'Mousse de maracujá', 'Negresco', 'Ovomaltine', 'Passas ao rum', 'Pé de moleque', 'Pistache (com castanha de caju)',
        'Prestígio', 'Queijo', 'Sensação (morango com flocos de chocolate)', 'Uva ao creme']

    return (<>

        <Header />
        <Carrossel style={{ backgroundSize: 'cover ' }} images={[bg]}><h3>Massa Premium</h3></Carrossel>
        <div className={'margin'} />
        <div className='container container-massa animated'>
        </div>
        <div className='container container-massa animated'>
            <div className='content-itens content-box right' data-about>
                <h3>Sorvete de Massa</h3>
                <p>  Itabaú – A Energia da montanha, é uma linha especial de Sorvetes no formato Massa Premium, com uma grande variedade de 
                    deliciosos sabores. Há na composição somente produtos selecionados com qualidade comprovada, em sua calda base não é 
                    adicionado nenhum tipo de gordura vegetal,  utilizamos amido de batata no lugar da gordura para deixar o sorvete mais leve e
                     mais saudável,  e há em  açúcar orgânico. Nos sabores a seguir: Chocolate, Chocolate Suíço, Chocolate Branco, Flocos,
                      Sensação e Menta com flocos de chocolate, que contém flocos de chocolate em seus recheios, utilizamos gordura de palma 
                      orgânica, que é misturado junto ao chocolate meio amargo e cacau em pó, e no caso do chocolate branco é mistura gordura 
                      de palma orgânica ao chocolate branco.</p>
            </div>
        </div>
        <div className='container container-massa animated'>
            <div className='content-itens left' style={{ backgroundColor: '#fff' }} data-about>
                <h4>Massa Premium (cx de 7 litros com 3,5 kg em média)</h4>
                <ul>
                    {sabores.map(sabor => {
                        return (
                            <li>{sabor}</li>
                        )
                    })}
                </ul>
                <h4>Sem Açúcar</h4>
                <ul>
                    <li>Chocolate</li>
                    <li>Leite Condensado</li>
                    <li>Morango</li>
                </ul>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <h4>Validade:</h4><p>1 anos após a data de fabricação.</p>
                </div>
            </div>
        </div>

        <Footer />
    </>)
}

export default MassaPremium;