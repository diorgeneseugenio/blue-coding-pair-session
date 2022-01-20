import React from 'react'

import { GihpyItem } from './GihpyItem'
import { IGiphy } from '@/domain/entities/IGiphy'

interface OwnProps {
  giphys: IGiphy[]
}

export const GiphyList = ({ giphys }: OwnProps) => {
  return (
    <div className="grid grid-cols-5 gap-4">
      {giphys.map((giphy) => (
        <GihpyItem key={giphy.id} giphy={giphy} />
      ))}
    </div>
  )
}
