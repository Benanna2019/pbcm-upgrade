import { getAllArticles } from '@/src/models/articles'
import BlogIndexPage from '../PageContent/BlogIndexPage'

export default async function BlogLayout() {
  const posts = await getAllArticles()

  return <BlogIndexPage posts={posts} />
}
