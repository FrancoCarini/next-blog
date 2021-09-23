import { POSTS_PER_PAGE } from '@/config/index'
import { getPosts } from '@/lib/posts'

import Layout from '@/components/Layout'
import Post from '@/components/Post'

export default function HomePage({ posts }) {
  return (
    <Layout>
      <h1 className='text-5xl border-b-4 p-5 font-bold'>BLOG</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      posts: getPosts().slice(0, POSTS_PER_PAGE)
    }
  }
}
