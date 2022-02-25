import type { NextPage } from 'next'
import Head from 'next/head'
import Component from '~components/Home';

const Home: NextPage = () => {
  return <Component />
}

// export async function getStaticProps({ locale }) {
//   // Call an external API endpoint to get posts.
//   // You can use any data fetching library
//   const res = await fetch(`https://.../posts?locale=${locale}`)
//   const posts = await res.json()

//   if (posts.length === 0) {
//     return {
//       notFound: true,
//     }
//   }

//   // By returning { props: posts }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       posts,
//     },
//   }
// }

export default Home
