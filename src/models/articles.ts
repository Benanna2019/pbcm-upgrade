import type { Post } from '../clients/parsers/post'
import Sanity from '../clients/sanity'
import 'server-only'

const sanity = Sanity()

export async function getAllArticles(): Promise<Post[]> {
  const articles = await sanity.getAllPosts()
  return articles
}

export async function getArticleBySlug(slug: string) {
  const article = await sanity.getPostBySlug(slug)
  return article
}

export async function getFeaturedArticle() {
  const featuredArticle = await sanity.getFeaturedArticle()
  return featuredArticle
}
