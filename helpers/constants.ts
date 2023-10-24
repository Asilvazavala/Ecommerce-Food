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

export const slides = [
  {
    url: 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    name:" Promo 1",
    categoria: 'Hamburguesas'
  },
  {
    url: 'https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    name:" Promo 2",
    categoria: 'Paquetes'
  },
]