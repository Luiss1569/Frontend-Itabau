import React, { useState, useEffect } from 'react';
import api from '../../services/api'

import Lottie from 'react-lottie';

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Carrossel from '../../components/Carrossel'
import SnackBar from '../../components/SnackBar'

import bg from '../../assets/img/matriz/bg.jpg'

import animationSend from '../../assets/animations/sendMensage.json'

import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';

import './style.css'

function Pesquisa() {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const [cidade, setCidade] = useState('')
    const [idade, setIdade] = useState('')
    const [estado, setEstado] = useState('')
    const [o1, setO1] = useState('')
    const [o2, setO2] = useState('')
    const [o3, setO3] = useState('')
    const [o4, setO4] = useState('')
    const [o5, setO5] = useState('')
    const [o6, setO6] = useState('')
    const [o7, setO7] = useState('')
    const [send, setSend] = useState(false)
    const [active, setActive] = useState(false)
    const [open, setOpen] = useState({
        type: 'error',
        bool: false,
        children: ''
    });

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

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
        // const data = {nome,email, telefone, cidade, idade, estado, o1, o2, o3, o4, o5, o6, o7}
        setActive(true)
        const data = new FormData()
        data.append('nome', nome)
        data.append('email', email)
        data.append('telefone', telefone)
        data.append('cidade', cidade)
        data.append('estado', estado)
        data.append('idade', idade)
        data.append('o1', o1)
        data.append('o2', o2)
        data.append('o3', o3)
        data.append('o4', o4)
        data.append('o5', o5)
        data.append('o6', o6)
        data.append('o7', o7)

        const response = await fetch(`${api}/php/pesquisa/insert.php`, {
            method: 'post',
            body: data
        }).then(function (response) {
            return response.json();
        }).catch(function(error) {
            console.log('There has been a problem with your fetch operation: ' + error.message);
            return {}
          });

        if (response.result) {
            setSend(true)
            window.scroll({ top: 380, left: 0, behavior: 'smooth' })
        } else {
            setOpen({
                type: 'error',
                bool: true,
                children: 'Pesquisa não enviada'
            })
        }
        setActive(false)
        
    }

    return (<>

        <Header />
        <SnackBar setOpen={setOpen} open={open.bool} type={open.type}>{open.children}</SnackBar>
        <Carrossel style={{ backgroundSize: 'cover ' }} images={[bg]} />
        <div className={'margin'} />
        <div className='container container-historia animated'>
            <div className='content-itens left' data-about>
                <h3>Pesquisa de Opinião</h3>
                <p>Ajude-nos a melhorar nossos produtos e serviços respondendo o questionário abaixo, pois é fundamental para o nosso aprimoramento, e também para melhor atendê-lo.</p>
            </div>
        </div>
        <div className='container animated'>
            <div className='content-itens left' data-about>
                {send ? (
                    <>
                        <Lottie options={{
                            loop: false,
                            autoplay: send,
                            animationData: animationSend,
                            rendererSettings: {
                                preserveAspectRatio: 'xMidYMid slice'
                            }
                        }}
                            height={400}
                            width={200} />
                    </>
                ) : (
                        <form className='' autoComplete="off" onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column', alignItems:'center'}}>

                            <TextField id="outlined-basic" style={{ marginBottom: 20 }} value={nome} onChange={e => { setNome(e.target.value) }} label="Nome" required variant="outlined" fullWidth />

                            <TextField id="outlined-basic" style={{ marginBottom: 20 }} value={email} onChange={e => { setEmail(e.target.value) }} label="Email" required type='email' fullWidth variant="outlined" />

                            <TextField id="outlined-basic" style={{ marginBottom: 20 }} value={telefone} onChange={e => { setTelefone(e.target.value) }} label="Telefone ( 00-12345-1234)" type='tel' inputProps={{ pattern: "[0-9]{2}-[0-9]{5}-[0-9]{4}" }} fullWidth variant="outlined" />

                            <TextField id="outlined-basic" style={{ marginBottom: 20 }} value={cidade} onChange={e => { setCidade(e.target.value) }} label="Cidade" fullWidth variant="outlined" />

                            <TextField id="outlined-basic" style={{ marginBottom: 20 }} value={idade} onChange={e => { setIdade(e.target.value) }} label="Idade" fullWidth type='number' variant="outlined" />

                            <FormControl variant="outlined" style={{ marginBottom: 20, width: '100%' }} className={''}>
                                <InputLabel id="demo-simple-select-outlined-label">Estado</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    style={{ width: '100%' }}
                                    value={estado}
                                    onChange={e => { setEstado(e.target.value) }}
                                    label="Estado"
                                >
                                    <MenuItem value="">
                                        <em>Nenhum</em>
                                    </MenuItem>
                                    {estados.map(estado => (
                                        <MenuItem value={estado.key}>{estado.value}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>

                            <TextField id="outlined-basic" style={{ marginBottom: 20 }}
                                label="O que você acha dos produtos Itabaú e suas variedades?"
                                fullWidth
                                value={o1}
                                onChange={e => { setO1(e.target.value) }}
                                multiline
                                rowsMax={6}
                                variant="outlined"
                                rows={4} />

                            <TextField id="outlined-basic" style={{ marginBottom: 20 }}
                                label="Qual o sabor que falta de picolé e sorvete de massa em nossa linha, que você acha interessante termos?"
                                fullWidth
                                value={o2}
                                onChange={e => { setO2(e.target.value) }}
                                multiline
                                rowsMax={6} variant="outlined"
                                rows={4} />

                            <TextField id="outlined-basic" style={{ marginBottom: 20 }}
                                label="O que você acha do preço dos nossos produtos?"
                                fullWidth
                                value={o3}
                                onChange={e => { setO3(e.target.value) }}
                                multiline
                                rowsMax={6}
                                variant="outlined"
                                rows={4} />

                            <TextField id="outlined-basic" style={{ marginBottom: 20 }}
                                label="Você recomendaria a Itabaú para seus parentes, amigos ou companheiros?"
                                fullWidth
                                value={o4}
                                onChange={e => { setO4(e.target.value) }}
                                multiline
                                rowsMax={6}
                                variant="outlined"
                                rows={4} />

                            <TextField id="outlined-basic" style={{ marginBottom: 20 }}
                                label="Com qual frequência você toma sorvete?"
                                fullWidth
                                onChange={e => { setO5(e.target.value) }}
                                value={o5}
                                multiline
                                rowsMax={6}
                                variant="outlined"
                                rows={4} />

                            <TextField id="outlined-basic" style={{ marginBottom: 20 }}
                                label="Por favor, diga-nos o que podemos fazer para melhorar"
                                fullWidth
                                value={o6}
                                onChange={e => { setO6(e.target.value) }}
                                multiline
                                rowsMax={6}
                                variant="outlined"
                                rows={4} />

                            <TextField id="outlined-basic" style={{ marginBottom: 20 }}
                                label="Se você pudesse melhorar algo em nosso produtos, o que melhoraria?"
                                fullWidth
                                value={o7}
                                onChange={e => { setO7(e.target.value) }}
                                multiline
                                rowsMax={6}
                                variant="outlined"
                                rows={4} />

                            <Button variant='outlined' disabled={active} type='submit' style={{ marginBottom: '20%' }} color='primary'>Enviar</Button>
                        </form>
                    )}
            </div>
        </div>
        <Footer />
    </>)
}

export default Pesquisa;