import React from 'react';

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Carrossel from '../../components/Carrossel'

import bg from '../../assets/img/frutas/bg.jpg'
import f1 from '../../assets/img/frutas/f1.jpg'
import f2 from '../../assets/img/frutas/f2.jpg'
import f3 from '../../assets/img/frutas/f3.jpg'
import f4 from '../../assets/img/frutas/f4.jpg'
import f5 from '../../assets/img/frutas/f5.jpg'
import f6 from '../../assets/img/frutas/f6.jpg'
import f7 from '../../assets/img/frutas/f7.jpg'
import f8 from '../../assets/img/frutas/f8.jpg'
import f9 from '../../assets/img/frutas/f9.jpg'
import f10 from '../../assets/img/frutas/f10.jpg'
import f11 from '../../assets/img/frutas/f11.jpg'
import f12 from '../../assets/img/frutas/f12.jpg'
import f13 from '../../assets/img/frutas/f13.jpg'
import f14 from '../../assets/img/frutas/f14.jpg'
import f15 from '../../assets/img/frutas/f15.jpg'
import f16 from '../../assets/img/frutas/f16.jpg'
import f17 from '../../assets/img/frutas/f17.jpg'
import f18 from '../../assets/img/frutas/f18.jpg'
import f19 from '../../assets/img/frutas/f19.jpg'
import f20 from '../../assets/img/frutas/f20.jpg'

import './style.css'

