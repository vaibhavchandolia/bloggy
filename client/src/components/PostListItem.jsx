import { Link } from "react-router-dom"
import Img from "./Image"

const PostListItem = () => {
  return (
    <div className='flex flex-col xl:flex-row gap-8'>
        {/* Image */}
        <div className="md:hidden xl:block xl:w-1/3">
            <Img src="postImg.jpeg" className="rounded-2xl object-cover" w="735" />
        </div>
        {/* details  */}
        <div className="flex flex-col gap-4 xl:w-2/3">
            <Link to="/testpost" className="text-4xl font-semibold" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quam tenetur optio animi.
            </Link>
            <div className="flex items-center gap-2 text-gray text-sm">
                <span>Written by</span>
                <Link className="text-blue-800">John Doe</Link>
                <span>on</span>
                <Link className="text-blue-800">Web Design</Link>
                <span>2 days ago</span>
            </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Quo ad debitis nihil aut, asperiores, harum mollitia accusantium natus numquam saepe 
                vitae odit pariatur doloribus odio cum molestias vero, ipsa iste.
            </p>
            <Link to="/test" className="underline text-blue-800 text-sm">Read More</Link>
        </div>
    </div>
  )
}

export default PostListItem