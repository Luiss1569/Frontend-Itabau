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

import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import bg from '../../../assets/img/Historia/bg.jpg'

function PainelMatriz() {
    const [mensagens, setMensagens] = useState([])

    useEffect(() => {
        window.scrollTo(0, 0)
        async function getMensagens() {
            const response = await fetch(`${api}/php/location/get.php`, {
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

    async function handleDelete(id) {

        const data = new FormData()
        data.append('danoninho', id)

        const response = await fetch(`${api}/php/location/delete.php`, {
            method: 'post',
            body: data
        }).then(function (response) {
            return response.json();
        })

        console.log(response);

        if(response.result){
            alert('Cliente Deletado')
        }else{
            alert('Cliente não Deletado')
        }
    }

    return (<>

        <Header />
        <Carrossel style={{ backgroundSize: 'cover ' }} images={[bg]} />
        <div className={'margin'} />
        <div className='container container-historia animated' style={{ paddingBottom: 200 }}>
            <div className='content-itens left' data-about>
                <h3><Link to='/painel/home' ><ArrowBackIcon /></Link>Clientes <Link style={{position: 'absolute', right: 30}} to='/painel/cliente/create'><AddCircleOutlineIcon style={{color:'green', fontSize: 40}}/></Link></h3>
            </div>
            <TableContainer  >
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Id</TableCell>
                            <TableCell align="center">Nome</TableCell>
                            <TableCell align="center">Cidade</TableCell>
                            <TableCell align="center">Telefone</TableCell>
                            <TableCell align="center">Bairro</TableCell>
                            <TableCell align="center">Rua</TableCell>
                            <TableCell align="center">Opcões</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {mensagens.lenght === 0 ? (
                            <h3>Sem Clientes</h3>
                        ) : (
                                mensagens.map((row, index) => (
                                    <TableRow key={row.ID}>
                                        <TableCell align="center">{row.ID}</TableCell>
                                        <TableCell align="center">{row.NOME}</TableCell>
                                        <TableCell align="center">{row.CIDADE}</TableCell>
                                        <TableCell align="center">{row.TELEFONE}</TableCell>
                                        <TableCell align="center">{row.BAIRRO}</TableCell>
                                        <TableCell align="center">{row.RUA}</TableCell>
                                        <TableCell align="center"><Link to={`/painel/cliente/${row.ID}/update`}><EditIcon style={{ color: 'yellow' }}/></Link><div onClick={()=>{handleDelete(row.ID)}}><DeleteForeverIcon style={{ color: 'tomato' }}/></div></TableCell>
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