function Frutas() {

    const frutasInfo = [
        {
            name: 'Abacaxi',
            desc: 'O abacaxi é o fruto de uma planta perene nativa da América do sul, e é conhecido também como ananás, como é chamado nos países de língua espanhola. Uma fruta rica em vitaminas C, B1, B6, ferro, magnésio e fibras, além de ajudar na digestão.',
            img: f1,
            fonte: ['http://brasilescola.uol.com.br/frutas/abacaxi.htm', 'http://www.suapesquisa.com/frutas/abacaxi.htm']
        },
        {
            name: 'Abóbora',
            desc: 'Nome científico: Cucúrbita moschata A abóbora ou jerimum, é fruto da aboboreira e tem seu nome atribuído a várias espécies de plantas da família Cucurbitaceae. Nativa da América do Sul, ela é cultivada em todo o mundo por ser uma fruta extremamente nutritiva e saborosa. Aqui no Brasil as abóboras são cultivadas há muito tempo e já faziam parte da alimentação dos indígenas, bem antes da colonização. O fruto que é tão rico em sabor, é igualmente rico em nutrientes que beneficiam nosso organismo. Ele é boa fonte de betacaroteno, vitamina C e vitamina E-que têm propriedades antioxidantes-e de vitaminas do complexo B. Ainda é rico em fibras e fonte de cálcio, ferro, fósforo e potássio.',
            img: f2,
            fonte: ['http://www.conquistesuavida.com.br/ingredient/abobora_i545202', 'http://www.infoescola.com/frutas/abobora/']
        },
        {
            name: 'Açaí',
            desc: 'A árvore que produz o açaí chama-se açaizeiro. É uma espécie de palmeira encontrada no Amazonas, Pará, Maranhão, Acre e Amapá. Rico em vitaminas E, B1, B2, B3 e C, fibras, cálcio, fósforo, ferro, minerais e potássio, além de ácidos graxos, o açaí possui pigmentos que dão à fruta aquela cor roxa intensa e estes, possuem ingredientes que são antioxidantes e, de tão nutritivos, fazem dele um dos alimentos mais saudáveis que existem!',
            img: f3,
            fonte: [' https://www.remedio-caseiro.com/o-poderoso-acai-e-seus-beneficios-a-saude/', 'http://www.portalsaofrancisco.com.br/alimentos/acai']
        },
        {
            name: 'Amora',
            desc: 'A amora é fruto da amoreira silvestre ou silveira, uma planta medicinal com propriedades anti-inflamatória e antioxidante, é uma fruta tropical encontrada na Asia, Africa e é uma das frutas vermelhas mais apreciadas no mundo, com uma boa fonte de ferro e vitamina C.',
            img: f4,
            fonte: [' http://www.mundoboaforma.com.br/7-beneficios-da-amora-para-que-serve-e-propriedades/', 'https://www.tuasaude.com/amora/']
        },
        {
            name: 'Banana',
            desc: 'A banana é uma das frutas mais conhecidas e consumidas no mundo. E não é para menos, já que ela é uma grande fornecedora de energia, além disso, as bananas são ricas em carboidratos, fibras, vitaminas A e C, B1, B2, B6 e B12 e minerais (cálcio, potássio, fósforo, ácido fólico, ferro e magnésio), e ainda possuem baixo teor de gordura. A banana contém 3 tipos de açúcares naturais: sacarose, frutose e glicose, que combinados com a fibra da banana, promove grande energia ao corpo.',
            img: f5,
            fonte: ['http://mundoeducacao.bol.uol.com.br/biologia/banana.htm', 'http://www.saudedica.com.br/os-10-beneficios-da-banana-para-saude/','http://www.guiadenutricao.com.br/banana/']
        },
        {
            name: 'Cacau',
            desc: 'O cacau é um fruto alongado, amarelo e de casca dura, chegando a medir 20cm de comprimento. Sua polpa é mucilaginosa, podendo ser branca ou rósea, e envolve sementes avermelhadas. A polpa do cacau tem fibras, glicose e sacarose (energéticos), além de conter inúmeras vitaminas como as do complexo B e a niacina, que age nos músculos, no sangue e nos nervos.Os sais minerais ajudam na saúde dos ossos, a vitamina C fortalece o sistema imunológico, a vitamina A age diante da saúde da pele e dos ossos. As fibras ajudam com o bom funcionamento do intestino. Antioxidante, previne câncer e auxilia em casos de depressão. O cacau ainda estimula a liberação de endorfinas e aumenta a disposição mental. Por conter flavonoides e triptofano, aumenta ainda a proliferação de neurônios. Além disso, concentra outras substâncias que dão a sensação de bem-estar, e ajudam no combate à ansiedade e depressão.',
            img: f6,
            fonte: ['https://www.beneficiosnaturais.com.br/beneficios-cacau/']
        },
        {
            name: 'Coco',
            desc: 'O coco é tão nutritivo que pode ser considerado uma das frutas mais saudáveis do mundo! Em suas diversas formas e composições, o alimento, além da conhecida quantidade de vitaminas e minerais, tem uma combinação ímpar de ácidos graxos que traz muitos benefícios importantes para nossa saúde.',
            img: f7,
            fonte: ['http://www.conquistesuavida.com.br/noticia/superalimento-conheca-os-beneficios-do-coco-para-a-saude_a1882/1', ' https://belezaesaude.com/coco/']
        },
        {
            name: 'Limão',
            desc: 'O limão é uma fruta cítrica (citrus) originária do sudoeste do continente asiático. A árvore que produz o limão, o ano todo, chama-se limoeiro. O limoeiro adapta-se facilmente em solos localizados em regiões de climas tropical e temperado. • O limão é boa fonte de fibras e vitamina C, além de conter outras vitaminas (tiamina, riboflavina) e minerais (fósforo, silício, cálcio e ferro). Contém vitamina B1, B2 e B3, provitamina A (principalmente na casca) e vitamina A (na polpa fresca e sumo). • É riquíssimo em vitamina C (40 a 50mg para cada 100g do fruto), que têm um papel inestimável nos fenômenos óxido-redutores, melhorando o desempenho das glândulas endócrinas. Por essa razão, é indispensável a sua ingestão diária. • Possui vitamina PP, que age protegendo e tonificando o sistema vascular, e vitamina I que é um preventivo das pneumonias. • Contém grandes quantidades de sais minerais e oligoelementos como o cálcio, ferro, silício, fósforo, cobre, magnésio e iodo. • Possui uma grande concentração de ácidos cítrico e málico, além de pequenas quantidades de ácido acético, fórmico e de citratos de potássio e de sódio. • É portador de glucose e frutose diretamente assimiláveis, bem como de sacarose. • Contém gomas, mucilagem e algumas albuminas. Na composição do limão existe o d-limoneno, que tem propriedades anticancerígenas e é solvente de cálculos e entupimentos nas artérias. Outra grande vantagem é a função de “descongestionar” o fígado após a ingestão de álcool ou de alimentos muito gordurosos.',
            img: f8,
            fonte: ['https://belezaesaude.com/limao/']
        },
        {
            name: 'Milho',
            desc: 'O milho é um cereal muito utilizado no mundo como alimentação para humanos e animais. Possui boas qualidades nutricionais, contendo vários aminoácidos, um alto teor de carboidratos, além de ser energético (cada 100 gramas de milho possui cerca de 100 calorias), possui também vitaminas E, A e B1, além de sais minerais (fósforo, cálcio e potássio). ',
            img: f9,
            fonte: ['http://www.suapesquisa.com/alimentos/milho.htm']
        },
        {
            name: 'Pinhão',
            desc: 'O pinhão é a semente de uma árvore bem brasileira: a Araucaria angustifolia. Na verdade, o fruto do pinheiro é a pinha, onde encontramos a semente, isto é, o pinhão. O pinhão é um excelente alimento e possui um valioso teor nutricional. Sua polpa é formada basicamente de amido e é rico em vitaminas do complexo B, cálcio, fósforo e proteínas.',
            img: f10,
            fonte: ['http://www.portalsaofrancisco.com.br/alimentos/pinhao']
        },
        {
            name: 'Batata Doce',
            desc: 'A batata-doce tem uma excelente capacidade para fornecer energia devido aos seus carboidratos saudáveis que não elevem em excesso o nível de açúcar no sangue, sendo uma excelente opção para quem malha frequentemente, além de ter inúmeros nutrientes e antioxidantes.',
            img: f11,
            fonte: [' https://www.tuasaude.com/beneficios-da-batata-doce/', 'http://www.mundoboaforma.com.br/9-beneficios-da-batata-doce-para-que-serve-e-propriedades/']
        },
        {
            name: 'Goiaba',
            desc: 'A árvore que produz esta fruta é chamada, popularmente, de goiabeira. As goiabeiras são comuns na América tropical, sudeste asiático e continente africano. Podem atingir até 8 metros de altura. A goiaba contém importantes sais minerais, como fósforo, ferro, cálcio, é rica em vitamina A, essencial para a pele e visão. Possui também vitaminas do complexo B, que auxiliam no metabolismo, e a vitamina C, que aumenta a resistência do organismo contra gripes e resfriados, fortalece ossos e dentes, combate hemorragias, auxilia no processo de cicatrização.',
            img: f12,
            fonte: ['http://mundoeducacao.bol.uol.com.br/biologia/goiaba.htm', 'http://www.saudedica.com.br/os-11-beneficios-da-goiaba-para-saude/']
        },
        {
            name: 'Kiwi',
            desc: 'De origem chinesa, o kiwi é o fruto típico dos climas temperados e, além do seu sabor amargo, é mais rico em vitamina C do que a laranja. O formato oval e achatado do kiwi são duas das características, mas as que chamam mais atenção são a sua casca coberta por pequenos pelos marrons e seu interior completamente verde, mesmo quando madura. Estudos comprovaram que o kiwi é um fruto baga que contém vitaminas C, E, B1 e B6, além da niacina, potássio, fósforo, magnésio, cobre, cálcio, fosfato e fibras dietéticas. Não possui gordura e nenhum teor de colesterol foi encontrado. A pró-vitamina A (caroteno) também faz parte da composição do kiwi, assim como o ácido fólico.',
            img: f13,
            fonte: ['https://www.remedio-caseiro.com/beneficios-da-fruta-kiwi/', 'http://saudenacomida.com.br/kiwi-propriedades-tabela-nutricional/']
        },
        {
            name: 'Mandioca',
            desc: 'A mandioca é uma raiz com casca fina na cor marrom, sendo que a parte interna é branca, com alto valor energético (cada 100 gramas possui 150 calorias), possui sais minerais (cálcio, ferro e fósforo) e vitaminas do Complexo B. A mandioca é a base da alimentação de muitas tribos de índios do Brasil.',
            img: f14,
            fonte: ['http://www.suapesquisa.com/alimentos/mandioca.htm', 'http://www.mundoboaforma.com.br/10-beneficios-da-mandioca-para-que-serve-e-propriedades/']
        },
        {
            name: 'Maracujá',
            desc: 'Maracujá é um fruto produzido pelas plantas do gênero Passiflora. Pertencente à família Passifloraceae, o maracujazeiro é originário da América Tropical e possui mais de 150 espécies. As espécies mais cultivadas são maracujá-amarelo, maracujá-roxo e o maracujá-doce. O maracujá-amarelo representa mais de 95% da produção no Brasil. Este fruto é fonte de vitaminas A, C e do complexo B. Além disso, apresenta boa quantidade de sais minerais (ferro, sódio, cálcio e fósforo). Possui também propriedades que funcionam como calmante natural no organismo humano.',
            img: f15,
            fonte: ['http://www.portalsaofrancisco.com.br/alimentos/maracuja', 'https://www.tuasaude.com/maracuja/','http://www.suapesquisa.com/frutas/maracuja.htm']
        },
        {
            name: 'Couve',
            desc: 'A Couve é uma hortaliça rica em Vitamina A, vitamina B1, vitamina B2, vitamina B3, vitamina B5, Vitamina C e vitamina K. A Couve ainda é uma excelente fonte de Cálcio, cloro, enxofre, Ferro, Fósforo, Magnésio, silício e sódio, e muito nutritiva e de fácil digestão por ter baixíssima quantidade de sódio e pouquíssimas caloria.',
            img: f16,
            fonte: ['http://www.saudedica.com.br/os-9-beneficios-do-couve-para-saude/', 'https://belezaesaude.com/couve/']
        },
        {
            name: 'Mirtilo',
            desc: 'O mirtilo (blueberry, em inglês; arándano, em espanhol), pertence à família Ericaceae e é nativo de várias regiões da Europa e dos Estados Unidos. Sua implantação data da segunda metade da década de 1980, em uma coleção de cultivares na Embrapa Clima Temperado (Pelotas, RS) e a primeira iniciativa comercial no país começou a partir de 1990, em Vacaria (RS). Apesar de ser uma espécie recente em nossas condições, o mirtilo é largamente cultivado em países do Hemisfério Norte, principalmente na Europa e Estados Unidos. Nestas regiões, a espécie tem importância comercial significativa, além de estar havendo uma ampla divulgação da utilização dos frutos como "fonte da longevidade", devido à sua composição nutricional. O Mirtilo possui um valor nutritivo indiscutível; é um fruto conhecido pela sua riqueza em diversas vitaminas como a A, B, C e PP, possuindo ainda sais minerais, magnésio, potássio, cálcio, fósforo, ferro, manganês, açucares, pectina, tanino, ácidos cítrico, málico e tartárico. Conhecido como o rei dos antioxidantes e o fruto da juventude, o Mirtilo está no topo dos alimentos com maior teor de antioxidantes, ultrapassando as vantagens de outros vegetais como repolhos, espinafres e brócolos.',
            img: f17,
            fonte: [' http://www.feiradomirtilo.pt/mirtilo-na-saude', 'http://www.cnpuv.embrapa.br/publica/artigos/mirtilo.html']
        },
        {
            name: 'Morango',
            desc: 'O morango é uma fruta vermelha, cuja origem é a Europa, produzida pelo morangueiro, é um fruto rasteiro. Existem várias espécies de morango, sendo a fragaria a mais comum e cultivada em várias partes do mundo. É uma fruta pouco calórica, apresentando cerca de 38 calorias por 100 gramas de morango, é rico em vitaminas como, por exemplo, vitamina C, A, E, B5 e B6. Os principais minerais presentes no morango são: Cálcio, Potássio, Ferro, Selênio e Magnésio. Os morangos também são ricos em flavonoides, importante agente antioxidante no organismo dos seres humanos.',
            img: f18,
            fonte: ['http://www.suapesquisa.com/frutas/morango.htm']
        },
        {
            name: 'Uva',
            desc: 'A árvore que produz este fruto chama-se videira, também conhecida como parreira, possui um formato arredondado, podendo ser, de acordo com a espécie, da cor preta, rosada ou verde. Existem diversas espécies de uva, porém as mais conhecidas no Brasil são: uva itália, niagara, branca e rosada. A uva é fonte de carboidratos, importantes para o fornecimento de energia para o corpo. Também contém vitamina C, vitaminas do complexo B e sais minerais como ferro, cálcio e potássio. A uva, principalmente as escuras, possui ação antioxidante, ou seja, combate os radicais livres e também é anticancerígena. A casca da uva rosada possui uma substância cardioprotetora chamada resveratrol, que ajuda no controle do colesterol, na diminuição da formação de coágulos sanguíneos e na prevenção da trombose. Por este motivo, o vinho e o suco de uva são considerados alimentos funcionais, pois estudos científicos demonstram suas propriedades nutricionais no controle de doenças cardiovasculares. ',
            img: f19,
            fonte: ['http://www.suapesquisa.com/frutas/uva.htm', 'http://www.nutricaopraticaesaudavel.com.br/index.php/saude-bem-estar/conheca-os-beneficios-da-uva/']
        },
        {
            name: 'Manga',
            desc: 'É uma fruta cuja origem é a região sul da Ásia. Por ser uma fruta tipicamente tropical, foi introduzida, pelos portugueses no período colonial, no Brasil com muito sucesso, a árvore que produz a manga é chamada de mangueira. A casca da manga é lisa, sendo que a cor varia entre os tons de vermelho, laranja e amarelo. A Manga é uma ótima fonte de vitamina A, importante para a pele, visão e que auxilia no crescimento; C, que atua contra organismos invasores e infecções; e do complexo B. Além disso, a manga possui vários sais minerais, especialmente Cálcio, Fósforo e Ferro, sendo indicada no tratamento da anemia. ',
            img: f20,
            fonte: ['http://mundoeducacao.bol.uol.com.br/biologia/manga.htm', 'http://www.portalsaofrancisco.com.br/alimentos/manga']
        },
    ]

    
    React.useEffect(() => {
        window.scrollTo(0, 0)
        try {
            document.querySelectorAll('.animated div[data-about]')[0].removeAttribute('data-about');
            document.querySelectorAll('.animated div[data-about]')[0].removeAttribute('data-about');
            document.querySelectorAll('.animated div[data-about]')[0].removeAttribute('data-about');
        } catch (error) {
            console.log(error);
        }
      },[])

    function returnClasses(index) {
        if (index % 2 === 0) {
            return "container animated"
        } else {
            return " container container-reverse animated"
        }
    }

    return (<>

        <Header />
        <Carrossel style={{ backgroundSize: 'cover ' }} images={[bg]} />
        <div className={'margin'} />

        <div className='container container-historia animated'>
            <div className='content-itens right ' data-about='true'>
                <h3>Conhaça as frutas</h3>
            </div>
        </div>

        {frutasInfo.map((fruta, index) => (
            <div className={returnClasses(index)}>
                <div className='content-img left ' data-about='true'>
                    <img src={fruta.img} alt='picoles sem açucar' />
                </div>
                <div className='content-itens right ' data-about='true'>
                    <h3>{fruta.name}</h3>
                    <p>{fruta.desc}</p>
                    <p style={{marginBottom:0}}>Fontes:</p>
                    {fruta.fonte.map(font => (
                        <>
                            <a href={font} style={{ textDecoration: 'none',  color:'#175519', fontStyle: 'italic', fontFamily: "Philosopher, sans-serif", marginBottom:20, wordWrap: 'break-word' }}>{font}</a><br />
                        </>
                    ))}
                </div>
            </div>

        ))}
        <div style={{width:'100%', height: 50}}/>
        <Footer />
    </>)
}

export default Frutas;