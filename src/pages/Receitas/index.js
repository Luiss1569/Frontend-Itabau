import React from 'react';

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Carrossel from '../../components/Carrossel'

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import bg from '../../assets/img/lancamentos/bg.jpg'
import r1 from '../../assets/img/receitas/r1.jpg'
import r2 from '../../assets/img/receitas/r2.jpg'
import r3 from '../../assets/img/receitas/r3.jpg'
import r4 from '../../assets/img/receitas/r4.jpg'
import r5 from '../../assets/img/receitas/r5.jpg'
import r6 from '../../assets/img/receitas/r6.jpg'
import r8 from '../../assets/img/receitas/r8.jpg'
import r9 from '../../assets/img/receitas/r9.jpg'
import r10 from '../../assets/img/receitas/r10.jpg'
import r11 from '../../assets/img/receitas/r5.jpg'

import './style.css'

function Receitas() {
    window.scrollTo(0, 0)

    const receitasInfo = [{
        title: 'Taça Blue Moon',
        info: 'Utilizar uma taça de cano curto, tipo para água. Enfeitar a borda com açúcar cristal branco. Adicionar: 1 dose de licor Blue Caraçau; 2 bolas de Sorvete Itabaú de Leite Condensado; Decorar com Chantilly. Servir com canudo para refrigerante cortado pela metade e colher de cabo curto.',
        img: null
    }, {
        title: 'Taça Russian Ice',
        info: 'Utilizar taça de cano longo. Enfeitar a borda com açúcar cristal verde. Adicionar: 1 dose de vodka bem gelada; 2 bolas de Sorvete Itabaú de Limão ou Musse de Limão; Decorar com chantilly/cereja/hortelã ou rodela de Limão; Servir com canudo para refrigerante cortado pela metade e colher de cabo curto.',
        img: null
    }, {
        title: 'Taça Tequila',
        info: 'Utilizar taça de champanhe. Enfeitar a borda da taça com sal. Adicionar: 1 dose de Tequila; 1 ½ bola de Sorvete Itabaú de Limão ou Musse de Limão; Decorar com chantilly/hortelã. Servir com canudo para refrigerante cortado pela metade e colher de cabo curto. Servir com canudo para refrigerante cortado pela metade e colher de cabo curto.',
        img: null
    },
    {
        title: 'Sorvete assado',
        info: 'Ingredientes: Duas bolas de sorvete Itabaú, merengue ou marshmallow, bolo tipo pão de ló, calda de açucar ou creme de frutas. Montagem: Forre o fundo de duas tigelas de cerâmica com o pão de ló ou similar embebido em uma calda ou creme de frutas, deite o sorvete Itabaú no sabor a gosto na tigela e cubra-o com o merengue ou Marshmallow e leve ao forno pré-aquecido (mais ou menos 250°C), durante mas ou menos 45 segundos, apenas o suficiente para dourar e sirva em seguida. Dica: Depois de embeber o pão de ló deixá-lo descansar no frízer por duas horas. Adicionando na calda de açúcar uma bebida quente o sabor fica divino. Merengue: 2 claras de ovos 3 colheres de sopa de açúcar Preparo: Bater as claras em neve e adicionar o açúcar, batendo o suficiente para sua dissolução. Calda: Um copo de açúcar e um copo de aguá, colocar no fogo e deixar no fogo ate ter uma calda consistência média.',
        img: r1
    },
    {
        title: 'Sorvete frito',
        info: 'Ingredientes: 6 Bolas de sorvete Itabaú nos sabores de sua preferência 2 Xícaras (chá) farinha Láctea 3 Ovos batidos 1 Xícara de cereais matinais 100 ml de leite Óleo para fritar Decoração: 1- Marshimallow 2- Coberturas para sorvete de sua preferência Modo de preparar: 1- Faça as bolas de sorvete Itabaú e passe uma a uma na farinha Láctea, coloque-as no freezer por no mínimo 2 horas. 2- Retire-as do freezer e banhe nos ovos batidos com o leite (bater bem os ovos) uma a uma e novamente passe na farinha Láctea e leve ao freezer por mais 2 horas. Repita a operação mais quatro ou cinco vezes, até a bola de sorvete ficar com uma camada grossa empanada bem aderente. 3- Coloque o óleo em uma panela leve ao fogo até ficar bem quente. 4- Passe a bola de sorvete empanada e congelada em uma tigela com ovos batidos e depois passe por em uma bandeja com o cereal e leve para fritar rapidamente, retire com uma escumadeira colocando-a para escorrer em papel absorvente. 5- No recipiente que vai servir colocar uma camada de marshimallow e colocar a bola de sorvete frito salpicar com cereais matinais e servir em seguida. Obs: As bolas de sorvetes empanada se conservam por longo tempo no frízer, bem embalada, deixando para fritar na hora de servir.',
        img: r2
    },
    {
        title: 'Sorvete com farinha de caramelo',
        info: 'Ingredientes: Farinha de caramelo: - 1/2 kg de açúcar Para montagem com 2 sabores: - 900g de sorvete de coco Itabaú - 900g de sorvete de chocolate Itabaú - Farinha de caramelo Para montagem com 3 sabores: - 600 g de sorvete de coco Itabaú - 600 g de sorvete de chocolate Itabaú - 600 g de sorvete de morango Itabaú - Farinha de caramelo Modo de Preparo: Farinha de caramelo: Numa panela, coloque o açúcar e leve ao fogo, mexendo sempre. Deixe derreter até formar uma calda grossa. Espalhe esse caramelo sobre uma superfície de mármore e deixe secar. Quando estiver seco como bala, bata com um martelinho de cozinha até ficar bem esfarelado, ou quebre em pedaços pequenos e triture no processador ou liquidificador. Reserve. Montagem: Numa forma de pudim com um furo no meio, espalhe um pouco de farinha caramelo e cubra metade do fundo da forma com sorvete Itabaú de coco. Na outra metade do fundo, coloque o sorvete Itabaú de chocolate. Espalhe mais um pouco de farinha de caramelo na próxima camada, na metade onde colocou o sorvete de coco, coloque por cima o sorvete de chocolate e assim sucessivamente, sempre intercalando as camadas, para dar um efeito bonito na hora de desenformar. Desenforme e decore com farinha de caramelo e calda de sua preferência. Se preferir com 3 sabores, faça a última camada com sorvete de morango Itabaú. Fonte: www.globo.com/maisvoce',
        img: null
    },
    {
        title: 'Sorvete Almendrado',
        info: 'PARECE COMPLICADO, MAS É BEM SIMPLES. Ingredientes: 500g sorvete de creme Itabaú Chantilly a gosto 2 xíc. de açúcar para 1/2 xíc. de água 250g de amêndoas quebradas em pedaços, não muito pequenos. Fazemos uma calda de caramelo com a água e o açúcar. Dando o ponto de puxa, jogamos numa pedra de granito e juntamos as amêndoas. Ao endurecer, quebramos com um martelo para ter o pralinê. (Aproveitamos aí para ficar de bem com o mundo!) Amolecemos o sorvete Itabaú sem que derreta e misturamos o pralinê, enformando o sorvete Itabaú e levando ao congelador. Na hora de servir, enfeitamos com chantilly à vontade, querendo usamos calda de chocolate e tudo a que temos direito.',
        img: null
    },
    {
        title: 'Petit Gateau',
        info: 'Ingredientes: 200 g de chocolate meio amargo 2 colheres de manteiga sem sal 1/4 de xícara de chá de açúcar 2 colheres de sopa rasas de farinha de trigo 2 ovos inteiros(tirar a pele da gema) 2 gemas Sorvete de Creme Itabaú Modo de Preparo: Derreta a manteiga e o chocolate em banho-maria. Bata os ovos e as gemas com açúcar na batedeira até ficar bem claro. Junte o chocolate derretido e a farinha de trigo, misturando com uma espátula. Depois, unte as forminhas de empadinha, passe trigo e coloque a massa Pré-aqueça o forno e leve para assar de 6 a 10 minutos em fogo alto até os bolinhos crescerem, mas o meio deve ficar molinho. Deve-se desenformar quente. Diretamente no prato acompanhado com sorvete de creme Itabaú. Fonte: www.tudodegostoso.com.br',
        img: r3
    },
    {
        title: 'Pavê de sorvete',
        info: 'Ingredientes: 400 g de sorvete de chocolate Itabaú 100 g de castanha do Pará 150 g de frutas cristalizadas 400 g de sorvete de creme Itabaú 20 biscoitos Champagny ½ cálice de vinho do porto ½ cálice de rum Para decoração: 3 kiwis Folhas de hortelã 500 g de creme de chantilly Modo de Preparo: Misture o rum e o vinho do Porto. Molhe uma fôrma com capacidade para 2 litros com uma parte da mistura de bebidas. Forre o fundo e os lados com os biscoitos umedecidos no restante da bebida. Espalhe no fundo o sorvete de creme Itabaú e alise com uma espátula. Cubra com uma camada de frutas cristalizadas picadas, uma camada de biscoitos umedecidos e uma de castanha-do-pará. Por fim cubra com o sorvete de chocolate Itabaú, comprima e alise. Leve ao congelador de um dia para o outro. Antes de servir, mergulhe a fôrma, de leve, em água fervente para soltar mais facilmente e vire sobre o prato onde irá servir. Decore com chantilly, kiwi e folhas de hortelã. Fonte: Agência Estado',
        img: r4
    },
    {
        title: 'Banana Split',
        info: 'Ingredientes: 1 colher (sopa) de castanha de caju picadas 1 bola de sorvete de creme Itabaú 1 banana nanica 1 bola de sorvete de morango Itabaú 1 bola de sorvete de chocolate Itabaú 2 colheres (sopa) de cobertura de morango 2 colheres (sopa) de cobertura de caramelo 2 colheres (sopa) de cobertura de chocolate 2 colheres (sopa) de creme de chantilly Balinhas de goma ou cerejas ao marasquino Modo de Preparo: Corte a banana ao meio no sentido do comprimento e acomode as duas metades nas laterais de uma taça para banana split. Distribua uma bola de sorvete de morango Itabaú, uma de creme e uma de chocolate Itabaú. Cubra o sorvete de morango com a cobertura de morango, o de creme com a de caramelo e o de chocolate com a de chocolate. Coloque o chantilly num saco de confeitar e espalhe-o entre as bolas de sorvete, polvilhe com as castanhas de caju e decore com as balinhas ou com as cerejas. Fonte: www.tudodegostoso.com.br',
        img: r5
    },
    {
        title: 'Capilé de Jabuticaba com Maracujá',
        info: 'Ingredientes: 8 Jabuticabas frescas 1 dose de vodca 1 picolé de maracujá Itabaú Preparo: Prepare uma capirinha com a jabuticaba e acrescente o picolé de maracujá Itabaú, que irá dissolver e misturar ao drinque. Rendimento: um copo curto',
        img: r6
    },
    {
        title: 'Capilé de uva com limão',
        info: 'Ingredientes: 7 uvas verdes 1 dose de saquê 1 picolé de limão Itabaú Preparo: Prepare uma capirinha com o saquê e a uva. Acrescente o picolé de limão Itabaú, que irá dissolver e misturar ao drinque. Fonte: www.globo.com/tvtem',
        img: r6
    },
    {
        title: 'Frozen Stolly',
        info: 'Ingredientes: 50ml de vodca 50ml de suco de lichia 2 bolas de sorvete de musse de limão Itabaú 25ml de licor de Lichia 1 galhinho de hortelã para decorar Preparo: Bata todos os ingredientes no liquidificador, depois passe para o copo long drink. Decore com um canudo e um galhinho de hortelã. Rendimento: um copo long drink Fonte: www.globo.com/tvtem',
        img: r8
    },
    {
        title: 'Espanhola de morango',
        info: 'Ingredientes: 1 dose de vinho tinto suave 5 morangos médios 1 bola de sorvete de morango 1 colher de sopa de leite condensado Preparo: Ponha tudo no copo do liquidificador, bata bem e sirva. Parece refresco. Mas, não é. Tome com cuidado.',
        img: r9
    },
    {
        title: 'Café gelado com sorvete',
        info: 'https://www.youtube.com/watch?v=hm7IE2k2D38',
        img: null
    },
    {
        title: 'Cookies com sorvete',
        info: 'Ingredientes: 1 xícara de açúcar mascavo 1 xícara de açúcar 1 xícara de manteiga 2 ovos Gotas de essência de baunilha 3 xícaras e 1/2 de farinha de trigo 1 colher (sopa) de fermento 1 colher (sopa) de bicarbonato 1 pitada de sal 1 1/2 xícara de aveia média 1 xícara de chocolate meio amargo em gotas Sorvete Itabaú sabor de sua preferência. Preparo: Na batedeira, bata os açúcares, a manteiga, os ovos e a baunilha por 5 minutos. Pare de bater e adicione a farinha, o sal, o bicarbonato, o fermento e aveia. Misture bem. Faça bolas pequenas e acomode-as em uma fôrma untada. Coloque as gotas de chocolate por cima e leve para assar por 13 minutos. Depois de frio, sirva os biscoitos com sorvete Itabaú, como na foto. Fonte: www.globo.com/tvtem',
        img: r10
    },
    {
        title: 'Brigadeiro com sorvete de flocos',
        info: 'Ingredientes: 1 pote de sorvete de flocos Itabaú ou outro sabor da sua preferência 1 caixinha de Bis ou outro bombom da sua preferência 2 latas de leite condensado 2 colheres de manteiga sem sal 4 colheres de chocolate meio-amargo(cacau em pó) Preparo: Numa panela, misture os ingredientes do brigadeiro. Leite condensado, manteiga e chocolate. Mexa sem parar até começar a engrossar. Mas lembre-se, o ponto não é o ponto de enrolar, é um pouco antes, mais mole. Depois de pronto, pegue uma taça grande de vidro, coloque bolas de sorvete Itabaú e despeje o brigadeiro. Vá montando camadas para ficar bem bonito. No final, coloque o Bis ou o outro bombom que você escolheu, num saquinho de alimentos e bata com uma colher de pau para desmanchar. Despeje o farelo em cima da última camada e leve ao congelador. Depois, é só aguardar a hora de servir.',
        img: null
    },
    {
        title: 'Rocambole de sorvete',
        info: 'Ingredientes: 6 ovos 6 colheres de sopa de açúcar 6 colheres de sopa de farinha de trigo 2 colheres de chá de fermento em pó sorvete de Itabaú no sabor de tua preferência Cada de caramelo ou a gosto Meia xícara de castanhas picadas Modo de Preparo: Bater as claras em neve, juntar as gemas, o açúcar, trigo, e por último o fermento em pó. Assar em forno médio por 20 minutos. Desenforme e deixe esfriar. Depois de frio rechear com o sorvete e enrolar o rocambole, embrulhar no papel alumínio e levar ao freezer antes de servir enfeitar com calda de caramelo e salpicar castanha de caju picada, servir com mais bolas de sorvete, calda de morango ou geléia de frutas.',
        img: null
    },
    {
        title: 'Pavê com panettone com sorvete',
        info: 'Ingredientes: 1 Panettone 1 Litro de sorvete de creme Itabaú 1 Barra de 130 g de chocolate meio amargo 1 Lata de creme de leite 150ml de calda de caramelo 150 g de amêndoas moídas 1 1/2 xícaras de vinho tinto Modo de preparo: Tire todo o papel em volta do panettone Com uma faca grande de serra, corte o panettone em rodelas de aproximadamente 1,5 cm um total aproximado de 6 rodelas. Reserve. Para o ganache: Pique o chocolate em pedaços pequenos em uma travessa funda de vidro por dois minutos no microondas em potência máxima, ou em banho maria até não ter mais pedaços inteiros, mexa bem para que fique com uma textura brilhante e liso. Acrescente a lata de creme de leite, sem o soro e mexa bem. Reserve. Para o caramelo: Dissolva 1 xícara de açucar em fogo médio até o ponto de caramelo, acrescente um pouco de água para ficar mais ralinho, após a fervura baixar acrescente 1/2 xícara de vinho para aromatizar (opcional) Montagem: Utilize uma vasinha de vidro, alta, de preferencia transparente para o prato ficar mais bonito. Coloque no fundo a rodela da parte inferior do panettone, regue com um pouco de vinho, acrescente uma boa camada de sorvete de creme Itabaú, espalhe bem. Espalhe o caramelo em fios, não precisa cobrir todo o sorvete, apenas para dar sabor. Espalhe parte das amêndoas. Coloque outra camada de panettone, pode ser que tenha que partir ao meio uma rodela para completar esta camada, se a travessa não for cilindrica. Espalhe novamente o sorvete, o caramelo e amêndoas. Faça outra camada com o panettone, e regue esta com vinho também. Distribua o sorvete, o caramelo e as amêndoas. Coloque a ultima camada com panettone, e cubra com o ganache do chocolote. Decore com amêndoas inteiras. Fonte: www.globo.com/maisvoce',
        img: r11
    },
    ]

    return (<>

        <Header />
        <Carrossel style={{ backgroundSize: 'cover ' }} images={[bg]}><h3>Receitas</h3></Carrossel>
        <div className={'margin'} />

        <div className='container container-historia animated' style={{paddingBottom: 100, paddingTop: 50}}>
            <div className='content-itens right'>
                {receitasInfo.map(receita => (
                    <Accordion key={receita.title} style={{ backgroundColor: '#f9f9f9' }} >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <h4 >{receita.title}</h4>
                        </AccordionSummary>
                        <AccordionDetails>
                            <p>
                                {receita.info}
                            </p>
                        </AccordionDetails>
                        <AccordionDetails>
                            {receita.img !== null ? (
                                <div className='content-img left ' data-about='true'>
                                    <img src={receita.img} alt={receita.title} />
                                </div>
                            ) : <> </>}
                        </AccordionDetails>
                    </Accordion>
                ))}
            </div>
        </div>
        
        <Footer />
    </>)
}

export default Receitas;