import Image from 'next/image';
import { cookies } from 'next/headers';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
export const dynamic = 'force-dynamic';

export default async function ProdutosParceiros() {
  const supabase = createServerComponentClient({ cookies });

  const { data: ProdutosParceiros } = await supabase
    .from('ProdutosParceiros')
    .select();

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="sr-only">Produtos de Parceiros</h1>

        <div
          className=" grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 
       lg:grid-cols-3 lg:gap-x-8"
        >
          {ProdutosParceiros.map((item) => (
            <div
              key={item.id}
              className="group max-w-[350px] relative bg-white border border-gray-200 rounded-lg
              flex flex-col overflow-hidden items-center"
            >
              <div
                className="aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-50
              sm:aspect-none w-[250px]"
              >
                <Image
                  src={item.image_url}
                  alt={item.title}
                  width={300}
                  height={100}
                  className="w-full object-center object-cover"
                />
              </div>
              <div
                className="absolute inset-0 flex items-center justify-center opacity-0
               group-hover:opacity-100 transition-opacity"
              >
                <span
                  className="text-white text-md rounded-lg bg-jptech-brand-blue
                 bg-opacity-50 p-2"
                >
                  Saiba mais
                </span>
              </div>
              <div className="flex-1 p-4 gap-2 space-y-2 flex flex-col">
                <h3 className="text-sm font-medium text-gray-900">
                  <a href={'#'}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {item.title}
                  </a>
                </h3>
                <p className="text-xs text-gray-500 overflow-hidden line-clamp-3">
                  {item.description}
                </p>
                <div className="flex-1 flex flex-col justify-end">
                  <p className="text-xs text-gray-500">
                    {'2 opções disponíveis'}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
