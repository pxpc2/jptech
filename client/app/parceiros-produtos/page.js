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
    <div className="flex flex-col items-center justify-center py-24 gap-12">
      <h1 className="text-5xl font-bold uppercase">Produtos de Parceiros</h1>
      <ul className="text-center">
        {ProdutosParceiros.map((item) => (
          <li key={item.id} className="flex flex-col items-center py-8">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <Image
              src={item.image_url}
              alt={item.title}
              width={200}
              height={100}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
