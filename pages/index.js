import Head from 'next/head'
import Nav from '../components/nav'
import Link from 'next/link'

export default function IndexPage() {
  return (
    <div className="container mx-auto my-12 text-3xl">
      <Head>
        <script async defer data-website-id="bb8c0f29-bac3-4894-be39-e025a429ac79" src="https://analytics.sarthakmohanty.me/umami.js"></script>
      </Head>
      <h3 className="text-left font-corben font-bold text-6xl">Swirl</h3>
      <h3 className="text-left font-mytupi font-bold uppercase">Shop our latest collection.</h3>
      <h3 className="text-left font-mytupi font-bold uppercase">Tops</h3>
      <h3 className="text-left font-mytupi font-bold uppercase">Bottoms</h3>
      <h3 className="text-left font-mytupi font-bold uppercase">Sweatshirts</h3>
      <h3 className="text-left font-mytupi font-bold uppercase">Stickers</h3>
      <h3 className="text-left font-mytupi font-bold uppercase">About</h3>
      <h3></h3>
    </div>
  )
}
