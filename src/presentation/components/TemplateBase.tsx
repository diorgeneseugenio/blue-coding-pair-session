import React, { ReactNode } from 'react'

interface OwnProps {
  children: ReactNode
}

export const TemplateBase = ({ children }: OwnProps) => {
  return (
    <div className="w-full h-full min-h-screen text-gray-800 bg-gray-100">
      {children}
    </div>
  )
}
