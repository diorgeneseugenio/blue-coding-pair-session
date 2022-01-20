import React from 'react'

import { IGiphy } from '@/domain/entities/IGiphy'

interface OwnProps {
  giphy: IGiphy
}

export const GihpyItem = ({ giphy }: OwnProps) => {
  return (
    <div className="flex flex-col col-span-1 gap-2">
      <img src={giphy.images.preview_gif.url} alt={giphy.title} />
      <span>{giphy.title}</span>
    </div>
  )
}
