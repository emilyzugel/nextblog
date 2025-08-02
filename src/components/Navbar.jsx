function Navbar ({children}){
  return (
    <>
      <div className="bg-blue-400 flex">
        <div>
            Next Blog
        </div>
          <ul className="flex">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
          </ul>
      </div>
    </>
  )
}

export default Navbar
