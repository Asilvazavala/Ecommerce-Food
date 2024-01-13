"use client";

import ToggleTheme from "@/helpers/ToggleTheme";
import toast, { Toaster } from "react-hot-toast";
import { useState } from 'react';

interface FormValues {
  name: string;
  surname: string;
  email: string;
  confirmEmail: string;
  phone: number | string;
}

const Perfil = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    name: '',
    surname: '',
    email: '',
    confirmEmail: '',
    phone: ''
  });

  const { name, surname, email, confirmEmail, phone } = formValues;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (name.trim() === '' || 
        surname.trim() === '' || 
        email.trim() === '' || 
        confirmEmail.trim() === '' || 
        phone === '') {
          toast.error("Completa todos los datos por favor");
        } else if (email.trim() !== confirmEmail.trim()) {
            toast.error("Los emails no coinciden");
          } else {
            toast.success("Datos guardados correctamente 😀");
          }
  }
  
  return (
    <section className='bg-Secondary dark:bg-DarkSecondary w-full px-4 
    flex items-center flex-col md:pl-36 pt-12 md:pt-6 md:items-start'>
      <Toaster />
      <h1 className="text-3xl text-Accent font-bold mb-6">Perfil</h1>
      <h2 className="border-b border-gray-500 text-gray-500 text-xl w-full md:w-[30rem] mb-4">
        Datos
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full md:w-[30rem] pb-4 text-sm">
        <article className="flex justify-between items-center gap-2">
          <label htmlFor="nombre">Nombre(s)</label>
          <input 
            id="nombre" 
            type="text" 
            name="name"
            value={name}
            onChange={handleChange}
            required
            autoComplete="name"
            placeholder="Requerido"
            className="p-2 rounded-sm md:w-72 text-black"
          />
        </article>

        <article className="flex justify-between items-center gap-2">
          <label htmlFor="apellido">Apellidos</label>
          <input 
            id="apellido" 
            type="text" 
            name="surname"
            value={surname}
            onChange={handleChange}
            required
            autoComplete="name"
            placeholder="Requerido"
            className="p-2 rounded-sm md:w-72 text-black"
          />
        </article>
        <article className="flex justify-between items-center gap-2">
          <label htmlFor="email">Correo eléctronico</label>
          <input 
            id="email" 
            type="email" 
            name="email"
            value={email}
            onChange={handleChange}
            required
            autoComplete="email"
            placeholder="Requerido"
            className="p-2 rounded-sm md:w-72 text-black"
          />
        </article>

        <article className="flex justify-between items-center gap-2">
          <label htmlFor="confirmEmail">Confirmar correo</label>
          <input 
            id="confirmEmail" 
            type="email" 
            name="confirmEmail"
            value={confirmEmail}
            onChange={handleChange}
            required
            autoComplete="email"
            placeholder="Requerido"
            className="p-2 rounded-sm md:w-72 text-black"
          />
        </article>

        <article className="flex justify-between items-center gap-2">
          <label htmlFor="phone">Teléfono / Celular</label>
          <input 
            id="phone" 
            type="number" 
            name="phone"
            value={phone}
            onChange={handleChange}
            required
            autoComplete="phone"
            placeholder="Requerido"
            className="p-2 rounded-sm md:w-72 text-black"
          />
        </article>
        <button 
          type="submit"
          className="mt-2 w-full px-4 lg:hover:outline
          lg:hover:outline-Accent transition py-2 bg-Primary dark:bg-DarkPrimary 
          rounded-full text-lg">
          Guardar cambios
        </button>
      </form>
      <h2 className="border-b border-gray-500 text-gray-500 text-xl w-full md:w-[30rem] mt-6 mb-2">Configuración</h2>
      <ToggleTheme />
    </section>
  )
};

export default Perfil;