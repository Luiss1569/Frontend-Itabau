import React from 'react';

import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Carrossel from '../../../components/Carrossel'

import bg from '../../../assets/img/massa/bg4.jpg'
import logo from '../../../assets/img/logo-itabau-massa.png'


import List from './list'

function MassaPremium() {
    React.useEffect(() => {
        window.scrollTo(0, 0)
        try {
            document.querySelectorAll('.animated div[data-about]')[0].removeAttribute('data-about');
            document.querySelectorAll('.animated div[data-about]')[0].removeAttribute('data-about');
        } catch (error) {
            console.log(error);
        }
      },[])

    const acucar = ["Açaí vegano", "Baunilha com creme de avelã e cacau", "Chocolate", "Coco", "Coco Queimado", "Leite Condensado com Amora", "Maracujá Vegano", "Morango"]

    return (<>

        <Header />
        <Carrossel style={{ backgroundSize: 'cover ' }} images={[bg]}><h3>Massa Premium <img src={logo} alt="logo" style={{width: 100, position: 'absolute', bottom: 0, right: -120}}/></h3>
        </Carrossel>
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
               <List title="Sabores" data={acucar}/>
            </div>
        </div>

        <Footer />
    </>)
}

export default MassaPremium;