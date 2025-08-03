function Navbar ({children}){
  return (
    <>
      <navbar className="z-1 sticky top-0 flex justify-center bg-white shadow-xl p-2">
        <div className="flex justify-between p-1 w-5/6">
          <div className="flex">
              <h1 className="text-lg text-black font-bold italic">NextJS_Blog</h1>
          </div>
          <div className="flex">
            <ul className="flex">
                <li className="px-2 hover:scale-115">
                  <a href="#Home" className="hover:text-gray-700">Home</a>
                </li>
                <li className="px-2 hover:scale-108">
                  <a href="#About" className="hover:text-gray-700">About</a>
                </li>
                <li className="px-2 hover:scale-108">
                  <a href="#Contact" className="hover:text-gray-700">Contact</a>
                </li>
            </ul>
           </div>
        </div>
      </navbar>
    </>
  )
}

export default Navbar
