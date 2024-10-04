const title = "Felipe Caffe Expréss";
const slogan = "El mejor caffe con la mejor calidad";
const email = "yoneber1@hotmail.com";
const mensajeWhatsApp = encodeURIComponent(
    `¡Hola! Estoy interesado en las bebidas y comestibles de ${title}, y me gustaría obtener más información. ¡Gracias!`
);
const numeroWhatsApp = "3125976348";

const textos = {
    index: {
        title: `${title}`,
        slogan: `${slogan}`,
    },
    homeContent: {
        title: `${title}`,
    },
    about: {
        description1: "En Felipe Caffe Expréss nos especializamos en ofrecer bebidas calientes como café, café con leche, aromática, leche, avena, chocolisto, chocolate, maizena y deliciosos comestibles como arepas, almojábanas y tortas de diferentes sabores. Cada producto está preparado con amor y dedicación, buscando brindar una experiencia de felicidad en cada bocado. Ofrecemos entregas puerta a puerta para mayor comodidad, y también contratos con empresas, cooperativas y colegios, con crédito abierto de hasta 2 meses. Nos enfocamos en proporcionar un servicio de calidad que garantice la satisfacción del cliente y lo haga querer volver."
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
        address: email,
        phone: numeroWhatsApp,
        email: email,
        facebook: "https://www.facebook.com/profile.php?id=61565305692997&mibextid=ZbWKwL",
        instagram: "https://www.instagram.com/",
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
    },
};

export default textos;
