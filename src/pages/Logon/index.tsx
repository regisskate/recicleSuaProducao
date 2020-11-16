import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import './styles.css';
import LogoImg from '../../assets/logo.png'
function Logon() {
    return (
        <div className="logon-container">
            <img src={LogoImg} alt="Recicle sua produção"/>
            <section className="form">
                <form>
                    <h1>Faça seu login</h1>
                    <input placeholder="Sua ID" />
                    <button className="button" type="submit">Entrar</button>
                    <a href="/register">
                        <FiLogIn size={16} color=" #E02041 " />
                        Não tenho cadastro
                    </a>
                </form>
            </section>
            
        </div>
    )
}

export default Logon 