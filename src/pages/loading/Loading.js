import './Loading.css'
import Logo from '../../assets/img/Logo.svg'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Loading() {
    const weiterleitung = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            weiterleitung('/landing')
        }, 3000)
    }
    )

    return (<div className='logoContainer'>
        <img className="logo" src={Logo} />
    </div>)
}

export default Loading
