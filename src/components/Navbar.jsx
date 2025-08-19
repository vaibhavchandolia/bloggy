import { useState } from "react"
import Img from "./Image"
import { Link } from "react-router-dom"
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react"

const Navbar = () => {

  const [Open, setOpen] = useState(false)
// Navbar
  return (
    <div className='w-full h-16 md:20 flex items-center justify-between'>
      {/* Logo */}
      <Link to='/' className='flex items-center gap-4 text-2xl font-blod'>
        <Img src="/logo.png" alt="lama logo" w={32} h={32} />
        <span>Bloggy</span>
      </Link>
      {/* Mobile Menu */}
      <div className="md:hidden">
        <div className="cursor-pointer text-4xl" onClick={() => setOpen((prev) => !prev)}>
          {Open? "X" : "="}
        </div>
        {/* Mobile Link List */}
        <div className={`w-full h-screen flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16 transition-all ease-in-out ${
          Open ? "-right-0" : "-right-[100%]"
          }`}>
          <Link to="/">Home</Link>
          <Link to="/">Trending</Link>
          <Link to="/">Most Popular</Link>
          <Link to="/">About</Link>
          <Link to="">
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">Login 👋</button>
          </Link>
        </div>

      </div>
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <Link to="/">Home</Link>
        <Link to="/">Trending</Link>
        <Link to="/">Most Popular</Link>
        <Link to="/">About</Link>
        <SignedOut>
          <Link to="/login">
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">Login 👋</button>
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  )
}

export default Navbar