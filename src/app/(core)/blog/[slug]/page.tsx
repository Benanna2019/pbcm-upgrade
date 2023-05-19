import { PostDetail } from '../../../_components/BlogRenderers/Writing/PostDetail'
import { getArticleBySlug } from '@/src/models/articles'

const BlogPostPage = async ({ params }: any) => {
  const slug = params.slug
  const postInfo = await getArticleBySlug(slug as string)

  return <PostDetail post={postInfo[0]} />
}

export default BlogPostPage
