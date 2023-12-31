'use client';

import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Chamados() {
  const { register, reset, handleSubmit, formState } = useForm({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  });

  const onSubmit = async (data) => {
    const res = await fetch('/api/support', {
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
            Abertura de Chamado
          </h1>
          <p className="mt-4 text-lg font-normal text-gray-500">
            Preencha o formulário abaixo. Nós lhe retornaremos
            <br />
            em até 48 horas!
          </p>
        </div>
        {/* ---------------------------------------- INICIO DO FORMULÁRIO ----------------------------------------*/}
        <div className="mt-12">
          <form
            action="#"
            method="POST"
            className="grid grid-cols-1 text-lg gap-y-6 sm:grid-cols-2 sm:gap-x-8"
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
                  id="first-name"
                  required={true}
                  placeholder="Seu nome e sobrenome"
                  autoComplete="given-name"
                  className="py-3 px-4 block w-full shadow-sm 
                 border-gray-300 border rounded-md focus:outline-none focus:ring-1
                 focus:border-jptech-brand-blue focus:ring-jptech-brand-blue"
                  {...register('nome')}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="orgao"
                className="block text-sm sm:text-lg font-medium text-gray-700"
              >
                Orgão
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="orgao"
                  id="orgao"
                  required={true}
                  placeholder="Aonde você trabalha?"
                  autoComplete="orgao"
                  className="py-3 px-4 block w-full shadow-sm focus:outline-none focus:ring-1
                  focus:border-jptech-brand-blue focus:ring-jptech-brand-blue
                 border border-gray-300 rounded-md"
                  {...register('orgao')}
                />
              </div>
            </div>
            <div className="col-span-2">
              <label
                htmlFor="phone"
                className="block text-sm sm:text-lg font-medium text-gray-700"
              >
                Telefone para contato
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  required={true}
                  autoComplete="phone"
                  placeholder="+55 61 93333-3333"
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
                  required={true}
                  name="email"
                  type="email"
                  placeholder="Seu email"
                  autoComplete="email"
                  className="py-3 px-4 block w-full shadow-sm border border-gray-300
                 rounded-md focus:outline-none focus:ring-1
                 focus:border-jptech-brand-blue focus:ring-jptech-brand-blue"
                  {...register('email')}
                />
              </div>
            </div>
            <div className="">
              <label
                htmlFor="licitacao"
                className="block text-sm sm:text-lg font-medium text-gray-700"
              >
                Número da licitação
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  required={true}
                  name="licitacao"
                  id="licitacao"
                  autoComplete="licitacao"
                  className="py-3 px-4 block w-full shadow-sm focus:outline-none focus:ring-1
                  focus:border-jptech-brand-blue focus:ring-jptech-brand-blue
                 border border-gray-300 rounded-md"
                  {...register('licitacao')}
                />
              </div>
            </div>
            <div className="">
              <label
                htmlFor="contrato"
                className="block text-sm sm:text-lg font-medium text-gray-700"
              >
                Número do contrato
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  required={true}
                  name="contrato"
                  id="contrato"
                  autoComplete="contrato"
                  className="py-3 px-4 block w-full shadow-sm focus:outline-none focus:ring-1
                  focus:border-jptech-brand-blue focus:ring-jptech-brand-blue
                 border border-gray-300 rounded-md"
                  {...register('contrato')}
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
                  rows={4}
                  required={true}
                  placeholder="Escreva seu caso aqui..."
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
