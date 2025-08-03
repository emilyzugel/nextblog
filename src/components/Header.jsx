function Header ({children}) {
  return (
    <div className="w-full flex flex-col items-center justify-center p-20">
      <h2 className="font-bold text-5xl p-8 italic">NextJS Blog</h2>
      <p className="italic text-base">Simple, minimalist blog coded with NextJS :)</p>
    </div>
  )
}

export default Header
