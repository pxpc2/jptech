'use client';

import { Popover, Transition } from '@headlessui/react';
import {
  ChatIcon,
  ChevronDownIcon,
  InboxIcon,
  MenuIcon,
  XIcon,
} from '@heroicons/react/solid';
import { Fragment } from 'react';
import Image from 'next/image';
import { ChatAlt2Icon } from '@heroicons/react/outline';

const solutions = [
  {
    name: 'Nossos Produtos',
    description:
      'Conheça nossos produtos e entenda como podemos trazer a solução que você precisa.',
    href: '/nossos-produtos',
    icon: InboxIcon,
  },
  {
    name: 'Produtos de Parceiros',
    description:
      'Conheça os produtos de nossos parceiros e receba a solução específica para o seu negócio.',
    href: '/parceiros-produtos',
    icon: MenuIcon,
  },
];
const navigation = [{ name: 'Abertura de Chamados', href: '/chamados' }];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Header() {
  return (
    <header className="z-10">
      <Popover className="relative bg-white">
        <div
          className="flex justify-between items-center max-w-7xl mx-auto px-4 py-3 sm:px-6 md:justify-start md:space-x-10 lg:px-8
        border-b-2 border-gray-200"
        >
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/">
              <span className="sr-only">Workflow</span>
              <Image
                src={'/logos/jptech-blacklogo.png'}
                alt="logo"
                width={270}
                height={250}
                className="ease-in-out duration-150 hover:scale-105"
              />
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group
            as="nav"
            className="hidden md:flex space-x-10 align-middle"
          >
            <a
              key={'Quem Somos'}
              href="/quemsomos"
              className="text-lg font-normal text-gray-800 hover:font-medium"
            >
              Quem Somos
            </a>
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'font-medium' : '',
                      ' bg-white text-gray-800 rounded-md inline-flex align-top items-center text-lg font-normal hover:font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-jptech-brand-blue'
                    )}
                  >
                    <a>Soluções</a>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-800' : 'text-gray-800',
                        'ml-2 h-5 w-5 group-hover:font-medium'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-4 transform w-screen max-w-md lg:max-w-2xl lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-10 lg:grid-cols-2">
                          {solutions.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                            >
                              <div
                                className="flex-shrink-0 flex items-center justify-center h-10 w-10 
                              rounded-md bg-jptech-brand-blue text-white sm:h-12 sm:w-12"
                              >
                                <item.icon
                                  className="h-6 w-6"
                                  aria-hidden="true"
                                />
                              </div>
                              <div className="ml-4">
                                <p className="text-lg font-normal hover:underline text-gray-800">
                                  {item.name}
                                </p>
                                <p className="mt-1 text-base font-normal leading-[1.4rem] text-gray-500">
                                  {item.description}
                                </p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-lg font-normal text-gray-800 hover:font-medium"
              >
                {item.name}
              </a>
            ))}
          </Popover.Group>
          <div className="hidden md:flex items-center align-top justify-end md:flex-1 ">
            <a
              href="/contato"
              className="inline-flex items-center
               justify-center px-6 py-2 border border-transparent rounded-md 
               shadow-sm text-lg font-normal text-white bg-jptech-brand-blue
                hover:bg-jptech-brand-lighterblue"
            >
              Entre em contato
            </a>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute z-30 top-0 inset-x-0 m-2 rounded-lg  transition transform origin-top-right md:hidden"
          >
            <div className="rounded-lg ring-1 shadow-md shadow-black ring-black ring-opacity-20 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div>
                    <Image
                      src={'/logos/jptech-brand.png'}
                      alt="jptech"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button
                      className="bg-white rounded-md p-2 inline-flex 
                    items-center justify-center text-gray-400 hover:text-gray-500
                     hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset
                      focus:ring-indigo-500"
                    >
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid grid-cols-1 gap-7">
                    {solutions.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                      >
                        <div
                          className="flex-shrink-0 flex items-center
                         justify-center h-10 w-10 rounded-md bg-jptech-brand-blue text-white"
                        >
                          <item.icon className="h-6 w-6" aria-hidden="true" />
                        </div>
                        <div className="ml-4 text-base font-medium text-gray-900">
                          {item.name}
                        </div>
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
              <div className="py-6 px-5 bg-jptech-brand-blue">
                <div className="grid grid-cols-2 gap-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-base font-medium text-gray-200 hover:text-gray-700"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </header>
  );
}
