const projects = [
    {
        id: "ux-001",
        image: "/img/saborea.png",
        title: "Saborea",
        description: "Gastronomía y alimentación saludable. App enfocada en facilitar la cocina diaria con recetas organizadas según preferencias.",
        category: "ux-ui",
    },
    {
        id: "ux-002",
        image: "/img/aparka.png",
        title: "Aparka",
        description: "La app que ofrece una solución digital para ayudar a los usuarios a encontrar, reservar y pagar estacionamiento de manera rápida y eficiente.",
        category: "ux-ui",
    },
    {
        id: "ux-003",
        image: "/img/eltomillo.png",
        title: "El tomillo",
        description: "Rediseño responsivo para el programa “Proyecto Real” de Coderhouse. Enfocado en mejorar la usabilidad y generar mayor interacción con el usuario.",
        category: "ux-ui",
    },
]

const getProjects = () => {
    return new Promise ( (resolve)=>{
        setTimeout(()=>{
            resolve(projects)
        }, 2000)
    })
}

export { getProjects}