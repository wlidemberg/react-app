import React from 'react';
import './style.css'

export default function Footer(){
    return(
        <footer>
            <div className='container'>
                <div className='footer-content'>
                    <div className='footer-item'>
                        <img className='footer-logo' src='/assets/logo_desc.png' alt='Logo RW Master'/>
                    </div>
                    <div className='footer-item'>
                        <div className='footer-item-content'>
                            <nav className='footer-navegacao'>
                                <ul className='footer-navegacao-menu'>
                                    <li><a href='/'>Home</a></li>
                                    <li><a href='/servicos'>Serviços</a></li>
                                    <li><a href='/produtos'>Produtos</a></li>
                                    <li><a href='/calculaIrrf'>IRRF</a></li>
                                </ul>
                            </nav>
                            <div className='footer-localizacao'>
                                <div><a href='/envia-email'><img src='/assets/email.png' alt='icone email'/></a></div>
                                <div><a href='/localizacao'><img src='/assets/localizacao.png' alt='icone localização google maps'/></a></div>
                            </div>
                        </div>
                        
                    </div>
                    <div className='footer-item'>
                        <div className='footer-item-redes'>
                            <div><img src='/assets/whatsapp.png' alt='logo whatsapp botão'/></div>
                            <div><img src='/assets/instagran.png' alt='logo Instagran botão'/></div>
                            <div><img src='/assets/facebook.png' alt='logo Facebook botão'/></div>
                            <div><img src='/assets/twitter.png' alt='logo twitter botão'/></div>
                            <div><img src='/assets/youtube.png' alt='logo youtube botão'/></div>
                        </div>
                    </div>
                </div>
                <div className='footer-copy'>
                    <p>&copy; Copyright 2023 - Todos os Direitos Reservados a RW Master - Contabilidade - Desenvolvido por <a href='/automatizei'>Automatizei Soluções em Informatica Ltda</a></p>
                </div>
            </div>
        </footer>
    );
}