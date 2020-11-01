import React from 'react';

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Carrossel from '../../components/Carrossel'

import bg from '../../assets/img/historia_sorvete/bg.jpg'

import './style.css'

function HistoriaSorvete() {
    window.scrollTo(0, 0)

    return (<>

        <Header />
        <Carrossel style={{ backgroundSize: 'cover ' }} images={[bg]} />
        <div className={'margin'} />
        <div className='container container-historia animated'>
            <div className='content-itens left'>
                <h3>Historia do Sorvete</h3>
                <p>História do sorvete
                A história do sorvete é cheia de curiosidades. Pesquisas mostram que ele foi inventado há
                cerca de 3 mil anos pelos chineses! No início, o "sorvete" era feito com neve, suco de fruta
                e mel.</p>
                <p style={{ marginTop: -20 }}>Outras pesquisas apontam o líder Alexandre, o Grande como o
                introdutor do sorvete na Europa
                e a sua "receitinha" era um pouco diferente da usada pelos chineses: uma mistura de salada
                      de frutas embebida em mel e resfriada em potes de barro guardados na neve.</p>
            </div>
            <div className='content-itens right' data-about style={{ marginTop: -30 }}>
                <p>Mas foi em 1292 que o sorvete começou a tomar a forma daquele que conhecemos hoje,
                quando o famoso viajante italiano Marcopolo voltou ao seu País de uma viagem à China
                cheio de "novidades": o arroz, o macarrão e o sorvete feito com leite!
                A partir daí, o sorvete começou a ser muito consumido em toda a Itália e até hoje o sorvete
                italiano é reconhecido como um dos melhores do mundo. Por lá, em qualquer lugar pode-se
                      encontrar uma gelateria, ou seja, uma sorveteria. Em italiano, sorvete se fala gelato.</p>
            </div>

            <div className='content-itens left' data-about style={{ marginTop: -30 }}>
                <p>Na Itália, o consumo do sorvete espalhou-se por toda a Europa, até que os ingleses o levaram
                para os Estados Unidos. Lá, a história dos sorvetes ganhou importantes capítulos...
                Nos EUA, país que mais faz e mais consome sorvetes no mundo, dois fatos importantes ocorreram
                para tornar este alimento ainda mais popular: em 1851, Jacob Fussel abre a primeira fábrica de sorvetes
                     do mundo! Pela primeira vez, os ice creams são produzidos em muita quantidade.</p>

                <p style={{ marginTop: -10 }}>O segundo fato que mudou a história do sorvete foi a invenção da
                refrigeração mecânica, ou seja, das geladeira. Ainda bem, porque se não fosse essa grande
                invenção, pessoas que moram em lugares quentes, como os brasileiros, teriam que viajar para
                  longe se quisessem apreciar um sorvetinho!</p>
            </div>
        </div>

        <div className='container container-historia animated'>
            <div className='content-itens left' data-about>
                <h3>Historia do Sorvete no Brasil</h3>
                <p>Vem do Rio de Janeiro a notícia do primeiro sorvete vendido no Brasil. Um navio americano
                chamado Madagascar aportou na cidade em agosto de 1834 com 217 toneladas de gelo.
                Dois comerciantes cariocas compraram a carga e em 23 de agosto começaram a vender sorvetes de
                frutas aos cariocas. Naquela época, os sorvetes ainda eram chamados de "gelados" no Brasil.</p>

                <p style={{ marginTop: -20 }}>Para que o gelo não derretesse, ele era envolvido em serragem e
                enterrado em grandes covas. Assim, ele podia ser mantido por 4 a 5 meses!</p>
            </div>
            <div className='content-itens right' data-about style={{ marginTop: -30 }}>
                <p>Antes do sorvete, as mulheres eram proibidas de entrarem em bares, cafés, docerias,
                confeitarias... Mas quando o sorvete chegou ao nosso País, as mulheres não se conformaram
                mais com essa convenção e passaram a invadir estes lugares para saborearem os gelados.
                Em São Pàulo, a primeira notícia de sorvete que se tem registro é de um anúncio no jornal A
                Província de São Paulo de 04 de janeiro de 1878, que dizia: "Sorvetes – todos os dias às 15 horas,
                na Rua direita nº 14." A primeira fábrica de sorvetes do Brasil foi a U.S. Markson do Brasil,
                fundada emm 1941 no Rio de Janeiro.</p>
            </div>

        </div>

        <div className='container container-historia animated'>
            <div className='content-itens left' data-about>
                <h3>Sorvete é mais que prazer</h3>
                <p>Recentemente um estudo em que ficou comprovado que o sorvete é um alimento completo, contendo
                proteínas, açúcares, gordura vegetal e/ou animal, vitaminas, cálcio, fósforo e outros minerais
                essenciais numa nutrição balanceada. Uma comparação com outros alimentos mostra que um sorvete
                possui menos calorias que um ovo frito ou um pão francês: enquanto 100 gramas de sorvete de
                  creme possui 208 calorias, a mesma medida de pão francês tem 269 calorias e de ovo frito, 216.</p>

                <p style={{ marginTop: -20 }}>O valor calórico dos sorvetes depende da sua composição, ou seja,
                das matérias primas utilizadas para sua fabricação. Um sorvete produzido com ovos ou leite
                fornecerá uma maior quantidade de proteína e gordura comparativamente a um sorvete que utiliza
                água.
                Por exemplo, em análises efetuadas a diversos sorvetes, verificou-se que 90 gramas de sorvete
                (peso médio por dose) podem fornecer entre 130 e 320kcal. Para estes valores contribuem
                principalmente o açúcar (25-59%) e a gordura (3-16%).</p>
            </div>

            <div className='content-itens right' data-about style={{ marginTop: -30 }}>
                <p>Os produtos à base de leite, como o sorvete, hoje são apontados como ingredientes funcionais,
                    relacionados à saúde e são produtos de excelente qualidade nutricional e sensorial.</p>
            </div>

            <div className='content-itens left' data-about style={{ marginTop: -30 }}>
                <p> Os sorvetes também são uma excelente fonte de cálcio, pois podem atingir 135mg/100g. Isso é
                importante para as pessoas que por hábito, gosto ou intolerância à lactose, não ingerem os
                produtos lácteos na quantidade necessária. Em termos médios o consumo de 100g de sorvete
                contribui com cerca de 8 a 16% da dose diária recomendada de cálcio, um mineral essencial
                para a saúde de dentes e ossos, cujo consumo é importante tanto durante a infância e a
                adolescência, fases em que ocorrem os maiores ganhos de massa óssea como na vida adulta e
                    maturidade, para manter essa estrutura óssea adquirida nas fases anteriores</p>

                <p style={{ marginTop: -10 }}>Os sorvetes associam prazer, conveniência, sabor, aspectos
                nutritivos e benefícios à saúde em uma boa medida. Em termos de conveniência e variedade,
                 atendem todos os gostos e necessidades.</p>
            </div>

            <div className='content-itens right' data-about style={{ marginTop: 60 }}>
                <label style={{marginTop: 100}}>O Sorvete é Alimento:</label>
                <p style={{marginTop: 0}}>www.abis.com.br<br/>
                www.insumos.com.br/sorvetes_e_casquinhas/materias/103.pdf</p>
            </div>
        </div>

        <Footer />
    </>)
}

export default HistoriaSorvete;