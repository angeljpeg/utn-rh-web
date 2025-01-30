export const BenefitsItems = [
{
    title: "Lentes",
    URL: "/lentes",
},
{
    title: "Útiles",
    URL: "/utiles",
},
{
    title: "Guardería",
    URL: "/guarderia",
},
{
    title: "Canastilla",
    URL: "/canastilla",
},
{
    title: "Día Sindical y Día Económico",
    URL: "/diaSindical",
},
{
    title: "Apoyo Prodep",
    URL: "/apoyoProdep",
},
{
    title: "Residencias",
    URL: "/residencias",
},
{
    title: "Ayuda Estudios",
    URL: "/ayudaEstudios",
},
{
    title: "Aparatos Ortopédicos",
    URL: "/aparatosOrtopedicos",
},
{
    title: "Lactancia",
    URL: "/lactancia",
},
].map((item) => ({
...item,
URL: `/benefits${item.URL}`,
}));
