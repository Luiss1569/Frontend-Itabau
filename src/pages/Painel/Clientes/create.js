import React, { useState, useEffect } from 'react';
import api from '../../../services/api'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom'

import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Carrossel from '../../../components/Carrossel'
import SnackBar from '../../../components/SnackBar'

import bg from '../../../assets/img/matriz/bg.jpg'

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function CreateCliente({ history }) {

    const [nome, setNome] = useState('')
    const [rua, setRua] = useState('')
    const [telefone, setTelefone] = useState('')
    const [cidade, setCidade] = useState('')
    const [bairro, setBairro] = useState('')
    const [lat, setLat] = useState('')
    const [long, setLong] = useState('')
    const [open, setOpen] = useState({ type: 'success', bool: false, children: 'Cliente Salvo' });

    useEffect(() => {
        window.scrollTo(0, 300)
        async function testLogin() {
            const log = await localStorage.getItem('@itabau/login')
            if (!log) {
                history.push('/home')
            }
        }
        testLogin()
    }, [history])

    useEffect(() => {
        async function getEndress() {
            if (long !== '' && lat !== '') {
                const { results, status } = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDNsh5nO2nantURwxD1Amcg6G4Ldgqv7ug&latlng=${lat},${long}`, {
                    method: 'get'
                }).then(function (response) {
                    return response.json();
                })

                if (status === 'OK') {
                    try {
                        let result = results[0].address_components
                        let cidade = ""
                        result.forEach(element => {
                            console.log(element.types);
                            if(element.types.includes("route")){
                                setRua(element.short_name)
                                return
                            }
                            if(element.types.includes("sublocality_level_1" )){
                                setBairro(element.short_name)
                                return
                            }
                            if(element.types.includes("administrative_area_level_2")){
                               cidade = element.short_name
                                return
                            }
                            if(element.types.includes("administrative_area_level_1")){
                                setCidade(cidade + "-"+ element.short_name)
                                return
                            }
                        });
                    } catch (error) {
                        console.log(error);
                    }
                }
            }
        }
        getEndress()
    }, [long, lat])

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

        const response = await fetch(`${api}/php/location/insert.php`, {
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
                children: 'Cliente Criado'
            })
            setNome('')
            setRua('')
            setTelefone('')
            setCidade('')
            setLat('')
            setLong('')
            setBairro('')
        } else {
            setOpen({
                type: 'error',
                bool: true,
                children: 'Cliente não Criado'
            })
        }
    }

    return (<>

        <Header />
        <Carrossel style={{ backgroundSize: 'cover ' }} images={[bg]} />
        <SnackBar setOpen={setOpen} open={open.bool} type={open.type}>{open.children}</SnackBar>
        <div className={'margin'} />
        <div className='container container-historia animated'>
            <div className='content-itens left' data-about>
                <h3><Link to='/painel/cliente' ><ArrowBackIcon /></Link>Criar Cliente</h3>
            </div>
        </div>
        <div className='container animated' style={{ alignItems: 'flex-start' }}>
            <div className='content-itens left' data-about>
                <form className='' autoComplete="off" onSubmit={handleSubmit}  style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                    <TextField id="outlined-basic" style={{ marginBottom: 20 }} value={lat} label="Latitude" onChange={e => { setLat(e.target.value) }} required type='number' fullWidth variant="outlined" />
                    <TextField id="outlined-basic" style={{ marginBottom: 20 }} value={long} label="Longitude" onChange={e => { setLong(e.target.value) }} type='number' required fullWidth variant="outlined" />
                    <TextField id="outlined-basic" style={{ marginBottom: 20 }} value={nome} onChange={e => { setNome(e.target.value) }} label="Nome" required variant="outlined" fullWidth />
                    <TextField id="outlined-basic" style={{ marginBottom: 20 }} value={cidade} label="Cidade (Cidade-UF)" onChange={e => { setCidade(e.target.value) }} fullWidth variant="outlined" />
                    <TextField id="outlined-basic" style={{ marginBottom: 20 }} value={telefone} label="Telefone ( 00-12345-1234)" onChange={e => { setTelefone(e.target.value) }} required type='tel' fullWidth variant="outlined" />
                    <TextField id="outlined-basic" style={{ marginBottom: 20 }} value={rua} label="Rua" onChange={e => { setRua(e.target.value) }} required fullWidth variant="outlined" />
                    <TextField id="outlined-basic" style={{ marginBottom: 20 }} value={bairro} label="Bairro" onChange={e => { setBairro(e.target.value) }} required fullWidth variant="outlined" />
                    <Button variant='outlined' type='submit' color='primary'>Enviar</Button>
                </form>
            </div>
        </div>
        <div style={{ marginBottom: 50 }} />
        <Footer />
    </>)
}

export default CreateCliente;