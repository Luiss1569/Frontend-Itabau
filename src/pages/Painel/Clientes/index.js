import * as React from 'react';
import { useEffect, useState } from 'react';

import api from '../../../services/api'

import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Carrossel from '../../../components/Carrossel'
import SnackBar from '../../../components/SnackBar'
import DataTable from './table'

import { Link } from 'react-router-dom'

import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import bg from '../../../assets/img/Historia/bg.jpg'

export default function Index({history}) {

    const [mensagens, setMensagens] = useState([])
    const [open, setOpen] = useState({ type: 'success', bool: false, children: 'Cliente Salvo' });

    useEffect(() => {
        window.scrollTo(0, 300)
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
        <div className='container container-historia animated' style={{ paddingBottom: 200, paddingTop: 30 }}>
            <div className='content-itens left' style={{paddingBottom:30}} data-about>
                <h3><Link to='/painel/home' ><ArrowBackIcon /></Link>Clientes <Link style={{ position: 'absolute', right: 30 }} to='/painel/cliente/create'><AddCircleOutlineIcon style={{ color: 'green', fontSize: 40 }} /></Link></h3>
            </div>
            <div style={{ width: '100%' }}>
                <DataTable data={mensagens} handleDelete={handleDelete}/>
            </div>      
             </div>
        <Footer />
    </>
    );
}