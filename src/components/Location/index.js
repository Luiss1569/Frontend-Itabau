import React from 'react';

import Tooltip from '@material-ui/core/Tooltip';

import Lottie from 'react-lottie';

import animationIconLocation from '../../assets/animations/iconLocation.json'

import './style.css'
import { PinDropSharp } from '@material-ui/icons';

function Location(props) {

    return (<>

        {props.locations.map(location => (
            <div className='box-location'>
                <div className='header'>
                    <PinDropSharp style={{ color: '#fff', marginRight: 5 }} />
                    <h4>{location.nome}</h4>
                </div>
                <div className='body'>
                    <Tooltip title="Ver Rotas" aria-label="Ver Rotas">
                        <div className='content'>
                            <a href={`https://www.google.com/maps/dir/?api=1&destination=${location.long},${location.lat}`} rel="noreferrer"
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
                    <h4>{location.cidade}</h4>
                    <h4>{location.rua}</h4>
                    <h4>{location.bairro}</h4>
                    <h4>{location.tel}</h4>
                </div>
            </div>
        ))}

    </>)
}

export default Location;