import { Link } from "react-router-dom"

const Homepage = () => {
  return (
    <div className='mt-4 flex flex-col gap-4'>
      {/* BREADCRUMB */}
      <div className="flex gap-4">
        <Link to="/" />
        <span className="">•</span>
        <span className="">Blogs and Articles</span>
        <span className="">Title</span>
      </div>
    </div>
  )
}

export default Homepage