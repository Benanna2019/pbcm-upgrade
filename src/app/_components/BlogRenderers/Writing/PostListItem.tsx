'use client'
import * as React from 'react'

import type { Post } from '../../../../utils/types'
import { timestampToCleanTime } from '../../../../utils/transformers'
import { ListItem } from '../../ListDetail/ListItem'

interface Props {
  post: Post
  active: boolean
}

export const PostListItem = React.memo<Props>(({ post, active }) => {
  const publishedAt = timestampToCleanTime({ timestamp: post.publishedAt })
  return (
    <ListItem
      key={post.id}
      href={`/blog/${post.slug}`}
      title={post.title}
      description={null}
      byline={post.publishedAt ? publishedAt.formatted : 'Draft'}
      active={active}
    />
  )
})
