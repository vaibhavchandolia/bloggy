import { Link } from "react-router-dom"
import Search from "../components/Search"

const SideMenu = () => {
  return (
    <div className='px-4 h-max sticky top-8'>
      <h1 className="mb-4 text-sm font-medium">Search</h1>
      <Search />
      <h1 className="mt-8 mb-4 text-sm font-medium">Filter</h1>
      <div className="flex flex-col gap-2 text-sm">
        <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
          <input type="radio" name="sort" values="newest" 
            className=" appearance-none w-4 h-4 border-[1.5px] bg-white
            border-blue-800 cursor-pointer rounded-sm checked:bg-blue-800" />
            Newest
        </label>
        <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
          <input type="radio" name="sort" values="newest" 
            className=" appearance-none w-4 h-4 border-[1.5px] bg-white 
            border-blue-800 cursor-pointer rounded-sm checked:bg-blue-800" />
            Most Popular
        </label>
        <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
          <input type="radio" name="sort" values="newest" 
            className=" appearance-none w-4 h-4 border-[1.5px] bg-white
            border-blue-800 cursor-pointer rounded-sm checked:bg-blue-800" />
            Trending
        </label>
        <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
          <input type="radio" name="sort" values="newest" 
            className=" appearance-none w-4 h-4 border-[1.5px] bg-white
            border-blue-800 cursor-pointer rounded-sm checked:bg-blue-800" />
            Oldest
        </label>
      </div>
      <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
      <div className="flex flex-col gap-4 text-sm">
        <Link className="underline" to="/posts">All</Link>
        <Link className="underline" to="/posts?cat=web-design">Web Design</Link>
        <Link className="underline" to="/posts?cat=development">Development</Link>
        <Link className="underline" to="/posts?cat=databases">Database</Link>
        <Link className="underline" to="/posts?cat=seo">Search Engines</Link>
        <Link className="underline" to="/posts?cat=marketing">Marketing</Link>
        <Link className="underline" to="/posts">Search Engine</Link>
      </div>
    </div>
  )
}

export default SideMenu