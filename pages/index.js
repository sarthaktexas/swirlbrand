import Head from 'next/head'
import Nav from '../components/nav'
import Link from 'next/link'

export default function IndexPage() {
  return (
    <div>
      <Head>
        <script async defer data-website-id="bb8c0f29-bac3-4894-be39-e025a429ac79" src="https://analytics.sarthakmohanty.me/umami.js"></script>
      </Head>
      <img
        src="/checkerboard-graphic.png"
        alt="Black and White Checkerboard"
        width={1000}
        className="pointer-events-none -mt-64 sm:-ml-8 absolute bottom-0"
      />
      <img
        src="/homepage-picture.png"
        alt="Picture of person wearing sweatshirt"
        // width={1000}
        className="pointer-events-none -mt-64 sm:-ml-8 absolute bottom-0 w-96 sm:w-64"
      />
      <Nav/>
      <div className="absolute p-20 mt-24 md:mt-0">
        {/* <h3 className="text-3xl text-black font-serif font-extralight uppercase dark:text-white">
          Pure.
        </h3> */}
        <h1 className="pointer-events-none outline-text text-6xl text-black font-corben font-bold dark:text-purple-500">
          swirl.
        </h1>
        <Link href="/latest-collection">
          <p className="bg-white align-center sm:w-56 font-varela font-bold text-black p-2 border-2 border-black sm:hover:border-purple-600 rounded hover:text-white hover:bg-black">
            <div className="pointer-events-none">
              Shop our latest collection
            </div>
          </p>
        </Link>
      </div>
    </div>
  )
}
