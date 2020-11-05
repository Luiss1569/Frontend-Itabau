import react from 'react'

export default function Boleto() {

    react.useEffect(() => {
        window.open('https://www63.bb.com.br/portalbb/boleto/boletos/hc21e,802,3322,10343.bbx?_ga=2.76889301.1376961221.1495040857-334377190.1487691635', '_blank');
        window.history.back()
    })

    return (<></>)
}