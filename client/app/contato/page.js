'use client';

import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contato() {
  const { register, reset, handleSubmit, formState } = useForm({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  });

  const onSubmit = async (data) => {
    const res = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(data),
    });
    if (res.status === 200) {
      toast.success('Enviado com sucesso!');
      reset();
    } else if (res.status === 500) toast.error('Erro ao enviar email.');
    return res;
  };

  return (
    <div
      className="bg-slate-50 py-16 px-4 overflow-hidden sm:px-6 
  lg:px-8 lg:py-24"
    >
      <div className="relative max-w-xl mx-auto">
        <svg
          className="absolute left-full transform translate-x-1/2"
          width={404}
          height={404}
          fill="none"
          viewBox="0 0 404 404"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="85737c0e-0916-41d7-917f-596dc7edfa27"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={404}
            fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
          />
        </svg>
        <svg
          className="absolute right-full bottom-0 transform -translate-x-1/2"
          width={404}
          height={404}
          fill="none"
          viewBox="0 0 404 404"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="85737c0e-0916-41d7-917f-596dc7edfa27"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={404}
            fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
          />
        </svg>
        <div className="text-center">
          <h1
            className="text-3xl title font-medium tracking-tight bg-clip-text text-transparent bg-gradient-to-r
         from-[#4367b6] to-[#0f2541] sm:text-4xl"
          >
            Entre em contato
          </h1>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            Conecte-se conosco. Estamos ansiosos para ouvir você!
          </p>
        </div>
        {/* ---------------------------------------- INICIO DO FORMULÁRIO ----------------------------------------*/}
        <div className="mt-12">
          <form
            action="#"
            method="POST"
            className="grid grid-cols-1 gap-y-6 text-[15px] sm:grid-cols-2 sm:gap-x-8"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm sm:text-lg font-medium text-gray-700"
              >
                Nome
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="first-name"
                  required={true}
                  id="first-name"
                  placeholder="Seu nome completo"
                  autoComplete="given-name"
                  className="py-3 px-4 block w-full shadow-sm focus:outline-none focus:ring-1
                  focus:border-jptech-brand-blue focus:ring-jptech-brand-blue
                 border-gray-300 border rounded-md"
                  {...register('nome')}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm sm:text-lg font-medium text-gray-700"
              >
                Telefone para contato
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  required={true}
                  name="phone"
                  placeholder="+55 61 93333-3333"
                  id="phone"
                  autoComplete="phone"
                  className="py-3 px-4 block w-full shadow-sm focus:outline-none focus:ring-1
                  focus:border-jptech-brand-blue focus:ring-jptech-brand-blue
                 border border-gray-300 rounded-md"
                  {...register('phone')}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm sm:text-lg font-medium text-gray-700"
              >
                Email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required={true}
                  placeholder="Seu email"
                  autoComplete="email"
                  className="py-3 px-4 block w-full shadow-sm border border-gray-300
                 rounded-md focus:outline-none focus:ring-1
                 focus:border-jptech-brand-blue focus:ring-jptech-brand-blue"
                  {...register('email')}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm sm:text-lg font-medium text-gray-700"
              >
                Mensagem
              </label>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  required={true}
                  placeholder="Escreva seu texto aqui..."
                  rows={4}
                  className="py-3 px-4 block w-full shadow-sm
                  focus:outline-none focus:ring-1
                  focus:border-jptech-brand-blue focus:ring-jptech-brand-blue border
                  border-gray-300 rounded-md"
                  defaultValue={''}
                  {...register('msg')}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center
               px-6 py-3 border border-transparent rounded-md shadow-sm 
               text-lg font-normal text-white bg-jptech-brand-blue
                hover:bg-jptech-brand-lighterblue focus:outline-none focus:ring-2 
                focus:ring-offset-2 focus:ring-indigo-500"
              >
                Enviar mensagem
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
