import Image from "next/image";

function Header ({children}) {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h2 className="font-bold text-5xl p-8 italic">NextJS Blog</h2>
      <p className="italic text-base">Simple, minimalist blog coded with NextJS :)</p>
      <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-100">
        <Image src="/next-header.png" fill
          alt="neaxtjs image"
          className="object-contain"
        />
      </div>
    </div>
  )
}

export default Header
