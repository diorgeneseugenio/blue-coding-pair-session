import axios from 'axios'

import { IAPIGiphyResponse } from '@/domain/entities/IGiphy'

export const fetchGiphys = async ({
  pageParam,
  queryKey
}: any): Promise<IAPIGiphyResponse> => {
  const [, param] = queryKey

  const { filter } = param

  const { data: giphys } = await axios.request<IAPIGiphyResponse>({
    url: `https://api.giphy.com/v1/gifs/search?api_key=KtVwn6dB3a49vwvpPj1mcMc0oC6sJ8Mq&q=${filter}&limit=25&offset=${pageParam}&rating=g&lang=en`,
    method: 'GET'
  })

  return giphys
}
