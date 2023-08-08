import React from 'react';
import './style.css';

export default function Header(){
    return(
        <header>
            <div className='container topo'>
                <div className='logo'>
                    <img src='/assets/rwmaster_logo.png' alt='logo RW Master Contabilidade'/>
                </div>
                <nav className='navegacao'>
                    <ul className='navegacao-menu'>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/servicos'>Serviços</a></li>
                        <li><a href='/produtos'>Produtos</a></li>
                        <li><a href='/contato'>Contato</a></li>
                        <li><a href='/area-cliente' className='btn-area-cliente'><span><img src='/assets/enter.png' alt='icon enter'/></span>Area do Cliente</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}