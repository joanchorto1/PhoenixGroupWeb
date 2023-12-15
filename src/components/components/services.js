import React  from "react";
import { Link } from "react-router-dom";
import Layout from "../layout/layout";
import {Helmet} from "react-helmet"; // Reemplaza con la ruta correcta de la imagen

const Services = () => {


    const servicesData = [
        {
            id: 1,
            title: 'Gestión de Redes Sociales',
            description: 'Ofrecemos servicios integrales de gestión de redes sociales para mejorar la visibilidad y participación de tu negocio en plataformas como Facebook, Instagram y Twitter. Desde la creación de contenido hasta la interacción con la audiencia, nos encargamos de todo.',
        },
        {
            id: 2,
            title: 'Diseño de Páginas Web y E-commerce',
            description: 'Creamos experiencias únicas con nuestro servicio de diseño de páginas web y tiendas online. Desde sitios web estáticos hasta complejas plataformas de comercio electrónico, nos aseguramos de que tu presencia en línea sea atractiva y funcional.',
        },
        {
            id: 3,
            title: 'Creación de Contenido',
            description: 'Transformamos ideas en contenido atractivo y relevante. Ya sea para redes sociales, blogs o cualquier otra plataforma, nuestro servicio de creación de contenido garantiza que tu mensaje llegue de manera efectiva a tu audiencia.',
        },
        {
            id: 4,
            title: 'Campañas de Marketing',
            description: 'Desarrollamos estrategias de marketing personalizadas para promocionar tu marca y productos. Desde campañas publicitarias en línea hasta estrategias tradicionales, nos aseguramos de maximizar tu alcance y ROI.',
        },
        {
            id: 5,
            title: 'Organización de Eventos',
            description: 'Desde la planificación hasta la ejecución, nos encargamos de todos los detalles para crear eventos memorables. Ya sea una conferencia, feria comercial o lanzamiento de producto, nuestra experiencia garantiza el éxito de tu evento.',
        },
        {
            id: 6,
            title: 'Videos con Drone para Redes',
            description: 'Añade un toque único a tu presencia en redes sociales con nuestros servicios de grabación y edición de videos con drones. Capturamos imágenes impresionantes desde el cielo para resaltar tu negocio y productos.',
        },
    ];

    return (
        <Layout>
            <Helmet>
                <title>Phoenix Group - Nuestros Servicios en Tarragona y Delta de l'Ebre. </title>
                <link rel="canonical" href="https://phoenixgrp.es/servicios"/>
                <meta name={"description"} content={"Ofrecemos servicios de marketing digital, desarrollo web, diseño gráfico y gestión de eventos en Tarragona y el delta de l'ebre."}/>
            </Helmet>
            <div className="container mt-5" >
                <section style={{ marginBottom: "10%" }}>
                    <h1 className={"text-center pb-5"}>Nuestros Servicios</h1>
                    <div className="row">
                        {servicesData.map((service, index) => (
                            <div key={index} className="col-md-6 mb-4">
                                <div
                                    style={{
                                        backgroundColor: "#f8f9fa",
                                        height: "100%", // Establece una altura fija
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "space-between",
                                    }}
                                    className="shadow p-3 mb-5 rounded"
                                >
                                    <div>
                                        <h2 className="mt-3">{service.title}</h2>
                                        <p>{service.description}</p>
                                    </div>
                                    <div className="text-center pt-4">
                                        <Link
                                            to="/contacto"
                                            className="btn"
                                            style={{ backgroundColor: "#FF7800FF", color: "#fff" }}
                                        >
                                            Contacta con Nosotros
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default Services;
