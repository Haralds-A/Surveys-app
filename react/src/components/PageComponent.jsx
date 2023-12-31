import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import React from 'react'
import TButton from './core/TButton'

export default function PageComponent({title, buttons = '', children}) {
  return (
    <>
        <header className="bg-white shadow">
            <div className="flex justify-between items-center mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900">{title}</h1>
                {buttons}
            </div>           
            </header>
            <main>
            <div className="mx-auto max-w-7x1 py-6 sm:px-6 lg:px-8">
                {children}
            </div>
        </main>
    </>
  )
}
