import React, { useState, useEffect } from 'react';
import api from '../../../services/api'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom'

import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Carrossel from '../../../components/Carrossel'

import bg from '../../../assets/img/matriz/bg.jpg'

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function UpdateCliente({match, history}) {

    const [nome, setNome] = useState('')
    const [rua, setRua] = useState('')
    const [telefone, setTelefone] = useState('')
    const [cidade, setCidade] = useState('')
    const [bairro, setBairro] = useState('')
    const [lat, setLat] = useState('')
    const [long, setLong] = useState('')
    const [id, setID] = useState('')

    async function getUpdate(){
        const { NOME, BAIRRO, CIDADE, LATITUDE, LONGITUDE, TELEFONE,RUA, ID} = await fetch(`${api}/php/location/update.php?id=${match.params.id}`, {
            method: 'get'
        }).then(function (response) {
            return response.json();
        })
        setNome(NOME)
        setBairro(BAIRRO)
        setCidade(CIDADE)
        setLat(LATITUDE)
        setLong(LONGITUDE)
        setTelefone(TELEFONE)
        setRua(RUA)
        setID(ID)
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        getUpdate()
        // eslint-disable-next-line
    }, [match.params.id])

    async function handleSubmit(e) {
        e.preventDefault()
        // const data = {nome, email, telefone, cidade, estado, assunto, mensagem}

        const data = new FormData()
        data.append('nome', nome)
        data.append('cidade', cidade)
        data.append('telefone', telefone)
        data.append('rua', rua)
        data.append('bairro', bairro)
        data.append('lat', lat)
        data.append('long', long)
        data.append('id', id)

        const response = await fetch(`${api}/php/location/update.php`, {
            method: 'post',
            body: data
        }).then(function (response) {
            return response.json();
        })

        console.log(response);

        if(response.result){
            alert('Cliente Alterado')
            history.push('/painel/cliente')
        }else{
            alert('Cliente não Alterado')
        }
    }

    return (<>

        <Header />
        <Carrossel style={{ backgroundSize: 'cover ' }} images={[bg]} />
        <div className={'margin'} />
        <div className='container container-historia animated'>
            <div className='content-itens left' data-about>
                <h3><Link to='/painel/cliente' ><ArrowBackIcon /></Link>Atualizar Cliente</h3>
            </div>
        </div>
        <div className='container animated' style={{ alignItems: 'flex-start' }}>
            <div className='content-itens left' data-about>
                <form className='' autoComplete="off" onSubmit={handleSubmit}>
                    <TextField id="outlined-basic" style={{ marginBottom: 20 }} value={nome} onChange={e => { setNome(e.target.value) }} label="Nome" required variant="outlined" fullWidth />
                    <TextField id="outlined-basic" style={{ marginBottom: 20 }} value={cidade} label="Cidade" onChange={e => { setCidade(e.target.value) }} fullWidth variant="outlined" />
                    <TextField id="outlined-basic" style={{ marginBottom: 20 }} value={telefone} label="Telefone ( 00-12345-1234)" onChange={e => { setTelefone(e.target.value) }} required type='tel' fullWidth variant="outlined" />
                    <TextField id="outlined-basic" style={{ marginBottom: 20 }} value={rua} label="Rua" onChange={e => { setRua(e.target.value) }} required  fullWidth variant="outlined" />
                    <TextField id="outlined-basic" style={{ marginBottom: 20 }} value={bairro} label="Bairro" onChange={e => { setBairro(e.target.value) }} required  fullWidth variant="outlined" />
                    <TextField id="outlined-basic" style={{ marginBottom: 20 }} value={lat} label="Latitude" onChange={e => { setLat(e.target.value) }} required type='number'  fullWidth variant="outlined" />
                    <TextField id="outlined-basic" style={{ marginBottom: 20 }} value={long} label="Longitude" onChange={e => { setLong(e.target.value) }} type='number' required  fullWidth variant="outlined" />
                    <Button variant='outlined' type='submit' style={{ marginLeft: '40%' }} color='primary'>Enviar</Button>
                </form>
            </div>
            </div>
            <div style={{ marginBottom: 50 }} />
        <Footer />
    </>)
}

export default UpdateCliente;