import React from 'react';
import logoImage from '../img/phoenixlogo.png';
import logoImage2 from '../img/phoenixlogo2.png';
import {Helmet} from 'react-helmet';
import {useMetaTags} from "../context/metaTagsContext";


const Layout = ({children}) => {
    const {metaTags} = useMetaTags();
    return (
        <>
            <Helmet>
                <title>{metaTags.title || 'Título predeterminado'}</title>
                <meta name="description" content={metaTags.description || 'Descripción predeterminada'}/>
                {/* ... otras metaetiquetas comunes */}
            </Helmet>
            <header style={{backgroundColor: '#FF7800', padding: '0.5rem 0', paddingBottom: '0'}}>
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <div className="container">
                        <a className="navbar-brand" href="/">
                            <img className="navbar-logo w-50" src={logoImage} alt="Logo Phoenix Group"/>
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"
                                onClick={() => document.getElementById("navbarNav").classList.toggle("show")}>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="/"
                                       style={{fontSize: '1.2rem', color: '#fff'}}>Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/servicios"
                                       style={{fontSize: '1.2rem', color: '#fff'}}>Servicios</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/blog" style={{ fontSize: '1.2rem', color: '#fff' }}>Blog</a>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link" href="/sobrenosotros"
                                       style={{fontSize: '1.2rem', color: '#fff'}}>SobreNosotros</a>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link  " href="/contacto"
                                       style={{fontSize: '1.2rem', color: '#fff'}}>Contacta</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

            <main>{children}</main>

            <footer style={{backgroundColor: '#FF7800', color: '#fff', padding: '2rem 0'}}>
                <div className="container d-flex align-items-center justify-content-between pb-3">
                    <div className="col-md-3 w-25">
                        <img className="navbar-logo w-50" src={logoImage2} alt="Logo PhoenixGroup"/>
                    </div>
                    <div className="col-md-6">
                        <h5>Contacto</h5>
                        <p>Dirección: Online</p>
                        <p>Email: info@phoenixgrp.es</p>
                        <p>Teléfono: 633 391 411</p>
                    </div>

                    {/* Enlaces a las páginas importantes */}
                    <div className="col-md-3">
                        <h5>Enlaces</h5>

                        <p><a href="/privacy-policy" className="text-white">Política de Privacidad</a></p>
                        <p><a href="/cookie-notice" className="text-white">Aviso de Cookies</a></p>
                        <p><a href="/terms-and-conditions" className="text-white">Términos y Condiciones</a></p>


                    </div>
                </div>
                <div className={"text-center"}>
                    <p>
                        Sitio web desarrollado por Phoenix Group © 2023. Todos los derechos reservados.
                    </p>
                </div>

            </footer>

        </>
    );
};

export default Layout;