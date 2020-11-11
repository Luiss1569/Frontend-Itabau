import React from 'react';

import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Carrossel from '../../../components/Carrossel'

import bg from '../../../assets/img/historia_sorvete/bg.jpg'
import c1 from '../../../assets/img/historia_sorvete/c1.jpg'
import c2 from '../../../assets/img/historia_sorvete/c2.png'
import c3 from '../../../assets/img/historia_sorvete/c3.jpg'
import c4 from '../../../assets/img/historia_sorvete/c4.jpg'
import c5 from '../../../assets/img/historia_sorvete/c5.jpg'
import c6 from '../../../assets/img/historia_sorvete/c6.jpg'

import '../style.css'

function Curiosidades() {
    React.useEffect(() => {
        window.scrollTo(0, 0)
        try {
          document.querySelectorAll('.animated div[prime]')[0].removeAttribute('data-about');
        } catch (error) {
            console.log(error);
        }
      })

    return (<>

        <Header />
        <Carrossel style={{ backgroundSize: 'cover ' }} images={[bg]} />
        <div className={'margin'} />
        <div className='container container-historia animated'>
            <div className='content-itens left' prime data-about>
                <h3>Curiosidades divertidas sobre o sorvete</h3>
            </div>
        </div>

        <div className='container container-historia animated'>
            <div className='content-img right' data-about>
                <img src={c1} alt='img' />
            </div>
            <div className='content-itens left' data-about style={{ marginTop: 20 }}>
                <p>No interior do Brasil, durante muito tempo, o sorvete foi ignorado. O sertanejo se recusava a tomá-lo por ser frio demais, suspeitando que desequilibrava o calor interno.
                O imperador do Brasil D. Pedro II era louco por sorvete de pitanga.
                Não demorou muito para os sorvetes brasileiros ganharem um toque tropical, misturados a carambola, pitanga, jabuticaba, manga, caju e coco.
                Até o século XIX, o sorvete era considerado alimento de gente rica. As damas da nobreza chegavam a brigar entre si (puxar o cabelo e sair na unha), porque uma roubava da outra o mestre sorveteiro.
                O inventor da máquina de sorvetes foi o florentino Procópio Coltelli, que abriu em 1660 a primeira sorveteria de Paris (o Café Procope), ainda hoje o estabelecimento mais antigo da cidade.
                Diz a lenda que Carlos I, da Inglaterra (marido da neta de Catarina), pagava uma pensão vitalícia a seu sorveteiro exclusivo, com a condição de que ele não revelasse a receita para ninguém. Seus sorvetes, em forma de ovo, tinham a casca de baunilha e a gema de framboesa.
                Outra lenda famosa é a do imperador Nero de Roma, que, de tão louco pela iguaria, mandava um exército de escravos escalar até o alto das montanhas para colher neve e depois misturá-la com mel e frutas.</p>
            </div>
        </div>

        <div className='container container-historia animated'>
            <div className='content-itens left' data-about>
                <h3>Aprenda a falar "sorvete" em outras línguas</h3>
                <div style={{ display: 'flex' }}><h4>Português:</h4><label style={{ marginTop: 20, marginLeft: 5 }}>sorvete</label> </div>
                <div style={{ display: 'flex' }}> <h4>Inglês:</h4><label style={{ marginTop: 20, marginLeft: 5 }}>ice cream</label> </div>
                <div style={{ display: 'flex' }}><h4>Espanhol:</h4><label style={{ marginTop: 20, marginLeft: 5 }}>helado</label> </div>
                <div style={{ display: 'flex' }}><h4>Francês:</h4><label style={{ marginTop: 20, marginLeft: 5 }}>crême glacée</label> </div>
                <div style={{ display: 'flex' }}><h4>Italiano:</h4><label style={{ marginTop: 20, marginLeft: 5 }}>gelato</label> </div>
                <div style={{ display: 'flex' }}><h4>Alemão:</h4><label style={{ marginTop: 20, marginLeft: 5 }}>eiscreme</label> </div>
            </div>
        </div>

        <div className='container container-historia animated'>
            <div className='content-itens left' data-about>
                <h3>As maiores invenções com sorvete!</h3>
                <h4>Picolé</h4>
            </div>
            <div className='content-img right' data-about>
                <img src={c2} alt='img' />
            </div>
            <div className='content-itens left' data-about style={{marginTop: 0}}>
                <p>Foi inventado em 1905 por um menino de 11 anos chamado Frank Epperson, que esqueceu no quintal um copo de refresco com uma 
                    colher dentro durante uma noite de inverno. De manhã, ele notou que a bebida e a colher haviam congelado juntas...</p>
            </div>
        </div>

        <div className='container container-historia animated'>
            <div className='content-itens left' data-about style={{marginTop: 0}}>
                <h4>Casquinha de sorvete</h4>
            </div>
            <div className='content-img right' data-about>
                <img src={c3} alt='img' />
            </div>
            <div className='content-itens left' data-about style={{marginTop: 0}}>
                <p>A casquinha foi inventada por um vendedor de waffles de origem Síria, E. A. Hamwi, que, em 1904, teve a idéia de enrolar 
                    waffles em forma de cone. Mas por quê? Simples: o vendedor de sorvetes que dividia o carrinho com Hamwi cansou-se de ver seus 
                    copos e pratinhos sendo roubados pelos clientes.</p>
            </div>
        </div>

        <div className='container container-historia animated'>
            <div className='content-itens left' data-about style={{marginTop: 0}}>
                <h4>Sabores tropicais</h4>
            </div>
            <div className='content-img right' data-about>
                <img src={c4} alt='img' />
            </div>
            <div className='content-itens left' data-about style={{marginTop: 0}}>
                <p>Os brasileiros criaram sorvetes de sabores tropicais como carambola, pitanga, jabuticaba, manga, caju e coco.</p>
            </div>
        </div>

        <div className='container container-historia animated'>
            <div className='content-itens left' data-about style={{marginTop: 0}}> 
                <h4>Sundae e Banana Split</h4>
            </div>
            <div className='content-img right' data-about>
                <img src={c5} alt='img' />
            </div>
            <div className='content-itens left' data-about style={{marginTop: 0}}>
                <p>Inventados nos Estados Unidos, em 1890.</p>
            </div>
        </div>

        <div className='container container-historia animated'>
            <div className='content-itens left' data-about style={{marginTop: 0}}>
                <h4>Ice Cream Soda</h4>
            </div>
            <div className='content-img right' data-about style={{maxWidth: 200}}>
                <img src={c6} alt='img' />
            </div>
            <div className='content-itens left' data-about style={{marginTop: 0}}>
                <p>Inventado em 1879, nos Estados Unidos, por Fred Sanders.</p>
            </div>
        </div>
        <Footer />
    </>)
}

export default Curiosidades;