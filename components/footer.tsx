import React from 'react'

export default function Footer() {
  return (
    <footer className='text-center mx-auto text-gray-500 my-16 px-4 sm:max-w-[35rem]'>
        <small className='mb-2 block text-xs'>&copy; {new Date().getFullYear()} Lucas Chaves</small>
        <p className='text-sm'>
        <span className="font-semibold text-sm">Sobre este site:</span> Portfolio pessoal do desenvolvedor Lucas Chaves, desenvolvido com Next.js. Mais detalhes sobre este projeto podem ser encontrados <a href="https://github.com/lukeeplr/portfolio" className="italic underline" target='_blank'>aqui</a>
        </p>
    </footer>
  )
}
