import React from 'react';

import Tooltip from '@material-ui/core/Tooltip';

import Lottie from 'react-lottie';

import animationIconLocation from '../../assets/animations/iconLocation.json'

import './style.css'
import { PinDropSharp } from '@material-ui/icons';

function Location(props) {

    if(props.locations.length === 0){
        return (
            <h3 id='heLocation'>Sem Locais Próximos</h3>
        )
    }

    return (<>
            {props.locations.map(location => (
                <div className='box-location'>
                    <div className='header'>
                        <PinDropSharp style={{ color: '#fff', marginRight: 5 }} />
                        <h4>{location.NOME}</h4>
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
                        <h4>{location.CIDADE}</h4>
                        <h4>{location.RUA}</h4>
                        <h4>{location.BAIRRO}</h4>
                        <h4>{location.TELEFONE}</h4>
                    </div>
                </div>

            ))}
    </>)
}

export default Location;