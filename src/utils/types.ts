import type { StaticImageData } from 'next/image'

export interface Post {
  author?: Author
  createdAt?: string
  excerpt?: string
  featureImage?: string
  id: string
  publishedAt?: string
  slug?: string
  body?: string
  title?: string
}

export interface Author {
  avatar?: string
  createdAt?: string
  name?: string
}

export interface PBCMBoardInfo {
  name?: string
  photo?: StaticImageData | string
  altText?: string
  role?: string
  category?: string
}

export interface BoardMemberInterface {
  board_members: Array<PBCMBoardInfo>
  coordinators: Array<PBCMBoardInfo>
}
