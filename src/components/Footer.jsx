function Footer ({children}) {
 return(
    <div className="bg-white shadow-[0_5px_20px_rgba(0,0,0,0.3)]  py-15">
      <footer className="flex justify-center w-full">
        <div className="flex justify-between w-5/6">
          <section className="py-5">
            <h2 className="hover:scale-115 font-bold italic text-xl">NextJS_Blog</h2>
          </section>
          <section className="py-5">
            <ul className="block">
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
          </section>
        </div>
      </footer>   
    </div>
  )
}

export default Footer
