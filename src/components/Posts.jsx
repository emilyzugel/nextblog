function Posts ({children}){
  return (
    <div className="bg-white flex justify-center min-h-screen">
          <div className="p-8 w-full max-w-7xl">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <li className="flex bg-gray-400 p-4 items-center justify-center">
                <h3>Post 1</h3>
            </li>
              <li className="flex bg-gray-400 p-4 items-center justify-center">
                <h3>Post 2</h3>
            </li>
            <li className="flex bg-gray-400 p-4 items-center justify-center">
                <h3>Post 3</h3>
            </li>
              <li className="flex bg-gray-400 p-4 items-center justify-center">
                <h3>Post 4</h3>
            </li>
          </ul>
      </div>
    </div>
  )
}

export default Posts
