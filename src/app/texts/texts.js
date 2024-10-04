const title = "Cositas Lindas";
const slogan = "Accesorios que cuentan tu historia.";
const email = "zandram786@gmail.com";
const mensajeWhatsApp = encodeURIComponent(
    `¡Hola! Estoy interesado en los accesorios de ${title} y me gustaría obtener más información. ¡Gracias!`
);
const numeroWhatsApp = "3916908339";

const textos = {
    index: {
        title: `${title}`,
    },
    homeContent: {
        title: `${title}`,
    },
    about: {
        description1: "Cositas Lindas es tu destino ideal para encontrar accesorios únicos que añaden un toque especial a cada ocasión. Desde elegantes manillas y anillos hasta encantadoras cadenas y aretes, nuestra colección está diseñada para satisfacer todos tus deseos de estilo. Nos enorgullecemos de ofrecer piezas que no solo embellecen, sino que también son un excelente detalle para regalar a alguien especial o para consentirte a ti misma. En Cositas Lindas, creemos que cada accesorio cuenta una historia y estamos aquí para ayudarte a contar la tuya con cada joya que elijas."
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email,
    },
    footer: {
        slogan: {
            p1: "",
            p2: slogan,
        },
        address: "",
        phone: numeroWhatsApp,
        email: email,
        facebook: "https://www.facebook.com/",
        instagram: "https://www.instagram.com/",
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
    },
};

export default textos;
