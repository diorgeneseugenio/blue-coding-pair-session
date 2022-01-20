import React from 'react'

import { GiphyFilter } from './GiphyFilter'
import { GiphyList } from './GiphyList'
import { LoadMoreButton } from './LoadMoreButton'
import { useFilter } from '@/services/store/client/hooks/useFilter'
import { useFetchGiphy } from '@/services/store/server/query/useFetchGiphy'

export const GiphyMain = () => {
  const { filterText } = useFilter()

  const {
    data: responseGiphy,
    fetchNextPage,
    isFetching
  } = useFetchGiphy({
    filter: filterText
  })

  return (
    <div className="flex flex-col gap-4 p-8">
      <GiphyFilter />
      {isFetching && <span>Loading...</span>}
      {responseGiphy?.pages.map((page) => (
        <GiphyList key={page.pagination.offset} giphys={page.data} />
      ))}
      <LoadMoreButton loadMore={() => fetchNextPage()} />
    </div>
  )
}
