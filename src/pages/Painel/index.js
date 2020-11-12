import React,{useState, useEffect} from 'react';

import Header from '../../components/Header'
import Paper from '@material-ui/core/Paper';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import './style.css'

function Lançamento({history}) {
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0)
    })

    async function handleSubmit(e) {
        e.preventDefault()

        if(user === 'itabau' && password === '1'){
            
           history.push('/painel/home')
           localStorage.setItem('@itabau/login', true)
        }else{
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 2000);
        }

    }

    return (<>
        <Header />
        <div className=' container container-login animated' style={{}}>    
            <div className='content-itens left'>
                <Paper style={{padding: 20, backgroundColor: '#f5f5f5'}} elevation={10}>
                <h3 style={{marginBottom: 30, marginTop:0}}>Login</h3>
                <form className='' autoComplete="off" onSubmit={handleSubmit}>
                    <TextField id="outlined-basic" style={{ marginBottom: 20 }} value={user} error={error} onChange={e => { setUser(e.target.value) }} label="User" required variant="outlined" fullWidth />
                    <TextField id="outlined-basic" style={{ marginBottom: 20 }} value={password} error={error} label="Senha" onChange={e => { setPassword(e.target.value) }} required type='password' fullWidth variant="outlined" />
                    <Button  type='submit' style={{ marginLeft: '40%' }} color='primary'>Entrar</Button>
                </form>
                </Paper>
            </div>
        </div>
    </>)
}

export default Lançamento;