import React, {useState} from 'react';
import { CgMenuRound } from 'react-icons/cg';
import './style.css';

export default function Header(){
    const [menuResponse, setMenuResponse] = useState(false);
    const toggleMenu = () => {
        setMenuResponse(!menuResponse);
    }

    const handleLinkClick = () => {
        setMenuResponse(false);
    }
    return(
        <header>
            <div className='container topo'>
                <div className='logo'>
                    <img src='/assets/rwmaster_logo.png' alt='logo RW Master Contabilidade'/>
                </div>
                <nav className='navegacao'>
                    <ul className={`navegacao-menu ${menuResponse ? 'navegacao-menu-open' : ''}`}>
                        <li><a href='/' onClick={handleLinkClick}>Home</a></li>
                        <li><a href='/servicos' onClick={handleLinkClick}>Serviços</a></li>
                        <li><a href='/produtos' onClick={handleLinkClick}>Produtos</a></li>
                        <li><a href='/contato' onClick={handleLinkClick}>Contato</a></li>
                        <li><a href='/area-cliente' className='btn-area-cliente'><span><img src='/assets/enter.png' alt='icon enter' onClick={handleLinkClick}/></span>Area do Cliente</a></li>
                    </ul>
                    <button className='btn-response' onClick={toggleMenu}><CgMenuRound className='btn-res'/></button>   
                </nav>
            </div>
        </header>
    );
}