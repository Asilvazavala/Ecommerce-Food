// Header
const currentDate = new Date();
const months = [
  'Enero', 'Febrero', 'Marzo', 'Abril',
  'Mayo', 'Junio', 'Julio', 'Agosto',
  'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];

const day = currentDate.getDate();
const month = currentDate.getMonth();
const year = currentDate.getFullYear();

export const formatedDate = `${day} ${months[month]} del ${year}`;

// Carrousel
import Hamburguesas from '../public/images/hamburguesas.jpg';
import Snacks from '../public/images/alitas.jpg';
import Paquetes from '../public/images/paquetes.jpg';

export const slides = [
  {
    url: Hamburguesas,
    name:" Promo 1",
    categoria: 'Hamburguesas'
  },
  {
    url: Paquetes,
    name:" Promo 2",
    categoria: 'Paquetes'
  },
  {
    url: Snacks,
    name:" Promo 3",
    categoria: 'Snacks'
  },
]

// Sidebar
import { RiHome6Line } from "react-icons/ri";
import { IoFastFoodOutline, IoPersonSharp } from "react-icons/io5";
import { FaMotorcycle } from "react-icons/fa";

export const links = [
  {
    name: 'Inicio',
    icon: RiHome6Line,
    href: '/'
  },
  {
    name: 'Pedido',
    icon: IoFastFoodOutline,
    href: '/pedido'
  },
  {
    name: 'Entrega',
    icon: FaMotorcycle,
    href: '/entrega'
  },
  {
    name: 'Perfil',
    icon: IoPersonSharp,
    href: '/perfil'
  }
]