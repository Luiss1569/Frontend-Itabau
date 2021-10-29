-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Tempo de geração: 29-Out-2021 às 11:29
-- Versão do servidor: 5.7.23-23
-- versão do PHP: 7.3.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `itabauco_web`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `clientes`
--

CREATE TABLE `clientes` (
  `NOME` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `CIDADE` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `TELEFONE` varchar(15) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `RUA` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `BAIRRO` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `LATITUDE` double NOT NULL,
  `LONGITUDE` double NOT NULL,
  `ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `clientes`
--

INSERT INTO `clientes` (`NOME`, `CIDADE`, `TELEFONE`, `RUA`, `BAIRRO`, `LATITUDE`, `LONGITUDE`, `ID`) VALUES
('Santa Cecília Café e Gastronom', 'Pouso Alegre-MG', '35-8807-6347', 'Avenida Prefeito Tauny Toledo, 289', 'Fátima II', -22.21928, -45.91885, 1),
('SBS Bebidas & Cia ', 'São Bento do Sapucaí-SP', '12-99625-5908', 'Rua Candido José da Silva, 278', 'Centro ', -22.688951, -45.733122, 3),
('SENAC', 'Campos do Jordão-SP', '12-3668-6022', 'Alameda Vinte e Dois', 'Campos Do Jordao', -22.719101, -45.577482, 6),
('Nação Verde Praia Grande ', 'Praia Grande-SP', '13-99132-1110', 'R. Mococa', 'Boqueirão', -24.007489, -46.415231, 8),
('Francesca Cantina Italiana ', 'Monteiro Lobato-SP', '12-99164-4413', 'Rod. Monteiro Lobato, 60', 'Fracalanza', -22.95482, -45.83884, 9),
('Barão Café', 'Taubaté-SP', '12-99223-2806', 'Av. Tiradentes,297', 'Centro', -23.02904, -45.56613, 11),
('Empório Sabor da Villa', 'Jacareí-SP', '12-97937-7777', 'Av. Almeida Junior,50', 'Vila Branca', -23.26335, -45.94688, 12),
('La Siesta 34', 'São Bento do Sapucaí-SP', '11-9581-7067', 'Rua Abade Pedrosa, 88', 'Centro', -22.68599, -45.7307, 14),
('Parada dos Aventureiros ', 'São Bento do Sapucaí-SP', '12-99654-3781', 'Mona Monumento Natural - Pedra do Baú', 'Paiol Grande ', -22.687336, -45.661183, 15),
('Bar do Julinho ', 'São Bento do Sapucaí-SP', '', 'Av. Dr. Oliveira Ribeiro, 125', 'Centro', -22.68897, -45.734347, 16),
('Monte Verde Sorveteria ', 'Cotia-SP', '', 'R. Fernando Nobre, 1020', 'Parque Rincao', -23.58737, -46.88045, 17),
('Rancho Lago da Tilapia ', 'São Bento do Sapucaí-SP', '12-9733-5507', 'Estr. José Francisco de Paula', 'Serrano ', -22.720349, -45.786889, 18),
('Pesqueiro do Pantanal', 'São José dos Campos-SP', '12-3926-1286', 'Estrada Vereador Pedro David, 15100 ', 'São Francisco Xavier ', -22.93974, -45.915161, 19),
('Pousada Vovó Hilda', 'São Bento do Sapucaí-SP', '12-8189-4223', 'R. Cel. Ferreira Júnior, 137', 'Centro ', -22.687, -45.73169, 21),
('Mercadinho Quilombo ', 'São Bento do Sapucaí-SP', '11-97069-0882', 'Estrada Vereador Benedito Candido Ribeiro, 2367', 'Quilombo ', -22.672058, -45.71581, 22),
('Supermercado Simpatia ', 'São Bento do Sapucaí-SP', '12-3971-1474', 'Av. Vereador José Galdino Barbosa, 148', 'Centro', -22.69424, -45.73598, 23),
('Açougue Mantiqueira', 'São Bento do Sapucaí-SP', '', 'Av. Conselheiro Rodrigues Alves', 'Centro', -22.691633, -45.732627, 24),
('Sorveteria Itabaú Taubaté ', 'Taubaté-SP', '12-99242-3696', 'Rua Coronel Marcondes de Mattos,19', 'Centro', -23.02862, -45.55779, 25),
('Restaurante Tempero da Montanha', 'São Bento do Sapucaí-SP', '', 'R. Cap. Procópio Marcondes de Azeredo, 66', 'Centro', -22.68738, -45.73162, 26),
('Jeitinho Mineiro ', 'Sapucaí-Mirim-MG', '35-9891-8873', 'Av. Pres. Tancredo Neves, 459', 'Centro', -22.75082, -45.74341, 27),
('Bar do Tião', 'São Bento do Sapucaí-SP', '12-99700-1184', 'Praça Monsenhor Pedro do Vale Monteiro, 142', 'Centro', -22.68798, -45.73234, 29),
('Restaurante Vila Nova ', 'Taubaté-SP', '12-98815-8931', 'Av. Francisco Barreto Leme, 1106', 'Jardim dos Estados', -23.00317, -45.55022, 30),
('Azeite Verde Oliva', 'Delfim Moreira-MG', '11-98274-0007', 'MG-350', 'Caquende ', -22.505968, -45.299614, 34),
('Sorveteria Guerzoni ', 'São José dos Campos-SP', '12-3971-1603', 'Rua Coronel José Monteiro, 152', 'Centro', -23.18419, -45.88589, 35),
('Pizzaria da Rê', 'Santo Antônio do Pinhal-SP', '12-3666-2170', 'Estrada Francisco dos Santos da Silva ', 'Santa Cruz ', -22.811381, -45.682374, 38),
('Canto da Gula ', 'Santo Antônio do Pinhal-SP', '12-99179-8549', 'Av. Min. Nelson Hungria, 328', 'Centro', -22.82549, -45.66457, 39),
('Barraca Delicias da Serra', 'Sapucaí-Mirim-MG', '35-8462-4854', 'MG-173 Km 161', 'O Fazendinha do Ipê ', -22.751835, -45.742729, 41),
('Hortifrúti Dito Lino ', 'São Bento do Sapucaí-SP', '', 'Rua Dr. Gama Rodrigues, 71', 'Centro', -22.688619, -45.731302, 44),
('Cervejaria Araukarien ', 'Santo Antônio do Pinhal-SP', '12-8146-8067', 'Rodovia Oswaldo Barbosa Guisar, 7600', 'Rio Preto ', -22.823572, -45.727998, 45),
('Supermercado Goulart', 'São Bento do Sapucaí-SP', '12-3921-2955', 'Av. Conselheiro Rodrigues Alves, 246', 'Centro', -22.6894, -45.73223, 46),
('R. C. S. Vinhos Finos ', 'São Bento do Sapucaí-SP', '12-99663-3019', 'Praça Dr. Adhemar Pereira de Barros, 3', 'Centro', -22.68954, -45.73327, 47),
('Senhora Sobremesa', 'Santo Antônio do Pinhal-SP', '12-3666-1551', 'Avenida Ministro Nelson Hungria, 173', 'Centro ', -22.82548, -45.66337, 49),
('Pousada das Hortênsias ', 'Campos do Jordão-SP', '12-3663-6010', 'R. Eng. Adelardo S Caubi, 197', 'Vila Capivari ', -22.71857, -45.56006, 51),
('We Make ', 'São José dos Campos-SP', '', 'Av. Dr. Adhemar de Barros, 1050', 'Vila Adyana', -23.20132, -45.89304, 52),
('Hotel Vitória ', 'Pindamonhangaba-SP', '12-3642-5145', 'R. José Maria Monteiro, 2425', 'Jardim Imperial', -22.94732, -45.46141, 55),
('Restaurante Barracão ', 'São Bento do Sapucaí-SP', '12-3971-0245', 'Rod. Ver. Júlio da Silva - SP 42', 'Caracol', -22.722438, -45.72627, 56),
('Hotel Harmonia ', 'Monteiro Lobato-SP', '12-98122-4683', 'R. Amsterdam', 'São Gotardo ', -22.887574, -45.68579, 57),
('Pesca da Montanha ', 'São Bento do Sapucaí-SP', '', 'Rodovia Bendito Gomes de Souza', 'Paiol Grande ', -22.64573, -45.619574, 58),
('Milk Shake Mix', 'Gonçalves-MG', '35-9716-9300', 'R. Joaquim Ferreira Souza, 100', 'Centro ', -22.659977, -45.855386, 59),
('Mercearia Três Irmãos ', 'São Bento do Sapucaí-SP', '', 'Rod. Pref. Benedicto Gomes de Souza, 2094', 'Paiol Grande ', -22.680718, -45.701496, 61),
('Doce Café ', 'São Bento do Sapucaí-SP', '12-3971-1315', 'Av. Conselheiro Rodrigues Alves, 463', 'Centro', -22.68732, -45.73207, 63),
('Restaurante Vida Verde  ', 'Gonçalves-MG', '35-3651-1964', 'Unnamed Road', 'Centro ', -22.685491, -45.855417, 64),
('Conveniência Caminho da Pedra ', 'São Bento do Sapucaí-SP', '12-98147-2140', 'R. Maj. Miguel Chiaradia, 173', 'Jardim Santa Terezinha', -22.686751, -45.729075, 65),
('Mercadinho Tudeschini ', 'São Bento do Sapucaí-SP', '12-98181-6052', 'Estr. Mun. Ver. Luiz Antonio Goulart, 2250', 'Pinheiros ', -22.688868, -45.758024, 66),
('Casa da Comida ', 'Jacareí-SP', '12-3951-1428', 'Av. Ver. Afonso Rosa da Silva, 477', 'Jardim Santa Maria', -23.2904, -45.96024, 67),
('Viva Bem Store ', 'São José dos Campos-SP', '12-3341-9492', 'Rua Vilaça, 236', 'Parque Industrial', -23.24966, -45.91112, 68),
('Café no Bosque ', 'Campos do Jordão-SP', '12-3663-8497', 'Avenida Senador Roberto Simonsen, 1724', 'Vila Inglesa', -22.729, -45.56976, 70),
('Costa Gás ', 'São Bento do Sapucaí-SP', '12-3971-1717', 'Avenida Sebastião Ferreira dos Santos, 42', 'Centro ', -22.686469, -45.734288, 71),
('Quiosque Sete Quedas ', 'Gonçalves-MG', '35-9985-4554', 'Estrada São Sebastião - KM 1,5', 'Retiro ', -22.671029, -45.857571, 72),
('Restaurante Trento  ', 'Pindamonhangaba-SP', '12-99788-5670', 'R. Guilherme de Souza e Silva, 451', 'Residencial e Comercial Vila Verde', -22.955475, -45.461549, 73),
('Sorveteria Itabaú - Itajubá ', 'Itajubá-MG', '35-9842-6484', 'Rua Coronel Francisco Braz, 260', 'Centro', -22.42374, -45.45308, 74),
('Acampamento Paiol Grande', 'São Bento do Sapucaí-SP', '12-3971-1537', 'Rod. Pref. Benedicto Gomes de Souza KM 7', 'Paiol Grande ', -22.670439, -45.674279, 75),
('Restaurante Consciência ', 'São José dos Campos-SP', '12-3921-9753', 'Av. Eng. Francisco José Longo, 589', 'Jardim Sao Dimas', -23.19819, -45.88906, 76),
('João Batista (Salão) ', 'São José dos Campos-SP', '12-3941-8832', 'Av. Brasil, 813', 'Monte Castelo', -23.18663, -45.87455, 78),
('FÁBRICA ITABAÚ', 'São Bento do Sapucaí-SP', '12-3971-1881', 'R. Benedicta Isabel de Jesus KM 4,6', 'Paiol Grande ', -22.679144, -45.685617, 79),
('Empório dos Mellos', 'Campos do Jordão-SP', '12-3663-1346', 'R. Elídio Gonçalves da Silva, 1800', 'Dos Mellos', -22.776886, -45.653589, 80),
('Recanto Orgânico ', 'Mogi das Cruzes-SP', '11-2312-6451', 'R. Sen. Dantas, 151', 'Centro', -23.524, -46.19354, 81),
('Nossa Loja ', 'Sapucaí-Mirim-MG', '35-3622-3809', 'Av. Pres. Tancredo Neves, 180', 'Centro', -22.74873, -45.74295, 82),
('Restaurante Pedra do Baú ', 'São Bento do Sapucaí-SP', '12-99703-9512', 'R. das Araucárias', 'Paiol Grande', -22.680393, -45.663232, 83),
('Artesanato Olivetti ', 'São Bento do Sapucaí-SP', '', 'Av. Conselheiro Rodrigues Alves, 386', 'Centro', -22.6881, -45.732, 84),
('Restaurante Beira do Riacho  ', 'Monteiro Lobato-SP', '12-3976-4193 ', 'Estrada da Gruta, 209', 'Dos Souza', -22.897818, -45.843904, 85),
('Mercearia Escócia ', 'Campos do Jordão-SP', '12-3662-2522', 'Av. Escocia, 437', 'V Britânia', -22.744367, -45.585692, 86),
('Mercadinho Luiz Amaral ', 'Campos do Jordão-SP', '12-3662-6059', 'Av. Tabassuru Yamaguche, 1782', 'Vila Albertina', -22.762264, -45.621061, 87),
('Mercadinho Santa Cruz ', 'Campos do Jordão-SP', '12-3664-3660', 'Rua Matheus da Costa Pinto, 1479', 'Santa Cruz ', -22.74529, -45.61277, 88),
('Mercado Zatti & Zatti ', 'Campos do Jordão-SP', '12-3664-1602', 'Av. Frei Orestes Girardi, 67', 'Vila Abernesia ', -22.74448, -45.60139, 89),
('Supermercado Amaral ', 'Santo Antônio do Pinhal-SP', '12-3666-1215', 'R. Gov. Carvalho Pinto, 23', 'Centro', -22.82384, -45.66665, 90),
('Restaurante Sabor de Campos ', 'Campos do Jordão-SP', '12-3662-4555', 'Av. Frei Orestes Girardi, 1281', 'Vila Abernesia ', -22.73829, -45.59234, 91),
('Duas Bandeiras ', 'Campos do Jordão-SP', '12-3662-2877', 'R. Brg. Jordão, 1195', 'Villa Abernessia ', -22.73645, -45.58785, 92),
('Padaria Empório Suíço ', 'Campos do Jordão-SP', '12-3664-2020', 'R. Brg. Jordão, 1195', 'Abernéssia', -22.73859, -45.59114, 93),
('Natural Delivery ', 'São José dos Campos-SP', '12-3921-5762', 'R. Euclides da Cunha, 11', 'Vila Ema', -23.2068, -45.89518, 94),
('Restaurante Trincheira ', 'São Bento do Sapucaí-SP', '12-3971-2400', 'Rod. Benedito Cândido Ribeiro, 1403 ', 'Quilombo ', -22.679567, -45.727908, 95),
('Restaurante Sabor com Arte ', 'São Bento do Sapucaí-SP', '12-3971-1471', 'Rod. Pref. Benedicto Gomes de Souza, 5164', 'Paiol Grande ', -22.67518, -45.68173, 96),
('Associação Instituto Chão ', 'São Paulo-SP', '', 'Rua Harmonia, 123', 'Vila Madalena', -23.55683, -46.68717, 102),
('Posto Boracéia - Conveniência ', 'São Sebastião-SP', '', 'Rod. Gov. Mário Covas', 'Praia da Boracéia', -23.754284, -45.825541, 111),
('Padaria Artesanal - Feito á Mão ', 'São Sebastião-SP', '', 'Av. Mãe Bernarda, 856', 'Praia de Juqueí', -23.76764, -45.73032, 113),
('Padaria Estrela do Sahy ', 'São Sebastião-SP', '', 'Av. Adelino Tavares, 170', 'Praia Barra do Sahy', -23.77111, -45.68889, 114),
('Padaria Artesanal - Feito á Mão ', 'São Sebastião-SP', '', 'Av. Deble Luísa Derani, 244', 'Praça da Baleia', -23.77496, -45.66749, 115),
('Beach Hotel Sunset ', 'São Sebastião-SP', '', 'Al Antonio José Marques, 691', 'Praia de Camburí', -23.77572, -45.64956, 116),
('Mercado Flor do Cacau ', 'São Sebastião-SP', '', 'R. Tijucas', 'Praia de Camburí', -23.77124, -45.63806, 117),
('Posto Ipiranga - Conveniência ', 'São Sebastião-SP', '', 'Av. Walkir Vergani, 166', 'Praia de Boiçucanga', -23.78377, -45.62233, 118),
('Restaurante do Gaúcho ', 'São Sebastião-SP', '', 'Av. Walkir Vergani, 214', 'Praia de Boiçucanga', -23.78421, -45.62317, 119),
('Empório Niterói ', 'São Sebastião-SP', '', 'Av. Dr. Francisco Loup, 1166', 'Praia de Maresias', -23.7906, -45.56311, 120),
('Bare Auto Posto - Posto Ipiranga ', 'São Sebastião-SP', '', 'R. Sebastiana Leite Bueno, 588', 'Praia de Barequecaba', -23.82311, -45.4328, 122),
('Restaurante Micaela / Hotel Boutique Ananas ', 'Ilhabela-SP', '', 'Av. Brasil, 2923', 'Ilhote', -23.837326, -45.396999, 124),
('Best Time', 'São Sebastião-SP', '', 'Avenida Doutor Altino Arantes, 308', 'Centro', -23.804363, -45.399416, 132),
('Jacutta', 'São Sebastião-SP', '', 'R. Urbelandia', 'Praia de Camburí', -23.77665, -45.6531, 133),
('Padaria São José', 'São Sebastião-SP', '', 'Rua Antonio Mateus Bittencourt', 'Praia do Una', -23.75485, -45.76666, 134),
('Nova Minas', 'São Bento do Sapucaí-SP', '', 'R. Maj. Monteiro de Carvalho, 55', 'Centro', -2268509, -4573180, 136),
('Estacionamento Coronel', 'Caçapava', '', 'Av. Cel. Manoel Inocêncio', 'Centro', -23.10321, -45.70425, 137),
('Cervejaria 3 Orelhas', 'Gonçalves-MG', '', 'Estrada da Terra Fria', 'Boa Vista', -22.691307559202162, -45.85104231269392, 138),
('Guto - Material para Construção', 'Gonçalves-MG', '', 'R. Cel João Viêira', 'Centro', -22.65790874500467, -45.855386363066025, 139),
('Quitanda Raízes do Vale', 'Guaratinguetá-SP', '', 'Av. Min. Urbâno Marcondes', 'Vila Paraiba', -22.80895949199911, -45.19317432335765, 140),
('Mirante Pedra de São Francisco', 'Monteiro Lobato - SP', '', 'Estrada do Rio Manso, 1559 ', 'Rio Manso', -22.88635488877878, -45.86568218761818, 141),
('Cafeteria São Bento', 'São José dos Campos-SP', '', 'R. Goiânia - 342', 'Parque Industrial', -23.23809552683731, -45.90706854353637, 142),
('Café Villarejo', 'São Bento do Sapucaí-SP', '', 'Rua José Luíz de Souza, 11', 'Serrano', -22.7127040752368, -45.77752941246361, 143),
('Droga Luz', 'São Bento do Sapucaí-SP', '', 'Av. Dr. Rubião Júnior', 'Centro', -22.68579339281366, -45.732148397906556, 144),
('Mercearia Canto do Sítio', 'São Bento do Sapucaí-SP', '', 'Estr. Geraldo de Souza Dias', 'Sítio', -22.709069826017156, -45.73699513542874, 145),
('Sorveteria e Mercearia Varanda', 'São Bento do Sapucaí-SP', '', 'Av. Dr. Rubião Júnior', 'Centro', -22.689158143669864, -45.7329586845085, 146),
('Nova Minas Pastelaria e Lanchonete', 'São Bento do Sapucaí-SP', '', 'R. Maj. Monteiro de Carvalho', 'Centro', -22.685234619042056, -45.73176798313957, 147),
('Supermercado Grupo Salles', 'São Sebastião-SP', '', 'Al Antonio José Marques, 600', 'Praia de Camburí', -23.775590446661973, -45.64562334829726, 149),
('Nata Sorveteria e Açaí ', 'São José dos Campos-SP', '', 'R. Júpiter', 'Jardim da Granja', -23.207434261324998, -45.857701371888325, 150),
('Hortifruti Empório das Frutas', 'Paraisópolis-MG', '(35)99709-9966', 'R. Dr. Simôes de Almeida, 151', 'Paraisopolis', -22.555704062540293, -45.78095896885966, 151),
('Mercearia Sertãozinho', 'Santo Antônio do Pinhal-SP', '', 'Estrada Pico Agudo, 389', 'Sertãozinho', -22.84309593644861, -45.66947047413166, 152),
('Restaurante Entre Vilas', 'São Bento do Sapucaí-SP', '(12) 99745-9897', 'Estrada Major Pereira, 5.5Km', 'Campos do Serrano', -22.625464722784503, -45.58202379446411, 153),
('Mercado 3 Orelhas', 'Gonçalves-MG', '', 'Estrada da Terra Fria', 'Três Orelhas', -22.69758406972055, -45.845931764959204, 154),
('Pousada e Restaurante Urutau', 'Gonçalves-MG', '', 'Estrada Ribeirãozinho, 0.8Km', 'Bairro do Ribeirãozinho', -22.643783929461573, -45.78135173338038, 155),
('Emporio Naturall da Fazenda Veg', 'São Paulo-SP', '', 'R. Dr. Cesário Mota Júnior, 257', 'Vila Buarque', -23.544093772219146, -46.648793975401375, 156),
('Saúde em Granel', 'Cunha-SP', '', 'R. Dr. Casemiro da Rocha, 16', 'Centro', -23.074134886441225, -44.959735003597885, 157),
('Bananada Restaurante', 'São Bento do Sapucaí-SP', '', 'Estr. Mun. do Baúzinho, 3,4Km', 'Paiol Grande', -22.679878360873253, -4.564296261913135e15, 158);

-- --------------------------------------------------------

--
-- Estrutura da tabela `lancamento`
--

CREATE TABLE `lancamento` (
  `ID` int(11) NOT NULL,
  `TITULO` varchar(400) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `OPCOES` varchar(400) CHARACTER SET utf32 COLLATE utf32_unicode_ci NOT NULL,
  `IMAGEM` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `lancamento`
--

INSERT INTO `lancamento` (`ID`, `TITULO`, `OPCOES`, `IMAGEM`) VALUES
(1, 'Os últimos lançamentos da linha de picolés naturais sem adição de açúcar da Itabaú são:', 'Mousse de Maracujá;Mousse de Morango.', '/lancamento/imagens/2020.11.09-23.59.16.jpg');

-- --------------------------------------------------------

--
-- Estrutura da tabela `mensagem`
--

CREATE TABLE `mensagem` (
  `NOME` varchar(30) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `EMAIL` varchar(30) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `TELEFONE` varchar(15) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `CIDADE` varchar(30) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `ESTADO` varchar(2) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `ASSUNTO` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `MENSAGEM` varchar(500) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `ID` int(11) NOT NULL,
  `DATATIME` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `mensagem`
--

INSERT INTO `mensagem` (`NOME`, `EMAIL`, `TELEFONE`, `CIDADE`, `ESTADO`, `ASSUNTO`, `MENSAGEM`, `ID`, `DATATIME`) VALUES
('Simone Gomes da Silva', 'simonegs2013@hotmail.com', '11-98598-8265', 'SAO PAULO', 'SP', 'Solicitação de orçamento', 'Boa tarde, \nTenho uma loja de produtos naturais e gostaria de revender os sorvetes Itabaú.\n', 1, '2020-12-17 20:55:43'),
('andre', 'fesilvadina@gmail.com', '', 'campos do jordao', 'SP', 'freezer', 'Gostaria de saber porque o projeto dos freezer não tem vazão.quando tem que limpar fica aquela poça de agua que tem que tirar com o pano porque nao tem um simples cano.', 2, '2020-12-19 14:01:54'),
('Stella M F Godoy', 'stella.franzoni@gmail.com', '11-96210-2212', 'Gonçalves', 'MG', 'Parceria', 'Boa tarde,\n\nTenho um café na cidade de Gonçalves, gostei muito do sorvete de vocês, gostaria de saber sobre parceria, se puderem entrar em contato agradeço.', 3, '2020-12-20 16:30:20'),
('Carlos Robson Galvão', 'robson@itabau.com.br', '12-99715-9552', 'São Bento do Sapucai', 'SP', 'testesetsstseetatsatat', 'tatatatatatata', 4, '2020-12-22 10:49:55'),
('Karina', 'karina@itabau.com.br', '', 'São Bento do Sapucaí', 'SP', 'Teste', 'teste\n\nteste\n\nteste\n\n\ntesteeeeeeeeeeeeeeeeeeeeeee', 8, '2020-12-23 13:08:26'),
('Alba Rego', 'albaalbarego@gmail.com', '12-99101-9459', 'São Sebastião', 'SP', 'Orçamento', 'Bom dia! Sou fã dos sorvetes Itabaú. Consumi muito esse ano pois morei em Paraisópolis de maio até o começo desse mês. Gostaria de revender. Pode me enviar um orçamento com as condições? O freezer é comodato? Não tenho comércio ainda mas pretendo abrir uma MEI para esse fim. ', 9, '2020-12-23 13:20:27'),
('Daniela Araujo', 'danyelaaraujo10@gmail.com', '', 'taubate', 'SP', 'Revenda dos sorvetes', 'Ola boa tarde, eu tenho um comercio na rua Jacques felix no centro de taubate e tenho interesse de revender os seus sorvetes aqui, massa e picole. Gostaria de saber se tem essa possibilidade e se voces conseguem disponibilizar freezer tambem. Muito obrigada. (12 991384502)', 10, '2020-12-23 18:21:08'),
('Leandro ', 'santoexpeditopn@yahoo.com', '14-99907-9119', 'Jaú', 'SP', 'Revenda', 'Tenho uma loja de produtos naturais em Jáu/SP. E estamos interessados em revender sorvetes naturais. Como funciona a parceria com vocês? ', 11, '2020-12-29 16:56:01'),
('Cecília ', 'ceciliabeneton@gmail.com', '', 'São Bernardo do Campo ', 'SP', 'Quero revender seu produto', 'Boa tarde.\nOlá,  me chamo Cecília,  amo sorvetes e adoraria que isso se tornasse um gerador de renda. \nConheci sua empresa através do Instagram e, me encantei com a beleza e qualidade. \nGostaria de saber se existe a possibilidade de comercializar seu produto e, como podemos fazer isso acontecer. \nDesde já agradeço sua atenção!\nGrata,\nCecília Benetton ', 12, '2021-01-06 19:12:20'),
('Regiane Almeida Santos Borel', 'contato@clubeleve.com', '11-98931-0612', 'São Paulo', 'SP', 'Interesse em revenda', 'Olá! Gostaria de mais informações sobre revenda dos picolés Itabaú', 13, '2021-01-16 19:13:25'),
('Karina Galvão', 'karina@itabau.com.br', '12-99767-4919', 'São Bento do Sapucaí', 'SP', 'Teste', 'Testes', 14, '2021-01-19 14:09:20'),
('flavia', 'flaviacrismm99@hotmail.com', '', 'campos do jordao', 'SP', 'compras', 'ola estou montando um mercado no bairro da Campista em Campos do Jordao e gostaria de ser atendida por vcs, conhecer melhor os produtos para vender em meu comércio\n\nobrigada\nFlavia', 15, '2021-01-20 22:44:19'),
('Andre Kummel', 'arq.andrekummel@gmail.com', '11-96373-2310', 'Peruibe', 'SP', 'Abertura de uma sorveteria', 'Boa Noite meu nome é André,tudo bem?\n\nGostaria de primeiramente parabenizar o excelente produto que vocês oferecem,mas que sorvete fantástico ,que história bonita e rica!Espero que nunca percam essa qualidade ,mesmo quando crescerem muito,esse é o meu sincero desejo como consumidor meus Parabéns!!!\n\nGostaria de representar o picolé do Robson ou Itabau aqui na minha cidade litorânea de Peruíbe.  Peruibe vai de encontro com os valores ambientais da empresa de vocês.A cidade de Peruíbe tem uma pega', 16, '2021-01-21 02:23:09'),
('Erika Cristina Cardoso', 'erika.cristina@outlook.com', '', 'Pindamonhangaba', 'SP', 'Sorvetes inclusivos', 'Bom dia!\nMeu filho nao pode leite de vaca e derivados, glutem, corantes e açúcar. Ele é uma criança de 9 anos.\n\nEle consome seu sorvete de maracujá.\nSaimos de Pinda e vamos até Taubaté exclusivamente para consumir o seu sorvete.\n\nSugiro que reflitam sobre mais sabores que atendam pessoas como meu filho.\n\nGostamos muito do seu sorvete.\n\nObrigada!\n\nÉrika', 17, '2021-01-21 15:06:38'),
('Ricardo ', 'r-scala@hotmail.com', '', 'Gonçalves ', 'MG', 'Geladeira de sorvete no meu restaurante ', 'Boa tarde gostaria de saber como coloco uma geladeira pequena em meu restaurante ', 18, '2021-01-26 17:44:50'),
('Maria de Fátima', 'fatima_vteixeira@hotmail.com', '', 'Rio de Janeiro ', 'RJ', 'Quero esse sorvete aqui no RJ', 'Boa tarde!\r\nFomos a Santo Antônio do Pinhal e provamos esse sorvete. Ficamos apaixonados!!!!!\r\nQuando terá o produto no RJ?????', 19, '2021-01-30 21:48:59'),
('Angelica', 'mapstt@yahoo.com.br', '', 'Guaratinguetá', 'SP', 'Revender', 'Gostaria de saber detalhes de como funciona para revender', 20, '2021-02-02 16:20:29'),
('Leandro ', 'paletasepalitos@gmail.com', '19-99597-7579', 'Mogi Guaçu ', 'SP', 'Revendedor de sorvetes', 'Ola,\n\nGostaríamos de ter seus produtos em nossa loja.', 21, '2021-02-05 02:11:56'),
('Marcio Antonio de Assis', 'spazioervadoce@gmail.com', '11-97116-9213', 'Mogi das Cruzes', 'SP', 'Revenda de Produto', 'Boa tarde.\nMeu nome é Marcio Antonio de Assis, sou proprietário do Spazio Erva Doce, um local idealizado para o desenvolvimento de trabalhos voltados a saúde e bem estar.\nAqui temos terapias diversas como acupuntura, massagem, quiropraxia etc, bem como uma loja de produtos naturais, como chás, oleos essenciais, cápsulas para homeopatia entre diversas outras coisas, sendo que uma delas é um sucesso de venda, o Tapi Brownie, um brownie feito com massa de tapioca.\nHá alguns dias fui passear em Sant', 22, '2021-02-10 18:23:51'),
('Rodolfo ', 'morbeleza@gmail.com', '62-99600-9088', 'Catalão ', 'GO', 'Revenda Produtos Itabaú', 'Olá, tenho interesse na revenda dos produtos Itabaú na minha loja. Como poderíamos fazer uma parceria? Att.', 23, '2021-02-24 22:56:27'),
('Marcia Moreira ', 'marciassmoreira@hotmail.com', '24-99212-0750', 'Petrópolis', 'RJ', 'Marca Própria', 'Bom dia, Sr.Robson.\n\nNos conhecemos na Feira Natural Tech em São Paulo.\nGostaria de saber como funciona para a fabricação da marca própria.', 24, '2021-02-27 13:58:17'),
('valtiza candido de lima', 'valtizalima@hotmail.com', '12-99716-2288', 'sao jose dos campos', 'SP', 'Sorvetes de Massa', 'Gostaria de saber se o sorvete de massa e vendido como, isto quantos litros ??', 25, '2021-05-13 19:45:50'),
('Olívia de Almeida', 'oliviarca@gmail.com', '92-98129-3944', 'Manaus', 'AM', 'revender', 'oi, boa tarde! vocês trabalham com revenda para outros estados? como funciona?', 26, '2021-06-14 15:39:02'),
('geronimasoares@uol.com.br', 'geronimasoares@uol.com.br', '11-97173-8478', 'São Paulo', 'SP', 'Onde encontrar', 'Tomei o sorvete em uma viagem a São Bento do Sapucaí e agora minha sobrinha  está com vontade do sorvete de arroz doce...como faço pra encontrar em São Paulo proximo a Mooca  ?\nUrgente ', 27, '2021-06-22 03:40:38'),
('cleiton Roberto faria', 'cleitonroberto163@gmail.com', '', 'Cambuí', 'MG', 'Gostaria de revender os sorvetes!!', 'Aqui na minha cidade vai ser novidades...', 28, '2021-07-01 01:06:02'),
('Diógenes Santos', 'diogenes.cris.santos@gmail.com', '35-99926-0884', 'Sapucaí-Mirim', 'MG', 'Revenda', 'Boa noite, irei abrir um empório daqui alguns meses, gostaria de saber como funcionam as vendas de vocês. vi que tem alguns freezers pequenos em alguns comércios, tenho interesse em fazer o mesmo. Aguardo, obrigado.', 29, '2021-07-02 21:25:00'),
('Lucas Zanchetta ', 'lazanchetta@gmail.com', '19-98119-1925', 'Conchal', 'SP', 'Venda de Picolé ', 'Boa tarde,\nTenho uma padaria artesanal no interior de São Paulo na cidade de Conchal-SP. \nEm vez de colocar um freezer da Kibon ou Nestlé, gostaria se colocar um do picolé do Robson, por ser mais em linha com nossa proposta de saudável, pois só trabalhamos com pães de fermentação Natural.\nGostaria de saber se vocês fornecem esse freezer e o custo dos picolé. \nGrato.', 30, '2021-07-15 12:03:45'),
('Maria Renata', 'mrenatampl@gmail.com', '', 'São Paulo', 'SP', 'Problemas com sua marca', 'Tem algum problema com sua marca de sorvete ou nome dos proprietários.  Esse sr. da fotografia fica rindo encima do nosso rosto, machucando  Deve haver algum problema com o nome da empresa, proprietario.  Agradeço por resolverem isso.', 31, '2021-07-19 17:34:08'),
('Teste', 'luisricardo@unifei.edu.br', '', '', '', '', 'Teste de envio de email 10/08/2021', 32, '2021-08-10 13:56:03'),
('robson@itabau.com.br', 'robson@itabau.com.br', '12-99715-9552', 'São Bento do Sapucaí', 'SP', 'testeststata', 'araaetrae grtqtga', 33, '2021-08-12 10:58:03'),
('Tina Meira', 'controle@quemfornece.com', '', 'São Paulo', 'SP', 'Portal para Empresas', 'Olá, somos um portal B2B multissetorial de abrangência nacional. Uma grande parcela dos visitantes busca alimentos e artigos para revenda no varejo e gostaríamos de ampliar o número de empresas do segmento de ORGÂNICOS em todos os estados. Por esta razão, gostaríamos de convidá-los a cadastrar a empresa gratuitamente em nosso portal. Para mais informações sobre as vantagens que este cadastro poderá lhes trazer, recomendo a leitura desta página: https://www.quemfornece.com/br/10-razoes-para-cadas', 34, '2021-08-16 13:52:36'),
('BRUNO ROBERTO DOS SANTOS', 'BRUNORSANTOS.JOAQUIM@GMAIL.COM', '12-98836-6810', 'GUARATINGUETÁ', 'SP', 'REVENDA', 'Olá Boa tarde!\n\nConheci o produto de vocês em Santo Antônio do Pinhal e simplesmente adorei.\n\nHoje estou me planejando e investindo em meu próprio empreendimento, que é uma sorveteria!\n\nGostaria de ter como meu principal aliado a Marca de vocês!\n\nComo faço para adquirir o produto para revenda? Conseguimos fechar uma Parceria?', 35, '2021-08-17 17:20:45'),
('Denise Figueiredo', 'denise.figueiredo@escolacastan', '11-98359-9594', 'Santana de Parnaíba', 'SP', 'Parceria- Revenda', 'Boa Tarde!\nAtuo como nutricionista em uma escola particular na região de Alphaville/ Tamboré e fiquei interessada nos picolés para revenda em nossas cantinas. Temos muitas crianças alérgicas e também intolerantes e verifiquei que vocês possuem um ótimo leque de ofertas. \nGostaria de agendar contato com representante.\nObrigada.', 36, '2021-08-24 21:10:54'),
('André Luiz Silva de Queiroz', 'kalupefit@gmail.com', '61-98448-0862', 'Águas Lindas de Goiás', 'GO', 'Revender', 'Boa noite!\nPor favor, queria saber como posso estar revendendo os produtos.\n\n\nAtt,\n\nAndré Luiz', 37, '2021-08-27 21:14:03'),
('Erica Wolff ', 'erica.morais@sescsp.org.br', '11-98080-9334', 'São Paulo', 'SP', 'Duvidas sobre fornecimento', 'Boa noite. Sou supervisora do Sesc Interlagos, e estamos nos preparando para o retorno gradativo das nossas atividades e estamos em busca de fornecedores de sorvete picolé. Então será que poderia nos enviar um portfólio sobre os seus produtos. Desde já agradeço. ', 38, '2021-08-28 01:06:06'),
('Ana Paula de Faria ', 'anahf33@gmail.com', '', 'Paraisópolis ', 'MG', 'Consultar valores ', 'Gostaria de saber os preços ', 39, '2021-08-29 20:05:00'),
('Lucas ', 'lucas.fdato@icloud.com', '17-98122-5021', 'Río de Janeiro ', 'RJ', 'Contato ', 'Boa Noite,\r\nTudo bem? \r\n\r\nEstive em viagem para Santo Antônio do Pinhal e tomamos o sorvete de vocês, os picolés em específicos que experimentamos foram uma ótima experiência. Me chamou a atenção estarem conectados com o futuro e com as tendencias de mercado de orgânicos, vegano, com certificações e tudo isso com muito sabor e refrescância.\r\nGostaria de entender se trabalham com franquia, com representante de vendas, etc… gostaria de dividir com vocês que gostei e gostaria de entender como traba', 40, '2021-09-01 00:21:11'),
('Jachson Nogueira', 'jachsonnr@hotmail.com', '', 'Santa Rita do Sapucaí', 'MG', 'Faturamento mínimo', 'Olá, boa tarde, tudo bem?\nPoderia informar o valor mínimo de compras?', 41, '2021-09-07 19:40:24'),
('Ana Carolina ', 'carolaaz@gmail.com', '11-99999-5639', 'São Paulo', 'SP', 'Compra de sorvete ', 'Olá. Tudo bem ? Gostaria de comprar caixas de picolés pra consumo\r\nPróprio , moro em Atibaia , mas posso buscar em São Paulo', 42, '2021-09-15 16:30:52'),
('Amanda Cavalhieri', 'amandasilva80713@gmail.com', '12-99685-6338', 'Campos do Jordão', 'SP', 'Revenda sorvetes itabau', 'Bom dia, tenho uma lanchonete em campos do jordão e gostaria de adquirir os sorvetes de voces para revenda, como faço ? \nObrigada desde já. Atenciosamente Amanda ', 43, '2021-09-20 13:00:51'),
('João Marcelo Macena ', 'joaomarcelomaccenna@gmail.com', '24-99816-6621', 'Paraty', 'RJ', 'Revenda de produtos em Paraty ', 'Olá, \n\nConheci seus produtos em São José dos Campos. \nTenho uma loja de produtos naturais em Paraty,RJ a 49 km de Cunha.\nTenho interesse em vender seus produtos .\n\nFico no aguardo!', 44, '2021-09-20 14:18:17'),
('Igara Canuto de Toledo', 'igaratoledo@gmail.comi', '12-98200-1115', 'Caraguatatuba', 'SP', 'Franquia ', 'Informações sobre como investir na franquia, valor e condições.', 45, '2021-09-26 22:55:26'),
('Sandy Lima', 'sobrenaturalcruzeiro@outlook.c', '12-93500-2005', 'Cruzeiro', 'SP', 'Condições Comercias', 'Sou Lojista em Cruzeiro SP (vale do Paraíba). Gostaria de conhecer as condições para revender os produtos Itabaú.', 46, '2021-09-27 20:48:13'),
('Damara', 'damarafava@yahoo.com', '', 'Tremembé ', 'SP', 'Compra de Picole ', 'Boa tarde\r\nPor favor gostaria de comprar picolés  meus filhos gostam muito e como\r\nO verão está chegando gostaria de sabe como funciona.\r\nTenho preferência para os de frutas.\r\nObrigada', 47, '2021-09-29 16:00:00'),
('Emporio Vida', 'emporiovida@hotmail.com', '54-99982-9959', 'carazinho', 'RS', 'Comercial', 'Solicitamos contato para vender seus produtos em nossas lojas', 48, '2021-10-03 13:12:53'),
('Alan Douglas ', 'alan.douglas.95@gmail.com', '12-99113-4610', 'Taubaté', 'SP', 'Tabela de preços', 'Queria saber se vocês entregam na cidade de Taubaté, se sim, mande por favor a tabela de preço no meu whats.', 49, '2021-10-03 18:03:21'),
('Casa Naturale', 'casanaturalecampinas@gmail.com', '19-99759-2920', 'campinas', 'SP', 'Revenda', 'Bom dia. Somos uma loja de produtos naturais em Campinas SP (Barão Geraldo) e recebemos indicações dos seus produtos. Trabalhamos com produtos veganos, organicos, sem gluten, sem lactose. \nPoderiam nos enviar seu catalogo de produtos e as condiçoes comerciais, por favor.\nE se voces revendem nessa regiao\nObrigado Mateus', 50, '2021-10-04 14:21:39'),
('Joana Vitória Cruz Pereira', 'joanavitoriapereira66@gmail.co', '12-99677-5723', 'Sapucaí-Mirim', 'MG', 'Quero vender ', '37690-000', 51, '2021-10-09 14:08:25'),
('Jorge Luiz Lopes Junior', 'jorgelopes.agr@gmail.com', '66-99994-9980', 'Holambra', 'SP', 'Amora preta orgânica ', 'Bom dia! \n\nMeu nome é Jorge, sou produtor de amora preta e mirtilo orgânicos na Serra da Mantiqueira (Andradas-MG).\n\nGostaria de saber se há interesse em amora preta fresca ou congelada para que eu forneça a vocês. Meu número cadastrado é whatsapp, também respondo pelo email.\n\nMuito obrigado!! ', 52, '2021-10-13 11:36:32'),
('Lucas', 'comercial@piubrand.com', '11-95930-3408', 'São Paulo', 'SP', 'Parceria', 'Olá,\nTudo bem?\n\nGostaria de saber com quem eu poderia conversar em relação a uma parceria de um dia. \nTrabalho em uma marca de beachwear voltada pro publico A.\nE estamos para lançar nossa coleção de verão e inauguração do nosso espaço físico. \nCom isso estamos buscando parceiros para compartilhar deste momento com a gente.', 53, '2021-10-28 16:37:22');

-- --------------------------------------------------------

--
-- Estrutura da tabela `opinao`
--

CREATE TABLE `opinao` (
  `NOME` varchar(30) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `EMAIL` varchar(30) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `CIDADE` varchar(30) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `TELEFONE` varchar(30) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `IDADE` int(11) NOT NULL,
  `ESTADO` varchar(2) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `O1` varchar(300) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `O2` varchar(300) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `O3` varchar(300) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `O4` varchar(300) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `O5` varchar(300) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `O6` varchar(300) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `O7` varchar(300) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `ID` int(11) NOT NULL,
  `DATATIME` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`ID`);

--
-- Índices para tabela `lancamento`
--
ALTER TABLE `lancamento`
  ADD PRIMARY KEY (`ID`);

--
-- Índices para tabela `mensagem`
--
ALTER TABLE `mensagem`
  ADD PRIMARY KEY (`ID`);

--
-- Índices para tabela `opinao`
--
ALTER TABLE `opinao`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `clientes`
--
ALTER TABLE `clientes`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=160;

--
-- AUTO_INCREMENT de tabela `mensagem`
--
ALTER TABLE `mensagem`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;

--
-- AUTO_INCREMENT de tabela `opinao`
--
ALTER TABLE `opinao`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
