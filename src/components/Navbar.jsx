function Navbar ({children}){
  return (
    <>
      <navbar className="sticky top-0 flex justify-center bg-blue-500">
        <div className="flex justify-between p-1 w-5/6">
          <div className="flex">
              <h1 className="font-mono font-bold italic">NextJS_Blog</h1>
          </div>
          <div className="flex">
            <ul className="flex">
                <li className="px-2">Home</li>
                <li className="px-2">About</li>
                <li className="px-2">Contact</li>
            </ul>
           </div>
        </div>
      </navbar>
    </>
  )
}

export default Navbar
