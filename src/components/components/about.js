import Layout from "../layout/layout";
import React from "react";
import Team from "../img/teamAbout.jpeg";
import {Helmet} from "react-helmet"; // Reemplaza con la ruta correcta de la imagen

const About = () => {

    return (
        <Layout>
            <Helmet>
                <title>Phoenix Group Tarragona - Informacion sobre nuestra agencia de Marketing Digital. </title>
                <link rel="canonical" href="https://phoenixgrp.es/sobrenosotros"/>
                <meta name={"description"} content={"En Phoenix Group, no solo creamos soluciones; forjamos conexiones significativas. Nuestra historia es una amalgama de creatividad, innovación y dedicación. Como una empresa joven con sede en la hermosa provincia de Tarragona, estamos decididos a dejar una huella duradera en el mundo del marketing, diseño gráfico y desarrollo web."}/>
            </Helmet>

            <div className="container pt-4">
                <section className="text-justify" style={{ marginBottom: '10%' }}>
                    <h1 className="text-center mb-4">Conoce más sobre nosotros</h1>
                    <p>
                        En Phoenix Group, no solo creamos soluciones; forjamos conexiones significativas.
                        Nuestra historia es una amalgama de creatividad, innovación y dedicación. Como una empresa joven
                        con sede en la hermosa provincia de Tarragona, estamos decididos a dejar una huella duradera en
                        el mundo del marketing, diseño gráfico y desarrollo web.
                    </p>
                    <p>
                        Nos enorgullece ser un equipo apasionado de profesionales jóvenes, impulsados por la
                        excelencia y el deseo de superar las expectativas. Cada miembro de nuestro equipo aporta una
                        perspectiva única y habilidades especializadas, creando un ambiente colaborativo que inspira la
                        innovación.
                    </p>
                    <img src={Team} alt="Equipo de Phoenix Group" className="img-fluid rounded mb-4 w-50" />

                    <div>
                        <h2>Nuestra Filosofía</h2>
                        <p>
                            En Phoenix, creemos en la poderosa combinación de la creatividad y la tecnología. Esta
                            filosofía impulsa cada proyecto que emprendemos. Nos esforzamos por ofrecer soluciones
                            inteligentes y visualmente impactantes que no solo cumplen con los objetivos comerciales,
                            sino que también elevan la experiencia del usuario.
                        </p>
                    </div>
                    <div>
                        <h2>Nuestra Visión</h2>
                        <p>
                            Buscamos ser líderes en la industria, marcando la pauta en términos de innovación
                            y calidad. Nuestra visión es transformar la manera en que las empresas abordan el marketing y el
                            desarrollo web, brindando resultados tangibles y construyendo relaciones sólidas con
                            nuestros clientes.
                        </p>
                    </div>
                    <div>
                        <h2>Compromiso con la Excelencia</h2>
                        <p>
                            En cada proyecto, nos comprometemos con la excelencia en cada detalle. Desde el diseño
                            gráfico hasta el desarrollo web y la gestión de eventos, perseguimos la perfección con
                            pasión y dedicación. Creemos que el éxito no es solo un destino, sino un viaje continuo
                            hacia la mejora constante.
                        </p>
                    </div>
                    <p>
                        En Phoenix Group, no solo somos un proveedor de servicios; somos un socio estratégico
                        en tu viaje hacia el éxito. Únete a nosotros mientras creamos, innovamos y conectamos ideas
                        con resultados extraordinarios.
                    </p>
                </section>
            </div>
        </Layout>
    );
};

export default About;