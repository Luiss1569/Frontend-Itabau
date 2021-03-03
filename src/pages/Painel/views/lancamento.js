import React, { useState, useEffect, useMemo } from 'react';
import api from '../../../services/api'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom'

import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Carrossel from '../../../components/Carrossel'
import SnackBar from '../../../components/SnackBar'

import BackspaceIcon from '@material-ui/icons/Backspace';
import Camera from '@material-ui/icons/AddAPhoto';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import '../style.css'

const bg = `${window.location.origin}/img/matriz/bg.jpg`

function UpdateCliente({ match, history }) {

    const [title, setTitle] = useState('')
    const [options, setOptions] = useState('')
    const [image, setImage] = useState('')
    const [preview, setPreview] = useState(null)
    const [thumbnail, setThumbnail] = useState(null)
    const [open, setOpen] = useState({ type: 'success', bool: false, children: 'Cliente Salvo' });
    let imagem;

    function selectFileHandle(e) {
        imagem = { selectFile: e.target.files[0] }
        setThumbnail(imagem.selectFile)

    }

    useEffect(() => {
        window.scrollTo(0, 0)
        async function testLogin(){
            const log = await localStorage.getItem('@itabau/login')
            if(!log){
                history.push('/home')
            }
        }  
        testLogin()
        async function getMensagens() {
            const response = await fetch(`${api}/php/lancamento/get.php`, {
                method: 'get',
            }).then(function (response) {
                return response.json();
            })
            if (response.data) {
                alert('error')
            } else {
                setTitle(response.TITULO)
                setOptions(response.OPCOES)
                setImage(response.IMAGEM)
                console.log(response.IMAGEM);
            }
            console.log(response);

        }
        getMensagens()
    }, [history])

    useMemo(() => {
        thumbnail ? setPreview(URL.createObjectURL(thumbnail)) : setPreview(`${api}/php/${image}`)
    }, [thumbnail, image])


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    function removeImgs() {
        if (thumbnail) {
            setThumbnail(null)
        } else {
            if (image) {
                setImage(null)
            }
        }
    }

    async function handleSubmit(e) {
        e.preventDefault()
        // const data = {nome, email, telefone, cidade, estado, assunto, mensagem}

        const data = new FormData()
        data.append('title', title)
        data.append('options', options)

        if (thumbnail) {
            data.append('pic', thumbnail)
        } else {
            if (image) {
                data.append('image', image)
            } else {
                data.append('image', "none")
            }
        }

        const response = await fetch(`${api}/php/lancamento/insert.php`, {
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
                children: 'Lançamentos Atualizado'
            })
        } else {
            setOpen({
                type: 'error',
                bool: true,
                children: 'Lançamentos não Atualizado'
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
                <h3><Link to='/painel/cliente' ><ArrowBackIcon /></Link>Atualizar Lançamentos</h3>
            </div>
        </div>
        <div className='container animated' style={{ alignItems: 'flex-start' }}>
            <div className='content-itens left' data-about>
                <form autoComplete="off" onSubmit={handleSubmit}>
                    <TextField id="outlined-basic" style={{ marginBottom: 20 }} value={title} onChange={e => { setTitle(e.target.value) }} label="Titulo" required variant="outlined" multiline fullWidth />
                    <TextField id="outlined-basic" style={{ marginBottom: 20 }} value={options} label="Opcões (Separe por ; )" onChange={e => { setOptions(e.target.value) }} multiline fullWidth variant="outlined" />
                    <div style={{ position: 'absolute', right: 0, color: 'tomato', cursor: 'help' }} onClick={()=>{removeImgs()}}>
                            <BackspaceIcon />
                        </div>
                    <label style={{ backgroundImage: `url(${preview})` }}
                        className={thumbnail ? 'has-thumbnail' : ''}
                        id="thumbnail">
                        <Camera />
                        <input
                            className="file"
                            type="file"
                            placeholder="Imagem"
                            value={imagem}
                            onChange={e => selectFileHandle(e)}
                        />
                    </label>
                    <Button variant='outlined' type='submit' style={{ marginLeft: '40%' }} color='primary'>Enviar</Button>
                </form>
            </div>
        </div>
        <div style={{ marginBottom: 50 }} />
        <Footer />
    </>)
}

export default UpdateCliente;