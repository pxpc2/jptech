import Image from 'next/image';
import { cookies } from 'next/headers';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
export const dynamic = 'force-dynamic';

export default async function ProdutosQuinyx() {
  const supabase = createServerComponentClient({ cookies });

  const { data: ProdutosQuinyx } = await supabase
    .from('ProdutosQuinyx')
    .select();

  console.log(ProdutosQuinyx.length + 'OI OI OI ');

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="sr-only">Produtos de Parceiros</h1>
        <div
          className=" grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 
       lg:grid-cols-3 lg:gap-x-8"
        >
          {ProdutosQuinyx.map((item) => (
            <div
              key={item.id}
              className="group max-w-[350px] mx-8 sm:mx-0 relative bg-white border
               border-gray-200 rounded-lg
              flex flex-col overflow-hidden items-center"
            >
              <div
                className="aspect-w-3 aspect-h-4 flex bg-white
              sm:aspect-none w-[250px] h-[250px]  group-hover:opacity-50"
              >
                <Image
                  src={item.image_url}
                  alt={item.title}
                  width={300}
                  height={100}
                  className="w-full object-center object-contain"
                />
              </div>
              <div
                className="absolute  top-1/4 flex items-center justify-center opacity-0
               group-hover:opacity-80 transition-opacity"
              >
                <span
                  className="text-white text-base rounded-lg bg-jptech-brand-blue
                 bg-opacity-100 p-3"
                >
                  Saiba mais
                </span>
              </div>
              <div className="flex-1 p-4 gap-2 space-y-2 flex flex-col">
                <h3 className="text-lg font-medium text-gray-900">
                  <a href={`/parceiros-produtos/${item.id}`}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {item.title}
                  </a>
                </h3>
                <p className="text-base text-gray-500 overflow-hidden line-clamp-3">
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
