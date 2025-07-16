const proyects = [
    {
        id: "ux-001",
        image: "",
        title: "Saborea",
        description: "Gastronomía y alimentación saludable. App enfocada en facilitar la cocina diaria con recetas organizadas según preferencias.",
        category: "ux-ui",
    },
    {
        id: "ux-002",
        image: "",
        title: "Aparka",
        description: "La app que ofrece una solución digital para ayudar a los usuarios a encontrar, reservar y pagar estacionamiento de manera rápida y eficiente.",
        category: "ux-ui",
    },
    {
        id: "ux-003",
        image: "",
        title: "El tomillo",
        description: "Rediseño responsivo para el programa “Proyecto Real” de Coderhouse. Enfocado en mejorar la usabilidad y generar mayor interacción con el usuario.",
        category: "ux-ui",
    },
]

const getProyects = () => {
    return new Promise ( ()=>{
        setTimeout(()=>{
            resolveConfig(proyects)
        }, 2000)
    })
}

export { getProyects}