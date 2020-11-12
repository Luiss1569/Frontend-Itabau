import * as React from 'react';
import { useEffect, useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';

import api from '../../../services/api'

import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Carrossel from '../../../components/Carrossel'
import SnackBar from '../../../components/SnackBar'

import { Link } from 'react-router-dom'

import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import bg from '../../../assets/img/Historia/bg.jpg'

export default function DataTable({history}) {

    const [mensagens, setMensagens] = useState([])
    const [open, setOpen] = useState({ type: 'success', bool: false, children: 'Cliente Salvo' });

    const collumns = [
        {
            field: 'id', headerName: 'ID', width: 70,
        },
        {
            field: 'NOME', headerName: 'NOME', width: 140,
        },
        {
            field: 'CIDADE', headerName: 'CIDADE', width: 200,
        },
        {
            field: 'TELEFONE', headerName: 'TELEFONE', width: 140,
        },
        {
            field: 'RUA', headerName: 'RUA', width: 250,
        },
        {
            field: 'BAIRRO', headerName: 'BAIRRO', width: 140,
        },
        {
            field: 'LATITUDE', headerName: 'LATITUDE', width: 100,
        },
        {
            field: 'LONGITUDE', headerName: 'LONGITUDE', width: 100,
        },
        {
            field: 'OPÇÕES', headerName: 'OPÇÕES', width: 100,
            renderCell: ({data}) =>(
               <>
                 <Link to={`/painel/cliente/${data.ID}/update`}><EditIcon style={{ color: 'yellow' }}/></Link><div onClick={()=>{handleDelete(data.ID)}}><DeleteForeverIcon style={{ color: 'tomato', cursor: 'pointer' }}/></div>
               </>
              ),
        },
    ]

    useEffect(() => {
        window.scrollTo(0, 0)
        async function testLogin(){
            const log = await localStorage.getItem('@itabau/login')
            if(!log){
                history.push('/home')
            }
        }  
        testLogin()
        getMensagens()
    }, [history])

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

    async function handleDelete(id) {

        if(!window.confirm('Dejesa mesmo excluir cliente?')){
            return 0
        }

        const data = new FormData()
        data.append('danoninho', id)

        const response = await fetch(`${api}/php/location/delete.php`, {
            method: 'post',
            body: data
        }).then(function (response) {
            return response.json();
        })

        console.log(response);

        if (response.result) {
            setOpen({
                type: 'success',
                bool: true,
                children: 'Cliente Deletado'
            })
            getMensagens()
        } else {
            setOpen({
                type: 'error',
                bool: true,
                children: 'Cliente não Deletado'
            })
        }
    }

    return (<>
        <Header />
        <Carrossel style={{ backgroundSize: 'cover ' }} images={[bg]} />
        <SnackBar setOpen={setOpen} open={open.bool} type={open.type}>{open.children}</SnackBar>
        <div className={'margin'} />
        <div className='container container-historia animated' style={{ paddingBottom: 200 }}>
            <div className='content-itens left' data-about>
                <h3><Link to='/painel/home' ><ArrowBackIcon /></Link>Clientes <Link style={{ position: 'absolute', right: 30 }} to='/painel/cliente/create'><AddCircleOutlineIcon style={{ color: 'green', fontSize: 40 }} /></Link></h3>
            </div>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid rows={mensagens.map((mensagem, index) => ({
                    id: index,
                    ...mensagem
                }))} columns={collumns} autoHeight autoPageSize disableSelectionOnClick onRowClick={({ rowIndex }) => { console.log(mensagens[rowIndex]); }} />
            </div>       </div>
        <Footer />
    </>
    );
}