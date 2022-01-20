import React, { ChangeEvent } from 'react'

import { Input } from '@/presentation/components/Input/Input'
import { useFilter } from '@/services/store/client/hooks/useFilter'

export const GiphyFilter = () => {
  const { filterText, setFilterText } = useFilter()

  return (
    <Input
      name="filter"
      id="filter"
      value={filterText}
      onChange={(e: ChangeEvent<HTMLInputElement>) =>
        setFilterText(e.target.value)
      }
    />
  )
}
