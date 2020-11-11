import React, { useState, useEffect } from 'react';
import api from '../../services/api'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Carrossel from '../../components/Carrossel'

import Lottie from 'react-lottie';

import animationIconLocation from '../../assets/animations/iconLocation.json'

import bg from '../../assets/img/matriz/bg.jpg'

import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';

import './style.css'

function Lançamento() {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const [cidade, setCidade] = useState('')
    const [estado, setEstado] = useState('')
    const [assunto, setAssunto] = useState('')
    const [mensagem, setMensagem] = useState('')
  
    useEffect(() => {
        window.scrollTo(0, 0)
        try {
            document.querySelectorAll('.animated div[data-about]')[0].removeAttribute('data-about');
            document.querySelectorAll('.animated div[data-about]')[0].removeAttribute('data-about');
        } catch (error) {
            console.log(error);
        }
      },[])

    const estados = [
        { key: "AC", value: "Acre" },
        { key: "AL", value: "Alagoas" },
        { key: "AP", value: "Amapá" },
        { key: "AM", value: "Amazonas" },
        { key: "BA", value: "Bahia" },
        { key: "CE", value: "Ceará" },
        { key: "DF", value: "Distrito Federal" },
        { key: "ES", value: "Espírito Santo" },
        { key: "GO", value: "Goiás" },
        { key: "MA", value: "Maranhão" },
        { key: "MT", value: "Mato Grosso" },
        { key: "MS", value: "Mato Grosso do Sul" },
        { key: "MG", value: "Minas Gerais" },
        { key: "PA", value: "Pará" },
        { key: "PB", value: "Paraíba" },
        { key: "PR", value: "Paraná" },
        { key: "PE", value: "Pernambuco" },
        { key: "PI", value: "Piauí" },
        { key: "RJ", value: "Rio de Janeiro" },
        { key: "RN", value: "Rio Grande do Norte" },
        { key: "RS", value: "Rio Grande do Sul" },
        { key: "RO", value: "Rondônia" },
        { key: "RR", value: "Roraima" },
        { key: "SC", value: "Santa Catarina" },
        { key: "SP", value: "São Paulo" },
        { key: "SE", value: "Sergipe" },
        { key: "TO", value: "Tocantins" }
    ]

    async function handleSubmit(e) {
        e.preventDefault()
        // const data = {nome, email, telefone, cidade, estado, assunto, mensagem}

        const data = new FormData()
        data.append('nome', nome)
        data.append('email', email)
        data.append('telefone', telefone)
        data.append('cidade', cidade)
        data.append('estado', estado)
        data.append('assunto', assunto)
        data.append('mensagem', mensagem)

        const response = await fetch(`${api}/php/matriz/insert.php`, {
            method: 'post',
            body: data
        }).then(function (response) {
            return response.json();
        })

        console.log(response);

        if(response.result){
            alert('Mensagem Enviada')
        }else{
            alert('Mensagem não Enviada')
        }
    }

    return (<>

        <Header />
        <Carrossel style={{ backgroundSize: 'cover ' }} images={[bg]} />
        <div className={'margin'} />
        <div className='container container-historia animated'>
            <div className='content-itens left' data-about>
                <h3>Itabaú Matriz</h3>
                <p>Entre em contato conosco através do número (12) 3971-1492 ou preenchendo o formulário abaixo:</p>
            </div>
        </div>
        <div className='container animated' style={{ alignItems: 'flex-start' }}>
            <div className='content-itens left' data-about>
                <form className='' autoComplete="off" onSubmit={handleSubmit}>
                    <TextField id="outlined-basic" style={{ marginBottom: 20 }} value={nome} onChange={e => { setNome(e.target.value) }} label="Nome" required variant="outlined" fullWidth />
                    <TextField id="outlined-basic" style={{ marginBottom: 20 }} value={email} label="Email" onChange={e => { setEmail(e.target.value) }} required type='email' fullWidth variant="outlined" />
                    <TextField id="outlined-basic" style={{ marginBottom: 20 }} value={telefone} label="Telefone ( 00-12345-1234)" onChange={e => { setTelefone(e.target.value) }} required type='tel' inputProps={{ pattern: "[0-9]{2}-[0-9]{5}-[0-9]{4}" }} fullWidth variant="outlined" />
                    <TextField id="outlined-basic" style={{ marginBottom: 20 }} value={cidade} label="Cidade" onChange={e => { setCidade(e.target.value) }} fullWidth variant="outlined" />
                    <FormControl variant="outlined" style={{ marginBottom: 20, width: '100%' }} className={''}>
                        <InputLabel id="demo-simple-select-outlined-label">Estado</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            style={{ width: '100%' }}
                            value={estado}
                            onChange={e => { setEstado(e.target.value) }}
                            label="Idade"
                        >
                            <MenuItem value="">
                                <em>Nenhum</em>
                            </MenuItem>
                            {estados.map(estado => (
                                <MenuItem value={estado.key}>{estado.value}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <TextField id="outlined-basic" style={{ marginBottom: 20 }} value={assunto} label="Assunto" onChange={e => { setAssunto(e.target.value) }} fullWidth variant="outlined" />
                    <TextField id="outlined-basic" style={{ marginBottom: 20 }} value={mensagem} label="Mensagem" onChange={e => { setMensagem(e.target.value) }} fullWidth required multiline
                        rowsMax={4} variant="outlined" rows={4} />
                    <Button variant='outlined' type='submit' style={{ marginLeft: '40%' }} color='primary'>Enviar</Button>
                </form>
            </div>
            <div style={{ marginBottom: 50 }} />
            <div className='content-itens right' data-about>
                <p>
                    <a href="https://www.google.com.br/maps/dir/''/Itabau/@-22.6786713,-45.7560131,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94cc7b9000738dbd:0x2107f48dcf11dcab!2m2!1d-45.685619!2d-22.679151"
                        rel="noreferrer"
                        target='_blank'
                        style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
                    >
                        <Lottie options={{
                            loop: true,
                            autoplay: true,
                            animationData: animationIconLocation,
                            rendererSettings: {
                                preserveAspectRatio: 'xMidYMid slice'
                            }
                        }}
                            height={75}
                            width={75} /><label style={{ marginLeft: 0 }}>Clique aqui e veja sua rota como chegar até a Itabaú!</label>
                    </a>
                </p>
                <label>Estrada Benedito Gomes de Souza, KM 4,6 Bairro: Paiol Grande</label><br />
                <label>CEP: 12490-000 São Bento do Sapucaí SP</label><br />
                <label>Caixa Postal 19</label>
            </div>
        </div>
        <div style={{ marginBottom: 100 }} />
        <Footer />
    </>)
}

export default Lançamento;