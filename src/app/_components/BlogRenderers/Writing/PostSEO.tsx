'use client'
import { NextSeo } from 'next-seo'
import * as React from 'react'

import { baseUrl } from '../../../../utils/config/seo'
import type { Post } from '../../../../utils/types'
// create a post type

interface Props {
  post: Post
}

export function PostSEO({ post }: Props) {
  return (
    <NextSeo
      title={post.title}
      description={post.excerpt}
      openGraph={{
        title: post.title,
        url: `${baseUrl}/writing/${post.slug}`,
        description: post.excerpt,
        images: [
          {
            url:
              post.featureImage ||
              `${baseUrl}/static/img/writing/${post.slug}.png`,
            alt: post.title,
          },
        ],
      }}
      twitter={{
        cardType: 'summary_large_image',
      }}
    />
  )
}
