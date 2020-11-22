import React from 'react';

import Tooltip from '@material-ui/core/Tooltip';

import Lottie from 'react-lottie';

import animationIconLocation from '../../assets/animations/iconLocation.json'
import animationBad from '../../assets/animations/bad.json'

import './style.css'
import { PinDropSharp } from '@material-ui/icons';
import Grow from '@material-ui/core/Grow';

import { Link } from 'react-router-dom';

function Location(props) {

    if (props.locations.length === 0) {
        return (
            <>
                <h3 id='heLocation' style={{marginTop:0, marginBottom:0, textAlign: 'center'}}> Infelizmente ainda não temos pontos de venda em sua cidade, estamos expandindo aos pouco e
             quem sabe em breve, estaremos aí, pertinho de você. Caso queira ser um revendedor<Link to='/matriz' style={{ textDecoration: 'none' }}> clique aqui</Link> e envie sua mensagem.</h3>
                <Lottie options={{
                    loop: true,
                    autoplay: true,
                    animationData: animationBad,
                    rendererSettings: {
                        preserveAspectRatio: 'xMidYMid slice'
                    }
                }}
                    height={75}
                    width={75} />
            </>
        )
    }

    return (<>
        {props.locations.map((location, index) => (

            <Grow
                in={true}
                style={{ transformOrigin: '0 0 0' }}
                {...{ timeout: (1000 * index + 1) }}
            >
                <div className='content'>
                    <div className='box-location'>
                        <div className='header'>
                            <PinDropSharp style={{ color: '#fff', marginRight: 5 }} />
                            <h4>{location.CIDADE}</h4>
                        </div>
                        <div className='body'>
                            <Tooltip title="Ver Rotas" aria-label="Ver Rotas">
                                <div className='content'>
                                    <a href={`https://www.google.com/maps/dir/?api=1&destination=${location.LATITUDE},${location.LONGITUDE}`} rel="noreferrer"
                                        target='_blank' onmouseover="Tip('Ver Rota')" onmouseout="UnTip()">
                                        <Lottie options={{
                                            loop: true,
                                            autoplay: true,
                                            animationData: animationIconLocation,
                                            rendererSettings: {
                                                preserveAspectRatio: 'xMidYMid slice'
                                            }
                                        }}
                                            height={100}
                                            width={100} />
                                    </a>
                                </div>
                            </Tooltip>
                            <h4>{location.NOME}</h4>
                            <h4>{location.RUA}</h4>
                            <h4>{location.BAIRRO}</h4>
                            <h4><a style={{color: 'inherit', textDecoration:'none'}} href={`tel:${location.TELEFONE}`}>{location.TELEFONE}</a></h4>
                        </div>
                    </div>
                </div>
            </Grow>
        ))}
    </>)
}

export default Location;