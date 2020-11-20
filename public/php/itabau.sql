-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 10-Nov-2020 às 00:09
-- Versão do servidor: 10.4.14-MariaDB
-- versão do PHP: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `itabau`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `clientes`
--

CREATE TABLE `clientes` (
  `NOME` varchar(30) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `CIDADE` varchar(30) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `TELEFONE` varchar(15) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `RUA` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `BAIRRO` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `LATITUDE` double NOT NULL,
  `LONGITUDE` double  NOT NULL,
  `ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
  `ASSUNTO` varchar(30) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `MENSAGEM` varchar(500) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `ID` int(11) NOT NULL,
  `DATATIME` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
  `DATATIME` timestamp NULL DEFAULT current_timestamp()
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
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `mensagem`
--
ALTER TABLE `mensagem`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `opinao`
--
ALTER TABLE `opinao`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
