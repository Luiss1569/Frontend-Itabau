import React from 'react';

import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Carrossel from '../../../components/Carrossel'

import bg from '../../../assets/img/massa/bg.jpg'
import logo from '../../../assets/img/logo-itabau-massa.png'

import Lottie from 'react-lottie';
import animationNatal from '../../../assets/animations/natal.json'

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

    const tradicionais = ["Abacaxi com Hortelã", "Abacaxi Suiço(ao Leite)", "Brigadeiro", "Cappucino", "Chocolate", "Chocolate Alemão(com amendoim)", "Chocolate Branco", 
    "Chocolate Branco c/ Tangerina", "Chocolate Suiço", "Coco", "Coco com Abobora", "Coco Queimado", "Coco Queimado", "Coco Mestiço", "Creme", "Creme com Ameixa", 
    "Cupuaçu", "Doce de Leite", "Flocos", "Frutas Vermelhas", "Iogurte Natural", "Iogurte com Amora Preta", "Iogurte com Damasco", "Leite Condensado", 
    "Leite Cond. com Amarula(com teor alcoólico)", "Leite Cond. com Morango", "Limão Suíço com Mel", " Menta com Flocos de Chocolate", "Milho Verde", "Morango", 
    "Mousse de Limão", "Maracujá Trufado", "Negresco", "Ninho Trufado", "Ovomaltine", "Passas ao Rum", "Pé de Moleque", "Pistache (com castanha de cajú)", "Queijo", 
    "Romeu & Julieta", "Sensação", "Uva ao Creme", "Yakult" ]

    const veganos = ["Açaí", "Amora", "Chocolate 70% Cacau", "Coco", "Framboesa", "Limão", "Tangerina", "Uva", "Maracujá(Zero Açúcar)", "Açaí(Zero Açúcar)"]

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
               <List title="Tradicionais" data={tradicionais} color="rgba(199,210,162, 0.1)" colorTitle="rgb(162,180,99)" footer={
                    <div style={{display: 'flex', flexDirection: 'row', width: 'fit-content', height: 'fit-content', margin: 'auto'}}>
                    <Lottie options={{
                    loop: true,
                    autoplay: true,
                    animationData: animationNatal,
                    rendererSettings: {
                        preserveAspectRatio: 'xMidYMid slice'
                    }
                }}
                    height={75}
                    width={75} />
                    <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center'}}>
                        <h5 style={{color: 'rgb(162,180,99)', margin: 0 , fontSize: 'clamp(16px, 1vw + 3px, 25px)' }}>Panettone e Chocotone</h5>
                        <h6 style={{fontSize: 'clamp(14px, 1vw - 2px, 21px)', color: 'tomato', marginTop: -2}}>Edição limitada em Novembro e Dezembro</h6>
                    </div>
                     <Lottie options={{
                    loop: true,
                    autoplay: true,
                    animationData: animationNatal,
                    rendererSettings: {
                        preserveAspectRatio: 'xMidYMid slice'
                    }
                }}
                    height={75}
                    width={75} />
                </div>
              

               }/>
                 <List title="Sem Açúcar" data={acucar}  color="rgba(216,154,136, 0.1)" colorTitle="rgb(57,86,190)"/>
                 <List title="Veganos" data={veganos}  color="rgba(236,183,103, 0.1)" colorTitle="rgb(223,183,103)" />
                 <List title="Açaí e Cupuaçu" data={["Açaí", "Cupuaçu", "Açai(Zero Açúcar)"]}  color="rgba(151,105,149, 0.1)" colorTitle="rgb(82,5,79)"/>
            </div>
        </div>

        <Footer />
    </>)
}

export default MassaPremium;