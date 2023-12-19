import React from "react";
import {Button, Card} from 'react-bootstrap';
import Layout from "../layout/layout";
import portafoli1 from "../img/wowscreen.png"
import portafoli2 from "../img/phoenixwebscreen.png"
import portafoli3 from "../img/nonowebscreen2.png"
import portafoli4 from "../img/igriuriu.png"
// import LogoFruts from "../img/FruitsRobert.jpeg";
// import LogoMario from "../img/construcionesMario.jpeg"
// import LogoGastromar from "../img/gastromarIA.jpeg";
// import LogoIce from "../img/iceBeam.jpeg";
import WebServ from "../img/coches.jpeg"
import drone from "../img/drone.jpeg"
import congreso from "../img/corporative.jpeg"
import ig from "../img/igProf.jpeg"
import camara from "../img/camara.jpeg"
import posters from "../img/posters.jpeg"
import seo from "../img/SEO.jpeg"
import ads from "../img/ads.jpeg"
import back from "../img/back.jpeg"
// import hand from "../img/handshake.jpeg"
import hand2 from "../img/hand.jpeg"
// import home1 from '../img/Home1.jpg';
// import home2 from '../img/Home2.jpg';
// import home3 from '../img/home3.jpg';
import portada from '../img/fondoportada.jpeg';
// import Blog from "./blog";
import {Helmet} from "react-helmet";




