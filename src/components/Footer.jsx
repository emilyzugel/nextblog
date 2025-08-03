function Footer ({children}) {
 return(
    <div className="bg-purple-500">
      <footer className="flex justify-center w-full">
        <div className="flex justify-between w-5/6">
          <section className="py-5">
            <h2 className="font-bold italic text-xl">NextJS_Blog</h2>
          </section>
          <section className="py-5">
            <ul className="block">
              <li className="p-2">
                <a href="#Home">Home</a>
              </li>
              <li className="p-2">
                <a href="#About">About</a>
              </li>
              <li className="p-2">
                <a href="#Contact">Contact</a>
              </li>
            </ul>
          </section>
        </div>
      </footer>   
    </div>
  )
}

export default Footer
