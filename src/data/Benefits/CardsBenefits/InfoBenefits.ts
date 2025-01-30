import { 
PiSunglassesLight, 
PiBookLight, 
PiBabyLight, 
PiBasketLight, 
PiCalendarCheckLight, 
PiHandshakeLight, 
PiHouseLight, 
PiStudentLight, 
PiWheelchairLight, 
PiSprayBottleLight 
} from "react-icons/pi";

export interface Benefit {
name: string;
url: string;
icon: React.ElementType; // ← Guardamos la referencia al componente, no el JSX
}

export const InfoBenefits: Benefit[] = [
{
    name: "Lentes",
    url: "/formLentes",
    icon: PiSunglassesLight, // ← Solo la referencia al icono
},
{
    name: "Útiles",
    url: "/formUtiles",
    icon: PiBookLight,
},
{
    name: "Guardería",
    url: "/formGuarderia",
    icon: PiBabyLight,
},
{
    name: "Canastilla",
    url: "/formCanastilla",
    icon: PiBasketLight,
},
{
    name: "Día Sindical y Día Económico",
    url: "/formDiaSDiaE",
    icon: PiCalendarCheckLight,
},
{
    name: "Apoyo Prodep",
    url: "/formApoyoP",
    icon: PiHandshakeLight,
},
{
    name: "Residencias",
    url: "/formResidencias",
    icon: PiHouseLight,
},
{
    name: "Ayuda Estudios",
    url: "/formAyudaE",
    icon: PiStudentLight,
},
{
    name: "Aparatos Ortopédicos",
    url: "/formAparatosO",
    icon: PiWheelchairLight,
},
{
    name: "Lactancia",
    url: "/formLactancia",
    icon: PiSprayBottleLight,
},
];
