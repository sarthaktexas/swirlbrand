import Nav from '../components/nav'
import Image from 'next/image'
import Link from 'next/link'

export default function IndexPage() {
  return (
    <div>
      <Nav />
      <img
        src="/checkerboard-graphic.png"
        alt="Black and White Checkerboard"
        width={1000}
        className="pointer-events-none z-0 -mt-64 md:-ml-8 absolute bottom-0"
      />
      <img
        src="/homepage-picture.png"
        alt="Picture of person wearing sweatshirt"
        // width={1000}
        className="pointer-events-none z-0 -mt-64 md:-ml-8 absolute bottom-0 w-96 md:w-64"
      />
      <div className="z-10 p-20 ">
        {/* <h3 className="text-3xl text-black font-serif font-extralight uppercase dark:text-white">
          Pure.
        </h3> */}
        <h1 className="text-6xl text-black font-corben font-bold dark:text-white">
          swirl.
        </h1>
        <Link href="/latest-collection">
          <p className="align-center md:w-56 font-varela font-bold text-black p-2 border-2 md:hover:border-purple-600 rounded hover:text-white hover:bg-black">
            Shop our latest collection
          </p>
        </Link>
      </div>
    </div>
  )
}
