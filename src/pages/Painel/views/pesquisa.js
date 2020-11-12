import React, { useEffect, useState } from 'react';
import api from '../../../services/api'

import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Carrossel from '../../../components/Carrossel'
import { Link } from 'react-router-dom'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import bg from '../../../assets/img/massa/bg.jpg'

function PainelPesquisa({history}) {
    const [mensagens, setMensagens] = useState([])

    useEffect(() => {
        window.scrollTo(0, 0)
        async function testLogin(){
            const log = await localStorage.getItem('@itabau/login')
            if(!log){
                history.push('/home')
            }
        }  
        testLogin()
        async function getMensagens() {
            const response = await fetch(`${api}/php/pesquisa/get.php`, {
                method: 'get',
            }).then(function (response) {
                return response.json();
            })
            if (response.data) {
                setMensagens([])
            } else {
                setMensagens(response)
                console.log(response);
            }
            console.log(response);

        }
        getMensagens()
    }, [history])

    return (<>

        <Header />
        <Carrossel style={{ backgroundSize: 'cover ' }} images={[bg]} />
        <div className={'margin'} />
        <div className='container container-historia animated' style={{ paddingBottom: 200 }}>
            <div className='content-itens left' data-about>
                <h3><Link to='/painel/home' ><ArrowBackIcon /></Link>Opinião</h3>
                <p>Legenda</p>
                <p style={{ marginTop: -20 }}>
                    <ul>
                        <li>O que você acha dos produtos Itabaú e suas variedades? (O1)</li>
                        <li>Se você pudesse melhorar algo em nosso produtos, o que melhoraria? (O2)</li>
                        <li>Qual o sabor que falta de picolé e sorvete de massa em nossa linha, que você acha interessante termos? (O3)</li>
                        <li>O que você acha do preço dos nossos produto? (O4)</li>
                        <li>Você recomendaria a Itabaú para seus parentes, amigos ou companheiros? (O5)</li>
                        <li>Com qual frequência você toma sorvete? (O6)</li>
                        <li>Por favor, diga-nos o que podemos fazer para melhorar? (O7)</li>
                    </ul>
                </p>
            </div>
            <TableContainer  >
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Id</TableCell>
                            <TableCell align="center">Nome</TableCell>
                            <TableCell align="center">Email</TableCell>
                            <TableCell align="center">Idade</TableCell>
                            <TableCell align="center">Telefone</TableCell>
                            <TableCell align="center">Cidade</TableCell>
                            <TableCell align="center">Estado</TableCell>
                            <TableCell align="center">O1</TableCell>
                            <TableCell align="center">O2</TableCell>
                            <TableCell align="center">O3</TableCell>
                            <TableCell align="center">O4</TableCell>
                            <TableCell align="center">O5</TableCell>
                            <TableCell align="center">O6</TableCell>
                            <TableCell align="center">O7</TableCell>
                            <TableCell align="center">Time</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {mensagens.lenght === 0 ? (
                            <h3>Sem Mensagens</h3>
                        ) : (
                                mensagens.map((row, index) => (
                                    <TableRow key={row.ID}>
                                        <TableCell align="center">{row.ID}</TableCell>
                                        <TableCell align="center">{row.NOME}</TableCell>
                                        <TableCell align="center">{row.EMAIL}</TableCell>
                                        <TableCell align="center">{row.IDADE}</TableCell>
                                        <TableCell align="center">{row.TELEFONE}</TableCell>
                                        <TableCell align="center">{row.CIDADE}</TableCell>
                                        <TableCell align="center">{row.ESTADO}</TableCell>
                                        <TableCell align="center">{row.O1}</TableCell>
                                        <TableCell align="center">{row.O2}</TableCell>
                                        <TableCell align="center">{row.O3}</TableCell>
                                        <TableCell align="center">{row.O4}</TableCell>
                                        <TableCell align="center">{row.O5}</TableCell>
                                        <TableCell align="center">{row.O6}</TableCell>
                                        <TableCell align="center">{row.O7}</TableCell>
                                        <TableCell align="center">{row.DATATIME}</TableCell>
                                    </TableRow>
                                ))
                            )}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
        <Footer />
    </>)
}

export default PainelPesquisa;