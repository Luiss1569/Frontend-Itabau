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

import bg from '../../../assets/img/lancamentos/bg.jpg'

function PainelMatriz() {
    const [mensagens, setMensagens] = useState([])

    useEffect(() => {
        window.scrollTo(0, 0)
        async function getMensagens() {
            const response = await fetch(`${api}/php/matriz/get.php`, {
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
    }, [])

    return (<>

        <Header />
        <Carrossel style={{ backgroundSize: 'cover ' }} images={[bg]} />
        <div className={'margin'} />
        <div className='container container-historia animated' style={{ paddingBottom: 200, marginTop: -10 }}>
            <div className='content-itens left' data-about>
                <h3><Link to='/painel/home' ><ArrowBackIcon /></Link>Mensagens</h3>
            </div>
            <TableContainer  >
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Id</TableCell>
                            <TableCell align="center">Nome</TableCell>
                            <TableCell align="center">Email</TableCell>
                            <TableCell align="center">Telefone</TableCell>
                            <TableCell align="center">Cidade</TableCell>
                            <TableCell align="center">Estado</TableCell>
                            <TableCell align="center">Assunto</TableCell>
                            <TableCell align="center">Mensagem</TableCell>
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
                                        <TableCell align="center">{row.TELEFONE}</TableCell>
                                        <TableCell align="center">{row.CIDADE}</TableCell>
                                        <TableCell align="center">{row.ESTADO}</TableCell>
                                        <TableCell align="center">{row.ASSUNTO}</TableCell>
                                        <TableCell align="center">{row.MENSAGEM}</TableCell>
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

export default PainelMatriz;