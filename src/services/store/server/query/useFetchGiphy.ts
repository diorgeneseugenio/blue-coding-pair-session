import { useInfiniteQuery, UseInfiniteQueryResult } from 'react-query'

import { IAPIGiphyResponse } from '@/domain/entities/IGiphy'
import { fetchGiphys } from '@/infra/http/api/fetchGiphys'
import { QueryKeys } from '@/services/constants/queryKeys'

interface IUseFetchGiphyParams {
  filter: string
}

export const useFetchGiphy = ({
  filter
}: IUseFetchGiphyParams): UseInfiniteQueryResult<IAPIGiphyResponse> =>
  useInfiniteQuery([QueryKeys.giphys, { filter }], fetchGiphys, {
    getNextPageParam: (lastPage) => {
      const offset = lastPage.pagination.offset

      if (!offset) return 1

      return offset + 1
    }
  })
