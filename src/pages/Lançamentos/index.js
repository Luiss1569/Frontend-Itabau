import React,{useState, useEffect} from 'react';

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Carrossel from '../../components/Carrossel'
import api from '../../services/api'
import './style.css'

const bg = `${window.location.origin}/img/matriz/bg.jpg`


function Lançamento() {

    const [title, setTitle] = useState('')
    const [options, setOptions] = useState([])
    const [image, setImage] = useState(null)

    useEffect(() => {
        window.scrollTo(0, 0)
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
                setOptions(response.OPCOES.split(';'))
                setImage(response.IMAGEM)
                 ;
            }
             ;

        }
        getMensagens()
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (<>

        <Header />
        <Carrossel style={{ backgroundSize: 'cover ' }} images={[bg]}><h3>Lançamentos</h3></Carrossel>
        <div className={'margin'} />
        <div className='container container-historia animated'>
            <div className='content-itens left' data-about>
                <p>{title}</p>
                <p style={{ marginTop: -20 }}>
                    <ul>
                        {options.map(option=>(
                            <li key={option}>{option}</li>
                        ))}
                    </ul>
                </p>
            </div>
            <div className='content-img right' data-about style={{ marginTop: 0 }}>
                {image==='none'?(''):(
                    <img src={`${api}/php/${image}`} alt='img' />
                )}
            </div>
        </div>
        <Footer />
    </>)
}

export default Lançamento;