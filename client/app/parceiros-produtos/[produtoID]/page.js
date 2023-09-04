'use client';

import { useEffect, useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

const product = {
  variants: [{ name: '75"' }, { name: '85"' }, { name: '95"' }],
  details: [
    'Only the best materials',
    'Ethically and locally made',
    'Pre-washed and pre-shrunk',
    'Machine wash cold with similar colors',
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Produto({ params }) {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[2]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image_url, setImage_url] = useState('');

  const supabase = createClientComponentClient();
  const produtoID = params.produtoID;

  useEffect(() => {
    const getProduto = async () => {
      const { data, err } = await supabase
        .from('ProdutosQuinyx')
        .select()
        .eq('id', produtoID);
      if (data) {
        setTitle(data[0].title);
        setDescription(data[0].description);
        setImage_url(data[0].image_url);
      } else {
        console.log(err);
      }
    };

    getProduto();
  }, []);

  return (
    <div className="bg-white">
      <div className="pt-6 pb-16 sm:pb-24">
        <div className="mt-8 max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:auto-rows-min lg:gap-x-8">
            <div className="lg:col-start-8 lg:col-span-5">
              <div className="flex justify-between">
                <h1 className="text-2xl title font-medium text-gray-900">{title}</h1>
                {/*<p className="text-xl font-medium text-gray-900">
                  {product.price}
                </p>*/}
              </div>
            </div>

            {/* Imagem */}
            <div
              className="mt-8 flex align-middle lg:mt-0 lg:col-start-1
             lg:col-span-7 lg:row-start-1 lg:row-span-3 px-12"
            >
              <img
                key="1"
                src={image_url}
                alt={title}
                className="rounded-lg object-contain lg:col-span-2 lg:row-span-2"
              />
            </div>

            <div className="mt-8 lg:col-span-5">
              <form>
                {/* Variações */}
                <div className="mt-2">
                  <div className="flex items-center justify-between">
                    <h2 className="text-base font-medium text-gray-900">
                      Opções
                    </h2>
                  </div>
                  <RadioGroup
                    value={selectedVariant}
                    onChange={setSelectedVariant}
                    className="mt-2"
                  >
                    <RadioGroup.Label className="sr-only">
                      Escolha a opção
                    </RadioGroup.Label>
                    <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
                      {product.variants.map((variant) => (
                        <RadioGroup.Option
                          key={variant.name}
                          value={variant}
                          className={({ active, checked }) =>
                            classNames(
                              'cursor-pointer focus:outline-none',
                              active
                                ? 'ring-2 ring-offset-2 ring-jptech-brand-blue'
                                : '',
                              checked
                                ? 'bg-jptech-brand-blue border-transparent text-white hover:bg-jptech-brand-blue'
                                : 'bg-white border-gray-200 text-gray-900 hover:bg-gray-50',
                              'border rounded-md py-3 px-3 flex items-center justify-center text-base font-medium uppercase sm:flex-1'
                            )
                          }
                        >
                          <RadioGroup.Label as="p">
                            {variant.name}
                          </RadioGroup.Label>
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>

                <button
                  type="submit"
                  className="mt-8 w-full bg-jptech-brand-blue border
                   border-transparent rounded-md py-3 px-8 flex items-center 
                   justify-center text-lg font-normal text-white
                    hover:bg-jptech-brand-lighterblue focus:outline-none 
                    focus:ring-2 focus:ring-offset-2 focus:ring-jptech-brand-blue"
                >
                  Solicitar orçamento
                </button>
              </form>

              {/* Informação do produto */}
              <div className="mt-10">
                <h2 className="text-lg font-medium text-gray-900">Descrição</h2>

                <div
                  className="mt-4 prose prose-sm text-base text-gray-500"
                  dangerouslySetInnerHTML={{ __html: description }}
                />
              </div>

              <div className="mt-8 border-t border-gray-200 pt-8">
                <h2 className="text-base font-medium text-gray-900">
                  Especificações técnicas
                </h2>

                <div className="mt-4 prose prose-sm text-base text-gray-500">
                  <ul role="list">
                    {product.details.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
