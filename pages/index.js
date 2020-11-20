import Nav from '../components/nav'
import Image from 'next/image'

export default function IndexPage() {
  return (
    <div>
      <Nav />
      <img
        src="/checkerboard-graphic.png"
        alt="Black and White Checkerboard"
        width={1000}
        className="z-0 -mt-64 md:-ml-8 absolute bottom-0"
      />
      <img
        src="/homepage-picture.png"
        alt="Picture of person wearing sweatshirt"
        // width={1000}
        className="z-0 -mt-64 md:-ml-8 absolute bottom-0 w-96 md:w-64"
      />
      <div className="z-10 p-20 ">
        {/* <h3 className="text-3xl text-black font-serif font-extralight uppercase dark:text-white">
          Pure.
        </h3> */}
        <h1 className="text-6xl text-black font-corben font-bold dark:text-white">
          swirl.
        </h1>
      </div>
    </div>
  )
}
