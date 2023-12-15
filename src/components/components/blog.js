// Archivo: blog.js
import React from "react";
import { Link } from "react-router-dom";

import Layout from "../layout/layout";
import tarragona from "../img/blog.png.webp";

const articlesByTopic = {
    Marketing: [
        {
            title: "Cómo una Estrategia Integral de Marketing Digital Puede Impulsar tu Negocio en Tarragona",
            description: "Explora la importancia de una estrategia de marketing digital completa, desde SEO local hasta campañas en redes sociales, y cómo puede beneficiar a las empresas en Tarragona.",
            link: "/blog/marketing1"
        },
        {
            title: "Secretos del Éxito en el Marketing Online: Estrategias Digitales para Sobresalir en el Delta de l'Ebre",
            description: "Analiza estrategias efectivas de marketing online específicas para el Delta de l'Ebre, aprovechando las oportunidades digitales en esta región única.",
            link: "/blog/marketing2"
        },
        // Agrega más artículos de marketing según sea necesario
    ],
    DesarrolloWeb: [
        {
            title: "El Papel Fundamental del Diseño Web en el Éxito Empresarial en Tarragona",
            description: "Examina cómo un diseño web efectivo contribuye al éxito empresarial en Tarragona, desde la usabilidad hasta la optimización para motores de búsqueda.",
            link: "/blog/desarrollo1"
        },
        {
            title: "Desarrollo Web en el Delta de l'Ebre: Tendencias que Debes Conocer",
            description: "Explora las últimas tendencias en desarrollo web y cómo aplicarlas estratégicamente en el contexto del Delta de l'Ebre.",
            link: "/blog/desarrollo2"
        },
        // Agrega más artículos de desarrollo web según sea necesario
    ],
    DisenoGrafico: [
        {
            title: "El Impacto del Diseño de Logotipos en la Identidad de Marca: Construyendo una Imagen Duradera",
            description: "Examina cómo el diseño gráfico impacta las estrategias de marketing digital y cómo puedes destacar en el mercado de Tarragona.",
            link: "/blog/diseno1"
        },
        {
            title: "El Papel del Diseño Gráfico en las Redes Sociales: Potenciando tu Presencia Digital",
            description: "Descubre cómo el diseño gráfico innovador puede diferenciar a las empresas en el entorno empresarial del Delta de l'Ebre.",
            link: "/blog/diseno2"
        },
        // Agrega más artículos de diseño gráfico según sea necesario
    ],
    Eventos: [
        {
            title: "Claves para una Organización Exitosa de Eventos Corporativos: Estrategias para el Éxito",
            description: "Organizar eventos corporativos exitosos es fundamental para fortalecer la presencia de tu empresa, fomentar relaciones comerciales y crear experiencias memorables. Descubre las estrategias y prácticas esenciales que te ayudarán a planificar y ejecutar eventos corporativos de manera efectiva, desde la fase de planificación hasta el día del evento.",
            link: "/blog/eventos1"
        },
        {
            title: "Tendencias Actuales en Organización de Eventos Empresariales: Innovación y Sostenibilidad",
            description: "Mantente actualizado con las últimas tendencias en la industria de eventos corporativos. Desde tecnología innovadora hasta enfoques sostenibles, exploraremos cómo las tendencias están dando forma al mundo de la organización de eventos empresariales. Descubre cómo estas tendencias están transformando la manera en que se planifican y ejecutan los eventos empresariales para crear experiencias inolvidables.",
            link: "/blog/eventos2"
        },
        // Agrega más artículos de eventos según sea necesario
    ],
};

const Blog = () => {
    return (
        <Layout>
            <div className="container mt-5">
                <div className={"text-center"}>
                    <img className={"pb-5"} src={tarragona} alt="" style={{ maxWidth: '100%', height: 'auto' }} />

                </div>

                <h1 className="text-center pb-3">Blog de Phoenix Group</h1>

                {/* Renderizar sección para cada tema */}
                {Object.keys(articlesByTopic).map((topic, index) => (
                    <section key={index} className="mb-4">
                        <h3 className="text-center">{topic}</h3>
                        {articlesByTopic[topic].map((article, articleIndex) => (
                            <div key={articleIndex} className="card mb-4">
                                <div className="card-body">
                                    <h4 className="card-title">{article.title}</h4>
                                    <p className="card-text">{article.description}</p>
                                    <Link style={{ backgroundColor: '#FF7800FF', color: 'white' }} to={article.link} className="btn">
                                        Leer más
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </section>
                ))}
            </div>
        </Layout>
    );
};

export default Blog;