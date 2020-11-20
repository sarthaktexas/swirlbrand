import Link from 'next/link'

const links = [
  { href: '/tops', label: 'Tops' },
  { href: '/bottoms', label: 'Bottoms' },
  { href: '/sweatshirts', label: 'Sweatshirts' },
  { href: '/stickers', label: 'Stickers' },
  { href: '/about', label: 'About' },
]

export default function Nav() {
  return (
    <nav>
      {/* <ul className="flex justify-between items-center p-4 blur"> */}
        <ul className="flex flex-wrap mx-auto sm:flex-col float-right mt-2 mr-2 md:mr-5">
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`} className="pb-5">
              <Link href={href}>
                <p className={`text-xl md:text-3xl text-black dark:text-white font-spectral font-black no-underline border-dashed border-b-4 border-swirl-orange px-2 transform uppercase hover:scale-110 transition duration-500`}>
                  <div className="pointer-events-none">
                    {label}
                  </div>
                </p>
              </Link>
            </li>
          ))}
        </ul>
      {/* </ul> */}
    </nav>
  )
}