const Home = () => {

    return (
        <Layout>
            <Helmet>
                <title>Phoenix Group Tarragona - Tu agencia de marketing digital y desarrollo web. </title>
                <link rel="canonical" href="https://phoenixgrp.es/"/>
                <meta name={"description"}
                      content={"Ofrecemos servicios de marketing digital, desarrollo web, diseño gráfico y gestión de eventos.¡Potencia tu presencia en línea con Phoenix Group! Ubicados en Tarragona y el delta de l'ebre."}/>
                <link rel="icon" href="https://phoenixgrp.es/phoenixlogo2.png"/>
            </Helmet>
    <div style={{margin:'0', paddingTop:'0', paddingBottom:'0'}}>


            <section className="py-5" style={{
                backgroundImage: `url(${portada})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                margin: '0', paddingTop:'0', paddingBottom:'0'
            }}>
                <div className="container">
                    <div className="text-center p-5 rounded" style={{backgroundColor: 'white', border: 'r'}}>
                        <h1 className="mb-4">Phoenix Group Agencia de Marketing Digital</h1>
                        <p>
                            Phoenix Group es una empresa dedicada a marketing digital, desarrollo web, diseño gráfico y
                            gestión de eventos. Nos enorgullece saber que somos una pequeña empresa con gran proyección
                            en les Terres de l'Ebre y en la provincia de Tarragona.
                        </p>
                        <p>
                            En Phoenix Group, nos esforzamos por ayudar a crecer a nuestros clientes. Ya sea que
                            necesites una estrategia de marketing, una página web, un e-commerce, un logo, o un impulso
                            para tu marca. Estamos aquí para ofrecerte soluciones adaptadas a tus necesidades.
                        </p>
                        <Button variant="outline-light" style={{backgroundColor: '#FF7800'}} href={"/sobrenosotros"}>Conoce
                            más
                        </Button>
                    </div>
                </div>
            </section>
            <section className={"pb-5"}  >
             <div className={"m-0 p-0"}>
                 <h2 className="p-5 text-white text-center" style={{backgroundColor:'#FF7800'}}>Nuestros Servicios</h2>
             </div>

                    <div className={"container"}>
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        backgroundColor: 'white',

                    }}>
                        <div style={{flex: 1}}>
                            <h3 className={"text-black text-center"}>Diseño de páginas web y ecommerce</h3>
                            <p className={"text-black text-center"}>
                                Transformamos ideas en experiencias digitales impactantes. Ya sea una página web
                                atractiva o una tienda en línea, nuestro diseño web personalizado se adapta a tus
                                necesidades, brindando una presencia en línea que destaca.
                            </p>
                            <div className={"text-center"}><Button variant="outline-light" style={{backgroundColor: '#FF7800', color: 'white'}}
                                    href={"/servicios/"}>
                                Saber más
                            </Button></div>
                        </div>
                        <div style={{flex: 1}}>
                            <img style={{width: "100%", height: "100%"}} src={WebServ} alt=""/>
                        </div>
                    </div>


                    <div style={{display: "flex",
                        alignItems: "center",
                        backgroundColor: 'white',
                        }}>
                        <div style={{flex: 1}}>
                            <img style={{width: "100%", height: "100%"}} src={ig} alt=""/>
                        </div>
                        <div style={{flex: 1, padding: "0 15px"}}>
                            <h3 className={"text-black text-center"}>Gestión de redes sociales</h3>
                            <p className={"text-black text-center"}>Impulsa tu presencia en línea con nuestro servicio de gestión de
                                redes sociales. Desde estrategias de contenido hasta la interacción con la audiencia, te
                                ayudamos a construir y fortalecer tu comunidad digital.</p>
                            <div className={"text-center"}><Button variant="outline-light" style={{backgroundColor: '#FF7800', color: 'white'}}
                                    href={"/servicios/"}>
                                Saber más
                            </Button></div>
                        </div>

                    </div>

                    <div style={{display: "flex",
                        alignItems: "center",
                        backgroundColor: 'white',
                      }}>

                        <div style={{flex: 1, padding: "0 15px"}}>
                            <h3 className={"text-black text-center"}>Creación de contenido</h3>
                            <p className={"text-black text-center"}>Dale vida a tu marca con contenido creativo y cautivador. Desde
                                imágenes y videos hasta blogs y materiales gráficos, creamos contenido que resuena con
                                tu audiencia, destacando la singularidad de tu empresa.</p>
                            <div className={"text-center"}><Button variant="outline-light" style={{backgroundColor: '#FF7800', color: 'white'}}
                                    href={"/servicios/"}>
                                Saber más
                            </Button></div>
                        </div>
                        <div style={{flex: 1}}>
                            <img style={{width: "100%", height: "100%"}} src={camara} alt=""/>
                        </div>

                    </div>

                        <div style={{display: "flex",
                            alignItems: "center",
                            backgroundColor: 'white',
                        }}>
                            <div style={{flex: 1}}>
                                <img style={{width: "100%", height: "100%"}} src={seo} alt=""/>
                            </div>
                            <div style={{flex: 1, padding: "0 15px"}}>
                                <h3 className={"text-black text-center"}>Optimización para Motores de Búsqueda (SEO)</h3>
                                <p className={"text-black text-center"}>
                                    Mejora la visibilidad de tu sitio web en los motores de búsqueda. Implementamos estrategias de SEO
                                    para aumentar el tráfico orgánico y mejorar el ranking de tu sitio.
                                </p>
                                <div className={"text-center"}><Button variant="outline-light" style={{backgroundColor: '#FF7800', color: 'white'}}
                                                                       href={"/servicios/"}>
                                    Saber más
                                </Button></div>
                            </div>

                        </div>

                        <div style={{display: "flex",
                            alignItems: "center",
                            backgroundColor: 'white',
                        }}>

                            <div style={{flex: 1, padding: "0 15px"}}>
                                <h3 className={"text-black text-center"}>Publicidad en Línea (ADS)</h3>
                                <p className={"text-black text-center"}>
                                    Potencia tu presencia en línea mediante estrategias de publicidad digital. Gestionamos campañas de
                                    publicidad en línea para llegar a tu audiencia objetivo.
                                </p>
                                <div className={"text-center"}><Button variant="outline-light" style={{backgroundColor: '#FF7800', color: 'white'}}
                                                                       href={"/servicios/"}>
                                    Saber más
                                </Button></div>
                            </div>
                            <div style={{flex: 1}}>
                                <img style={{width: "100%", height: "100%"}} src={ads} alt=""/>
                            </div>

                        </div>

                    <div style={{display: "flex",
                        alignItems: "center",
                        backgroundColor: 'white',
                       }}>
                        <div style={{flex: 1}}>
                            <img style={{width: "100%", height: "100%"}} src={posters} alt="Campañas de marketing"/>
                        </div>
                        <div style={{flex: 1, padding: "0 15px"}}>
                            <h3 className={"text-black text-center"}>Campañas de marketing</h3>
                            <p className={"text-black text-center"}>
                                Potencia tu visibilidad y conecta con tu audiencia a través de estrategias de marketing
                                efectivas.
                                Nuestras campañas están diseñadas para generar impacto, aumentar la conciencia de la
                                marca y convertir prospectos en clientes leales.
                            </p>
                            <div className={"text-center"}><Button variant="outline-light" style={{backgroundColor: '#FF7800', color: 'white'}}
                                    href={"/servicios/"}>
                                Saber más
                            </Button></div>
                        </div>
                    </div>

                    <div style={{display: "flex",
                        alignItems: "center",
                        backgroundColor: 'white',
                      }}>
                        <div style={{flex: 1, padding: "0 15px"}}>
                            <h3 className={"text-black text-center"}>Vídeos con drone para redes</h3>
                            <p className={"text-black text-center"}>
                                Añade una perspectiva única a tu contenido visual con nuestros vídeos grabados con
                                drone.
                                Capturamos imágenes impresionantes desde el cielo, proporcionando una visión única que
                                eleva la narrativa de tu marca en las redes sociales.
                            </p>
                            <div className={"text-center"}><Button variant="outline-light" style={{backgroundColor: '#FF7800', color: 'white'}}
                                    href={"/servicios/"}>
                                Saber más
                            </Button></div>
                        </div>
                        <div style={{flex: 1}}>
                            <img style={{width: "100%", height: "100%"}} src={drone} alt="Vídeos con drone para redes"/>
                        </div>
                    </div>

                    <div style={{display: "flex",
                        alignItems: "center",
                        backgroundColor: 'white',
                      }}>
                        <div style={{flex: 1}}>
                            <img style={{width: "100%", height: "100%"}} src={congreso} alt="Organización de eventos"/>
                        </div>
                        <div style={{flex: 1, padding: "0 15px"}}>
                            <h3 className={"text-black text-center"}>Organización de eventos</h3>
                            <p className={"text-black text-center"}>
                                Haz que tus eventos sean memorables con nuestro servicio de organización.
                                Desde la planificación hasta la ejecución, cuidamos cada detalle para crear experiencias
                                únicas que reflejen la esencia de tu marca.
                            </p>
                            <div className={"text-center"}><Button variant="outline-light" style={{backgroundColor: '#FF7800', color: 'white'}}
                                    href={"/servicios/"}>
                                Saber más
                            </Button></div>
                        </div>
                    </div>

                </div>
            </section>



            {/* Sección 1: Trabajos Realizados */}
        <section style={{
            backgroundImage: `url(${back})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            minHeight: 'auto',
        }}>
            <h2 className="p-5 text-white text-center" style={{ backgroundColor: '#FF7800FF' }}>Algunos de nuestros trabajos</h2>
            <div className={"container"}>
                <div className="row pt-5 pb-5">
                    {/* Trabajo 1 */}
                    <div className="col-md-6 mb-4">
                        <Card className="h-100">
                            <Card.Img variant="top" src={portafoli1} alt="Trabajo 1" />
                            <Card.Body>
                                <Card.Title className="text-center">Contenido para Instagram (Fiesta WOW)</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                    {/* Trabajo 2 */}
                    <div className="col-md-6 mb-4">
                        <Card className="h-100">
                            <Card.Img variant="top" src={portafoli2} alt="Trabajo 2" />
                            <Card.Body>
                                <Card.Title className="text-center">Página web estática (Proyecto propio)</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                    {/* Trabajo 3 */}
                    <div className="col-md-12 mb-4">
                        <div style={{ width: '100%', overflow: 'hidden', height: '500px' }}>
                            <Card className="h-100">
                                <iframe
                                    src="https://www.youtube.com/tYxmX1Nam1c?si=rVjkVrwd406B0HzBHHHH"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                    style={{ width: '100%', height: '100%', border: 'none' }}
                                ></iframe>
                                <Card.Body>
                                    <Card.Title className="text-center">Grabacion con drone(Fiesta Wow)</Card.Title>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                    {/* Trabajo 4 */}
                    <div className="col-md-6 mb-4">
                        <Card className="h-100">
                            <Card.Img variant="top" src={portafoli4} alt="Trabajo 4" />
                            <Card.Body>
                                <Card.Title className="text-center">Gestión de Redes (Instagram Riu Riu)</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                    {/* Trabajo 5 */}
                    <div className="col-md-6 mb-4">
                        <Card className="h-100">
                            <Card.Img variant="top" src={portafoli3} alt="Trabajo 5" />
                            <Card.Body>
                                <Card.Title className="text-center">E-commerce(Proyecto Propio)</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div>
                <h2 className="p-5 text-white text-center" style={{backgroundColor:'#FF7800'}}>Descubre por qué somos la elección ideal</h2>

                <div className="container text-center">
                <div className="row justify-content-center align-items-center">
                    <div className="p-4 col-md-6">
                        <p className="lead">
                            En Phoenix Group, nos enorgullece ofrecer soluciones integrales en marketing digital, desarrollo web,
                            diseño gráfico y gestión de eventos. Aquí te damos algunas razones para elegirnos:
                        </p>
                        <ul className="text-center justify-content-lg-evenly">
                            <li style={{color:"#FF7800"}} className={" list-unstyled"}><strong>Experiencia y profesionalismo.</strong>  </li>
                            <li style={{color:"#FF7800"}} className={"list-unstyled"}><strong>Enfoque personalizado para cada cliente.</strong></li>
                            <li style={{color:"#FF7800"}} className={"list-unstyled"}><strong>Resultados medibles y transparentes.</strong></li>
                            <li style={{color:"#FF7800"}} className={"list-unstyled"}><strong>Equipo creativo y apasionado.</strong></li>
                        </ul>
                        <p className={"lead"}>
                            Estamos comprometidos a llevar tu empresa al siguiente nivel y a construir una presencia en línea
                            que destaque en el mercado.
                        </p>
                        <Button variant={"outline-light"} style={{backgroundColor: '#FF7800'}} className="mt-4"><a
                                                href="/contacto" style={{color: "white"}}>Contacta ahora</a></Button>

                    </div>
                    <div className=" pb-4 col-md-6">
                        <img src={hand2} alt="Razones para elegirnos" className="img-fluid" />
                    </div>
                </div>
            </div>
            </div>
        </section>


    </div>

        </Layout>
    );
};

export default Home;