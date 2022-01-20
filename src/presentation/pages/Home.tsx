import React from 'react'

import { GiphyMain } from '../containers/Giphy'
import { TemplateBase } from '@/presentation/components/TemplateBase'

export const Home = () => {
  return (
    <TemplateBase>
      <GiphyMain />
    </TemplateBase>
  )
}
