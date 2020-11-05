import React from 'react';

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Carrossel from '../../components/Carrossel'

import bg from '../../assets/img/matriz/bg.jpg'

import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';

import './style.css'

function Pesquisa() {
    window.scrollTo(0, 0)

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
    }

    return (<>

        <Header />
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
                <form className='' autoComplete="off" onSubmit={handleSubmit}>

                    <TextField id="outlined-basic" style={{ marginBottom: 20 }} label="Nome" required variant="outlined" fullWidth />

                    <TextField id="outlined-basic" style={{ marginBottom: 20 }} label="Email" required type='email' fullWidth variant="outlined" />

                    <TextField id="outlined-basic" style={{ marginBottom: 20 }} label="Telefone" required type='tel' fullWidth variant="outlined" />

                    <TextField id="outlined-basic" style={{ marginBottom: 20 }} label="Cidade" fullWidth variant="outlined" />

                    <TextField id="outlined-basic" style={{ marginBottom: 20 }} label="Idade" fullWidth type='number' variant="outlined" />

                    <FormControl variant="outlined" style={{ marginBottom: 20, width: '100%' }} className={''}>
                        <InputLabel id="demo-simple-select-outlined-label">Estado</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            style={{ width: '100%' }}
                            // value={age}
                            // onChange={handleChange}
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

                    <TextField id="outlined-basic" style={{ marginBottom: 20 }}
                        label="O que você acha dos produtos Itabaú e suas variedades?"
                        fullWidth
                        multiline
                        rowsMax={6}
                        variant="outlined"
                        rows={4} />

                    <TextField id="outlined-basic" style={{ marginBottom: 20 }}
                        label="Qual o sabor que falta de picolé e sorvete de massa em nossa linha, que você acha interessante termos?"
                        fullWidth
                        multiline
                        rowsMax={6} variant="outlined"
                        rows={4} />

                    <TextField id="outlined-basic" style={{ marginBottom: 20 }}
                        label="O que você acha do preço dos nossos produtos?"
                        fullWidth
                        multiline
                        rowsMax={6}
                        variant="outlined"
                        rows={4} />

                    <TextField id="outlined-basic" style={{ marginBottom: 20 }}
                        label="Você recomendaria a Itabaú para seus parentes, amigos ou companheiros?"
                        fullWidth
                        multiline
                        rowsMax={6}
                        variant="outlined"
                        rows={4} />

                    <TextField id="outlined-basic" style={{ marginBottom: 20 }}
                        label="Com qual frequência você toma sorvete?"
                        fullWidth
                        multiline
                        rowsMax={6}
                        variant="outlined"
                        rows={4} />

                    <TextField id="outlined-basic" style={{ marginBottom: 20 }}
                        label="Por favor, diga-nos o que podemos fazer para melhorar"
                        fullWidth
                        multiline
                        rowsMax={6}
                        variant="outlined"
                        rows={4} />

                    <TextField id="outlined-basic" style={{ marginBottom: 20 }}
                        label="Se você pudesse melhorar algo em nosso produtos, o que melhoraria?"
                        fullWidth
                        multiline
                        rowsMax={6}
                        variant="outlined"
                        rows={4} />

                    <Button variant='outlined' style={{ marginLeft: '40%', marginBottom: '20%' }} color='primary'>Enviar</Button>
                </form>
            </div>
        </div>
        <Footer />
    </>)
}

export default Pesquisa;