import React, { useState, useEffect } from 'react';
import api from '../../../services/api'

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CircularProgress from '@material-ui/core/CircularProgress';

import { Link } from 'react-router-dom'

import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Carrossel from '../../../components/Carrossel'
import SnackBar from '../../../components/SnackBar'

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const bg = `${window.location.origin}/img/matriz/bg.jpg`

function UpdateCliente({ match, history }) {

    const [loading, setLoading] = useState('')
    const [nome, setNome] = useState('')
    const [rua, setRua] = useState('')
    const [telefone, setTelefone] = useState('')
    const [cidade, setCidade] = useState('')
    const [bairro, setBairro] = useState('')
    const [lat, setLat] = useState('')
    const [long, setLong] = useState('')
    const [id, setID] = useState('')
    const [open, setOpen] = useState({ type: 'success', bool: false, children: 'Cliente Salvo' });
    const [active, setActive] = useState(false)

    async function getUpdate() {
        setActive(true)
        const { NOME, BAIRRO, CIDADE, LATITUDE, LONGITUDE, TELEFONE, RUA, ID, error } = await fetch(`${api}/php/location/update.php?id=${match.params.id}`, {
            method: 'get'
        }).then(function (response) {
            return response.json();
        }).catch(function (error) {
            console.log('There has been a problem with your fetch operation: ' + error.message);
            return {error: true}
        });

        if (error) {
            setOpen({
                type: 'error',
                bool: true,
                children: 'Erro ao carregar cliente'
            })
            setLoading(false)
            return 0
        }
        setActive(false)

        setNome(NOME)
        setBairro(BAIRRO)
        setCidade(CIDADE)
        setLat(LATITUDE)
        setLong(LONGITUDE)
        setTelefone(TELEFONE)
        setRua(RUA)
        setID(ID)
        setLoading(false)
    }

    useEffect(() => {
        window.scrollTo(0, 300)
        async function testLogin() {
            const log = await localStorage.getItem('@itabau/login')
            if (!log) {
                history.push('/home')
            }
        }
        testLogin()
        setLoading(true)
        getUpdate()
        // eslint-disable-next-line
    }, [match.params.id])

    async function handleSubmit(e) {
        e.preventDefault()
        // const data = {nome, email, telefone, cidade, estado, assunto, mensagem}
        setActive(true)
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
        }).catch(function (error) {
            console.log('There has been a problem with your fetch operation: ' + error.message);
            return {}
        });

        console.log(response);

        if (response.result) {
            setOpen({
                type: 'success',
                bool: true,
                children: 'Cliente Atualizado'
            })
        } else {
            setOpen({
                type: 'error',
                bool: true,
                children: 'Cliente não Atualizado'
            })
        }
        setActive(false)
    }

    return (<>

        <Header />
        <Carrossel style={{ backgroundSize: 'cover ' }} images={[bg]} />
        <SnackBar setOpen={setOpen} open={open.bool} type={open.type}>{open.children}</SnackBar>
        <div className={'margin'} />
        <div className='container container-historia animated'>
            <div className='content-itens left' data-about>
                <h3><Link to='/painel/cliente' ><ArrowBackIcon /></Link>Atualizar Cliente</h3>
            </div>
        </div>
        <div className='container animated' style={{ alignItems: 'flex-start' }}>
            {loading ? (
                <div className='content-itens left' data-about>
                    <div style={{ display: 'flex', flex: 1, height: 300, justifyContent: 'center', alignItems: 'center' }}><CircularProgress /></div>
                </div>
            ) : (
                    <div className='content-itens left' data-about>
                        <form className='' autoComplete="off" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <TextField id="outlined-basic" style={{ marginBottom: 20 }} value={nome} onChange={e => { setNome(e.target.value) }} label="Nome" required variant="outlined" fullWidth />
                            <TextField id="outlined-basic" style={{ marginBottom: 20 }} value={cidade} label="Cidade" onChange={e => { setCidade(e.target.value) }} required fullWidth variant="outlined" />
                            <TextField id="outlined-basic" style={{ marginBottom: 20 }} value={telefone} label="Telefone ( 00-12345-1234)" onChange={e => { setTelefone(e.target.value) }} type='tel' fullWidth variant="outlined" />
                            <TextField id="outlined-basic" style={{ marginBottom: 20 }} value={rua} label="Rua" onChange={e => { setRua(e.target.value) }} required fullWidth variant="outlined" />
                            <TextField id="outlined-basic" style={{ marginBottom: 20 }} value={bairro} label="Bairro" onChange={e => { setBairro(e.target.value) }} required fullWidth variant="outlined" />
                            <TextField id="outlined-basic" style={{ marginBottom: 20 }} value={lat} label="Latitude" onChange={e => { setLat(e.target.value) }} required type='number' fullWidth variant="outlined" />
                            <TextField id="outlined-basic" style={{ marginBottom: 20 }} value={long} label="Longitude" onChange={e => { setLong(e.target.value) }} type='number' required fullWidth variant="outlined" />
                            <Button variant='outlined' disabled={active} type='submit' color='primary'>Enviar</Button>
                        </form>
                    </div>
                )}
        </div>
        <div style={{ marginBottom: 50 }} />
        <Footer />
    </>)
}

export default UpdateCliente;