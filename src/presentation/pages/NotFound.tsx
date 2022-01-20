import React from 'react'

import { TemplateBase } from '@/presentation/components/TemplateBase'

export const NotFound = () => {
  return (
    <TemplateBase>
      <div className="flex flex-col justify-center items-center w-full h-screen">
        <h1 className="text-6xl">404</h1>
        <h3 className="text-xl text-gray-400">Not found</h3>
      </div>
    </TemplateBase>
  )
}
