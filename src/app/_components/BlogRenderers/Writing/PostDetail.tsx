'use client'
import * as React from 'react'

import { timestampToCleanTime } from '../../../../utils/transformers'
import { Detail } from '../../ListDetail/Detail'
import { MarkdownRenderer } from '../../MarkdownRenderer'
import { PostSEO } from './PostSEO'

export function PostDetail({ post }: any) {
  const scrollContainerRef = React.useRef(null)
  const titleRef = React.useRef(null)
  // if (isLoading) {
  //   return <Detail.Loading />
  // }

  if (!post) {
    return <Detail.Null />
  }
  const publishedAt = timestampToCleanTime({ timestamp: post.date })
  return (
    <>
      <PostSEO post={post} />
      <Detail.Container data-cy="post-detail" ref={scrollContainerRef}>
        <Detail.ContentContainer>
          <Detail.Header className="text-center">
            <Detail.Title ref={titleRef}>{post.title}</Detail.Title>
            <span
              title={publishedAt.raw}
              className="text-tertiary inline-block pt-6 leading-snug"
            >
              {publishedAt.formatted}
            </span>
          </Detail.Header>

          <MarkdownRenderer children={post.body} className="prose mt-8" />

          {/* bottom padding to give space between post content and comments */}
          <div className="py-6" />
        </Detail.ContentContainer>
      </Detail.Container>
    </>
  )
}
