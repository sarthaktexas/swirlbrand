import Nav from '../components/nav'
import Image from 'next/image'

export default function IndexPage() {
  return (
    <div>
      <Nav />
      {/* <img
        src="/homepage-picture.png"
        alt="Picture of person wearing sweatshirt"
        width={800}
        className="z-0 -ml-10 absolute bottom-0"
      /> */}
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
