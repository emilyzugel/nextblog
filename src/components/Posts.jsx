import Image from "next/image";

function Posts ({children}){
  return (
    <div className="bg-white flex justify-center">

          <div className="p-8 w-full max-w-7xl">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
             
           <li className="card">
                <article className="card-article">
                  <h3 className="card-title">Post 2</h3>
                   <div className="relative w-full h-40">
                     <Image src="/image-preview.png" fill
                       alt="nextjs image"
                       className="object-contain"
                      />
                   </div>
                  <p className="card-p">This is the paragraph</p>
                  <a href="" className="card-seemore">See more</a>
                </article>
            </li>

              <li className="card">
                <article className="card-article">
                  <h3 className="card-title">Post 2</h3>
                   <div className="relative w-full h-40">
                     <Image src="/image-preview.png" fill
                       alt="nextjs image"
                       className="object-contain"
                      />
                   </div>
                  <p className="card-p">This is the paragraph</p>
                  <a href="" className="card-seemore">See more</a>
                </article>
            </li>

              <li className="card">
                <article className="card-article">
                  <h3 className="card-title">Post 3</h3>
                   <div className="relative w-full h-40">
                     <Image src="/image-preview.png" fill
                       alt="nextjs image"
                       className="object-contain"
                      />
                   </div>
                  <p className="card-p">This is the paragraph</p>
                  <a href="" className="card-seemore">See more</a>
                </article>
            </li>

              <li className="card">
                <article className="card-article">
                  <h3 className="card-title">Post 3</h3>
                   <div className="relative w-full h-40">
                     <Image src="/image-preview.png" fill
                       alt="nextjs image"
                       className="object-contain"
                      />
                   </div>
                  <p className="card-p">This is the paragraph</p>
                  <a href="" className="card-seemore">See more</a>
                </article>
            </li>
          </ul>
      </div>
    </div>
  )
}

export default Posts
