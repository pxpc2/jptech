'use client';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function NewsletterFooter() {
  const [email, setEmail] = useState('');
  const supabase = createClientComponentClient();

  async function onEmailSubmit(e) {
    console.log(email);
    e.preventDefault();
    const { data, error } = await supabase
      .from('Newsletter')
      .insert({ email: `${email}` });
    if (error) {
      console.log(error);
      toast.error('Erro ao cadastrar email.');
    } else {
      toast.success('Email cadastrado com sucesso!');
      setEmail('');
    }
  }

  return (
    <div className="mt-8 xl:mt-0">
      <h3 className="text-base font-medium text-gray-300 tracking-wider uppercase">
        Cadastre seu email e receba nossas novidades!
      </h3>
      <p className="mt-4 text-base text-gray-400">
        Se inscreva em nossa correspondência e esteja sempre ciente de novos
        produtos e promoções!
      </p>
      <form
        className="mt-4 sm:flex text-[15px] sm:max-w-md"
        onSubmit={onEmailSubmit}
      >
        <label htmlFor="email-address" className="sr-only">
          Endereço de email
        </label>
        <input
          type="email"
          name="email-address"
          id="email-address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          required
          className="appearance-none min-w-0 w-full bg-white border border-transparent rounded-md py-2 px-4
           text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 
           focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white
            focus:placeholder-gray-400"
          placeholder="Entre com seu email"
        />
        <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
          <button
            type="submit"
            className="w-full bg-jptech-brand-blue border border-transparent rounded-md 
            py-2 px-4 flex items-center justify-center text-[15px] 
            font-medium text-white hover:bg-indigo-600 focus:outline-none 
            focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
          >
            Inscrever-se
          </button>
        </div>
      </form>
    </div>
  );
}
