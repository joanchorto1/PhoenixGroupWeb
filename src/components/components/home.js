import React from "react";
import {Button, Card} from 'react-bootstrap';
import Layout from "../layout/layout";
import portafoli1 from "../img/wowscreen.png"
import portafoli2 from "../img/phoenixwebscreen.png"
import portafoli3 from "../img/nonowebscreen.png"
import LogoFruts from "../img/FruitsRobert.jpeg";
import LogoMario from "../img/construcionesMario.jpeg"
import LogoGastromar from "../img/gastromarIA.jpeg";
import LogoIce from "../img/iceBeam.jpeg";
// import home1 from '../img/Home1.jpg';
// import home2 from '../img/Home2.jpg';
// import home3 from '../img/home3.jpg';
import portada from '../img/fondoportada.jpeg';
// import Blog from "./blog";
import {Helmet} from "react-helmet";

const growthData = [
    {month: 'Mes 1', leads: 50},
    {month: 'Mes 2', leads: 70},
    {month: 'Mes 3', leads: 90},
    {month: 'Mes 4', leads: 115},
    {month: 'Mes 5', leads: 150},
    {month: 'Mes 6', leads: 200},
];

const Home = () => {


    const calculatePath = () => {
        const maxY = Math.max(...growthData.map((data) => data.leads));
        const pathData = growthData.map((data, index) => {
            const x = (index / (growthData.length - 1)) * 100;
            const y = ((maxY - data.leads) / maxY) * 100;
            return `${x},${y}`;
        });
        return `M${pathData.join(' L')}`;
    };

    return (
        <Layout>
            <Helmet>
                <title>Phoenix Group Tarragona - Tu agencia de marketing digital y desarrollo web. </title>
                <link rel="canonical" href="https://phoenixgrp.es/"/>
                <meta name={"description"}
                      content={"Ofrecemos servicios de marketing digital, desarrollo web, diseño gráfico y gestión de eventos.¡Potencia tu presencia en línea con Phoenix Group! Ubicados en Tarragona y el delta de l'ebre."}/>
                <link rel="icon" href="https://phoenixgrp.es/phoenixlogo2.png"/>
            </Helmet>

            <section className="py-5" style={{
                backgroundImage: `url(${portada})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center'
            }}>
                <div className="container">
                    <div className="text-center p-5 rounded" style={{backgroundColor: 'white', border: 'r'}}>
                        <h1 className="mb-4">Phoenix Group Agencia de Marketing Digital</h1>
                        <p>
                            Phoenix Group es una empresa dedicada a marketing digital, desarrollo web, diseño gráfico y
                            gestión de eventos. Nos enorgullece saber que somos una pequeña empresa con gran proyección
                            en el delta de l'ebre y en la provincia de Tarragona.
                        </p>
                        <p>
                            En Phoenix Group, nos esforzamos por ayudar a crecer a nuestros clientes. Ya sea que
                            necesites una estrategia de marketing, una página web, un e-commerce, un logo, o un impulso
                            para tu marca. Estamos aquí para ofrecerte soluciones adaptadas a tus necesidades.
                        </p>
                        <Button variant="outline-light" style={{backgroundColor: '#FF7800'}} href={"/sobrenosotros"}>Conoce
                            más</Button>
                    </div>
                  </div>
            </section>

            <section className="mb-5 text-center  pt-5 ">
                <h2 className="mb-4">¿Listo para Potenciar tu Negocio?</h2>
                <p>
                    Descubre cómo Phoenix Group puede llevar tu empresa al siguiente nivel. Ofrecemos soluciones
                    personalizadas alineadas con tus objetivos comerciales.
                </p>
                <div style={{width: '100%', alignItems: 'center'}} className={'mb-4'}>
                    <Button style={{backgroundColor: '#FF7800'}} className="mt-4"><a href="/contacto"
                                                                                     style={{color: "white"}}>Contacta
                        ahora</a></Button>
                </div>
            </section>
            <section className="py-5" style={{backgroundColor: '#FF7800'}}>
                <div className="container">
                    <h2 className="mb-4 text-white text-center">Nuestros Servicios</h2>

                    {/* Marketing Digital */}
                    <div className="card shadow mb-5 bg-light rounded p-4">
                        <h3 className="mt-3 text-center mb-4">Gestión de redes sociales</h3>
                        <div className="d-flex align-items-center justify-content-center">
                            <div className="text-center">
                                <p>
                                    Impulsa tu presencia en línea con nuestro servicio de gestión de redes sociales. Desde estrategias de contenido hasta la interacción con la audiencia, te ayudamos a construir y fortalecer tu comunidad digital.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Desarrollo Web */}
                    <div className="card shadow mb-5 bg-light rounded p-4 custom-service">
                        <h3 className="mt-3 text-center mb-4">Diseño de paginas web y ecommerce</h3>
                        <div className="d-flex align-items-center justify-content-center">
                            <div className="text-center">
                                <p>
                                    Transformamos ideas en experiencias digitales impactantes. Ya sea una página web atractiva o una tienda en línea, nuestro diseño web personalizado se adapta a tus necesidades, brindando una presencia en línea que destaca.
                                </p>

                            </div>

                        </div>
                    </div>

                    {/* Diseño Gráfico */}
                    <div className="card shadow mb-5 bg-light rounded p-4">
                        <h3 className="mt-3 text-center mb-4">Creación de contenido</h3>
                        <div className="d-flex align-items-center justify-content-center">
                            <div className="text-center">
                                <p>
                                    Dale vida a tu marca con contenido creativo y cautivador. Desde imágenes y videos hasta blogs y materiales gráficos, creamos contenido que resuena con tu audiencia, destacando la singularidad de tu empresa.
                                </p>

                            </div>
                        </div>
                    </div>

                    {/* Gestión de Eventos */}
                    <div className="card shadow mb-5 bg-light rounded p-4">
                        <h3 className="mt-3 text-center mb-4">Campañas de marketing</h3>
                        <div className="d-flex align-items-center justify-content-center">
                            <div className="text-center">
                                <p>
                                    Potencia tu visibilidad y conecta con tu audiencia a través de estrategias de marketing efectivas. Nuestras campañas están diseñadas para generar impacto, aumentar la conciencia de la marca y convertir prospectos en clientes leales.
                                </p>

                            </div>
                        </div>
                    </div>

                    <div className="card shadow mb-5 bg-light rounded p-4">
                        <h3 className="mt-3 text-center mb-4">Organización de eventos</h3>
                        <div className="d-flex align-items-center justify-content-center">
                            <div className="text-center">
                                <p>
                                    Haz que tus eventos sean memorables con nuestro servicio de organización. Desde la planificación hasta la ejecución, cuidamos cada detalle para crear experiencias únicas que reflejen la esencia de tu marca.
                                </p>

                            </div>
                        </div>
                    </div>
                    <div className="card shadow mb-5 bg-light rounded p-4">
                        <h3 className="mt-3 text-center mb-4">Vídeos con drone para redes</h3>
                        <div className="d-flex align-items-center justify-content-center">
                            <div className="text-center">
                                <p>
                                    Añade una perspectiva única a tu contenido visual con nuestros vídeos grabados con drone. Capturamos imágenes impresionantes desde el cielo, proporcionando una visión única que eleva la narrativa de tu marca en las redes sociales.
                                </p>

                            </div>
                        </div>
                    </div>
                    {/* Botón Descubre más */}
                    <div className="text-center">
                        <Button style={{backgroundColor: 'white'}} className="mt-4"><a href="/servicios"
                                                                                       style={{color: "#FF7800"}}>Descubre
                            más</a></Button>
                    </div>
                </div>
            </section>
            {/* Sección 1: Trabajos Realizados */}
            <section className="py-5">
                <div className="container">
                    <h2 className="pb-4 mb-4 text-dark text-center">Algunos de nuestros trabajos</h2>
                    <div className="row">
                        {/* Trabajo 1 */}
                        <div className="col-md-4 mb-4">
                            <Card className="h-100">
                                <Card.Img variant="top" src={portafoli1} alt="Trabajo 1" />
                                <Card.Body>
                                    <Card.Title className="text-center">Contenido para Instagram (Fiesta WOW)</Card.Title>
                                </Card.Body>
                            </Card>
                        </div>
                        {/* Trabajo 2 */}
                        <div className="col-md-4 mb-4">
                            <Card className="h-100">
                                <Card.Img variant="top" src={portafoli2} alt="Trabajo 2" />
                                <Card.Body>
                                    <Card.Title className="text-center">Página web estática (Proyecto propio)</Card.Title>
                                </Card.Body>
                            </Card>
                        </div>
                        {/* Trabajo 3 */}
                        <div className="col-md-4 mb-4">
                            <Card className="h-100">
                                <Card.Img variant="top" src={portafoli3} alt="Trabajo 3" />
                                <Card.Body>
                                    <Card.Title className="text-center">E-commerce con Prestashop (Nono Amposta)</Card.Title>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>


            <section className="mb-5 text-center">
                <div className={"container"}>


                    <h2 className="mb-4 mt-3">Crecimiento de Clientes</h2>
                    <div className="row">
                        <div className="col-md-12">
                            <svg viewBox="0 0 100 100" width="100%" height="200">
                                <path d={calculatePath()} fill="none" stroke="#FF7800" strokeWidth="2"/>
                            </svg>
                        </div>
                    </div>
                    <div className="row mt-3">
                        {growthData.map((data) => (
                            <div key={data.month} className="col-md-2">
                                <p className="mb-0">{data.month}</p>
                                <p className="font-weight-bold">{data.leads} Leads</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-3">
                        <Button style={{backgroundColor: '#FF7800'}} href="/contacto" className="btn btn-primary">
                            Contacta
                        </Button>
                    </div>
                </div>
            </section>

            {/* Sección 2: Logos de Clientes */}
            <section className="py-5" style={{backgroundColor: '#f8f9fa'}}>
                <div className="container">
                    <h2 className="mb-4 text-dark text-center">Nuestros Clientes</h2>
                    <div className="row">
                        {/* Logo Cliente 1 */}
                        <div className="col-md-3 text-center">
                            <img src={LogoMario} alt="Logo Cliente 1" className="img-fluid mb-3" />
                        </div>
                        {/* Logo Cliente 2 */}
                        <div className="col-md-3 text-center">
                            <img src={LogoGastromar} alt="Logo Cliente 2" className="img-fluid mb-3" />
                        </div>
                        {/* Logo Cliente 3 */}
                        <div className="col-md-3 text-center">
                            <img src={LogoFruts} alt="Logo Cliente 3" className="img-fluid mb-3" />
                        </div>
                        {/* Logo Cliente 4 */}
                        <div className="col-md-3 text-center">
                            <img src={LogoIce} alt="Logo Cliente 4" className="img-fluid mb-3" />
                        </div>
                    </div>
                </div>
            </section>


        </Layout>
    );
};

export default Home;