export interface IOriginal {
  height: string
  width: string
  size: string
  url: string
  mp4_size: string
  mp4: string
  webp_size: string
  webp: string
  frames: string
  hash: string
}

export interface IDownsized {
  height: string
  width: string
  size: string
  url: string
}

export interface IDownsizedLarge {
  height: string
  width: string
  size: string
  url: string
}

export interface IDownsizedMedium {
  height: string
  width: string
  size: string
  url: string
}

export interface IDownsizedSmall {
  height: string
  width: string
  mp4_size: string
  mp4: string
}

export interface IDownsizedStill {
  height: string
  width: string
  size: string
  url: string
}

export interface IFixedHeight {
  height: string
  width: string
  size: string
  url: string
  mp4_size: string
  mp4: string
  webp_size: string
  webp: string
}

export interface IFixedHeightDownsampled {
  height: string
  width: string
  size: string
  url: string
  webp_size: string
  webp: string
}

export interface IFixedHeightSmall {
  height: string
  width: string
  size: string
  url: string
  mp4_size: string
  mp4: string
  webp_size: string
  webp: string
}

export interface IFixedHeightSmallStill {
  height: string
  width: string
  size: string
  url: string
}

export interface IFixedHeightStill {
  height: string
  width: string
  size: string
  url: string
}

export interface IFixedWidth {
  height: string
  width: string
  size: string
  url: string
  mp4_size: string
  mp4: string
  webp_size: string
  webp: string
}

export interface IFixedWidthDownsampled {
  height: string
  width: string
  size: string
  url: string
  webp_size: string
  webp: string
}

export interface IFixedWidthSmall {
  height: string
  width: string
  size: string
  url: string
  mp4_size: string
  mp4: string
  webp_size: string
  webp: string
}

export interface IFixedWidthSmallStill {
  height: string
  width: string
  size: string
  url: string
}

export interface IFixedWidthStill {
  height: string
  width: string
  size: string
  url: string
}

export interface ILooping {
  mp4_size: string
  mp4: string
}

export interface IOriginalStill {
  height: string
  width: string
  size: string
  url: string
}

export interface IOriginalMp4 {
  height: string
  width: string
  mp4_size: string
  mp4: string
}

export interface IPreview {
  height: string
  width: string
  mp4_size: string
  mp4: string
}

export interface IPreviewGif {
  height: string
  width: string
  size: string
  url: string
}

export interface IPreviewWebp {
  height: string
  width: string
  size: string
  url: string
}

export interface IStill {
  height: string
  width: string
  size: string
  url: string
}

export interface IHd {
  height: string
  width: string
  mp4_size: string
  mp4: string
}

export interface IImages {
  original: IOriginal
  downsized: IDownsized
  downsized_large: IDownsizedLarge
  downsized_medium: IDownsizedMedium
  downsized_small: IDownsizedSmall
  downsized_still: IDownsizedStill
  fixed_height: IFixedHeight
  fixed_height_downsampled: IFixedHeightDownsampled
  fixed_height_small: IFixedHeightSmall
  fixed_height_small_still: IFixedHeightSmallStill
  fixed_height_still: IFixedHeightStill
  fixed_width: IFixedWidth
  fixed_width_downsampled: IFixedWidthDownsampled
  fixed_width_small: IFixedWidthSmall
  fixed_width_small_still: IFixedWidthSmallStill
  fixed_width_still: IFixedWidthStill
  looping: ILooping
  original_still: IOriginalStill
  original_mp4: IOriginalMp4
  preview: IPreview
  preview_gif: IPreviewGif
  preview_webp: IPreviewWebp
  still: IStill
  hd: IHd
}

export interface IOnload {
  url: string
}

export interface IOnclick {
  url: string
}

export interface IOnsent {
  url: string
}

export interface IAnalytics {
  onload: IOnload
  onclick: IOnclick
  onsent: IOnsent
}

export interface IUser {
  avatar_url: string
  banner_image: string
  banner_url: string
  profile_url: string
  username: string
  display_name: string
  description: string
  instagram_url: string
  website_url: string
  is_verified: boolean
}

export interface IGiphy {
  type: string
  id: string
  url: string
  slug: string
  bitly_gif_url: string
  bitly_url: string
  embed_url: string
  username: string
  source: string
  title: string
  rating: string
  content_url: string
  source_tld: string
  source_post_url: string
  is_sticker: number
  import_datetime: string
  trending_datetime: string
  images: IImages
  analytics_response_payload: string
  analytics: IAnalytics
  user: IUser
}

export interface IPagination {
  total_count: number
  count: number
  offset: number
}

export interface IMeta {
  status: number
  msg: string
  response_id: string
}

export interface IAPIGiphyResponse {
  data: IGiphy[]
  pagination: IPagination
  meta: IMeta
}
