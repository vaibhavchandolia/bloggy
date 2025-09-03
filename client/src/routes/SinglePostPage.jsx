import { Link, Links } from "react-router-dom"
import Img from "../components/Image"
import PostMenuActions from "../components/PostMenuActions"
import Search from "../components/Search"
import Comments from "../components/Comments"

const SinglePostPage = () => {
  return (
    <div className='flex flex-col gap-8'>
      {/* detail  */}
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut suscipit enim</h1>
          <div className="flex  items-center gap-2 text-gray-400 text-sm">
            <span>written by</span>
            <Link className=" text-blue-800">John Doe</Link>
            <span>on</span>
            <Link className=" text-blue-800">Web Design</Link>
            <span>2 days ago</span>
          </div>
          <p className=" text-gray-500 font-medium">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Voluptas provident culpa consequatur ipsam reprehenderit mollitia rerum soluta 
            repellat atque dolorem in nisi tempore recusandae cum ea, fugit neque fuga dolore!
          </p>
        </div>
        <div className="hidden lg:block w-2/5">
          <Img src="postImg.jpeg" w="600" className="rounded-2xl" />
        </div>
      </div>
      {/* content  */}
      <div className="flex flex-col md:flex-row gap-12">
        {/* text  */}
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Laudantium necessitatibus dolores, quia saepe dolorem id voluptas architecto minus maiores maxime deleniti 
            nihil ab natus modi pariatur asperiores, porro obcaecati eius.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Laudantium necessitatibus dolores, quia saepe dolorem id voluptas architecto minus maiores maxime deleniti 
            nihil ab natus modi pariatur asperiores, porro obcaecati eius.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Laudantium necessitatibus dolores, quia saepe dolorem id voluptas architecto minus maiores maxime deleniti 
            nihil ab natus modi pariatur asperiores, porro obcaecati eius.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Laudantium necessitatibus dolores, quia saepe dolorem id voluptas architecto minus maiores maxime deleniti 
            nihil ab natus modi pariatur asperiores, porro obcaecati eius.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Laudantium necessitatibus dolores, quia saepe dolorem id voluptas architecto minus maiores maxime deleniti 
            nihil ab natus modi pariatur asperiores, porro obcaecati eius.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Laudantium necessitatibus dolores, quia saepe dolorem id voluptas architecto minus maiores maxime deleniti 
            nihil ab natus modi pariatur asperiores, porro obcaecati eius.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Laudantium necessitatibus dolores, quia saepe dolorem id voluptas architecto minus maiores maxime deleniti 
            nihil ab natus modi pariatur asperiores, porro obcaecati eius.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Laudantium necessitatibus dolores, quia saepe dolorem id voluptas architecto minus maiores maxime deleniti 
            nihil ab natus modi pariatur asperiores, porro obcaecati eius.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Laudantium necessitatibus dolores, quia saepe dolorem id voluptas architecto minus maiores maxime deleniti 
            nihil ab natus modi pariatur asperiores, porro obcaecati eius.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Laudantium necessitatibus dolores, quia saepe dolorem id voluptas architecto minus maiores maxime deleniti 
            nihil ab natus modi pariatur asperiores, porro obcaecati eius.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Laudantium necessitatibus dolores, quia saepe dolorem id voluptas architecto minus maiores maxime deleniti 
            nihil ab natus modi pariatur asperiores, porro obcaecati eius.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Laudantium necessitatibus dolores, quia saepe dolorem id voluptas architecto minus maiores maxime deleniti 
            nihil ab natus modi pariatur asperiores, porro obcaecati eius.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Laudantium necessitatibus dolores, quia saepe dolorem id voluptas architecto minus maiores maxime deleniti 
            nihil ab natus modi pariatur asperiores, porro obcaecati eius.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Laudantium necessitatibus dolores, quia saepe dolorem id voluptas architecto minus maiores maxime deleniti 
            nihil ab natus modi pariatur asperiores, porro obcaecati eius.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Laudantium necessitatibus dolores, quia saepe dolorem id voluptas architecto minus maiores maxime deleniti 
            nihil ab natus modi pariatur asperiores, porro obcaecati eius.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Laudantium necessitatibus dolores, quia saepe dolorem id voluptas architecto minus maiores maxime deleniti 
            nihil ab natus modi pariatur asperiores, porro obcaecati eius.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Laudantium necessitatibus dolores, quia saepe dolorem id voluptas architecto minus maiores maxime deleniti 
            nihil ab natus modi pariatur asperiores, porro obcaecati eius.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Laudantium necessitatibus dolores, quia saepe dolorem id voluptas architecto minus maiores maxime deleniti 
            nihil ab natus modi pariatur asperiores, porro obcaecati eius.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Laudantium necessitatibus dolores, quia saepe dolorem id voluptas architecto minus maiores maxime deleniti 
            nihil ab natus modi pariatur asperiores, porro obcaecati eius.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Laudantium necessitatibus dolores, quia saepe dolorem id voluptas architecto minus maiores maxime deleniti 
            nihil ab natus modi pariatur asperiores, porro obcaecati eius.
          </p>
        </div>
        {/* menu  */}
        <div className="px-4 h-max sticky top-8">
          <h1 className="mb-4 text-sm font-medium">Author</h1>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-8">
              <Img src="userImg.jpeg"
                className="w-12 h-12 rounded-full object-cover"
                w="48"
                h="48"
              />
              <Link className="text-blue-800">John Doe</Link>
            </div>
            <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur</p>
            <div className="flex gap-2">
              <Link>
                <Img src="facebook.svg" />
              </Link>
              <Link>
                <Img src="instagram.svg" />
              </Link>
            </div>
          </div>
          <PostMenuActions />
          <h1 className="mt-8 mb-4 text-sm font-medium">Cetegories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link className="underline">All</Link>
            <Link className="underline" to="/">Web Design</Link>
            <Link className="underline" to="/">Development</Link>
            <Link className="underline" to="/">Databases</Link>
            <Link className="underline" to="/">Search Engine</Link>
            <Link className="underline" to="/">Marketing</Link>
          </div>
          <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
          <Search />
        </div>
      </div>
      <Comments />
    </div>
  )
}

export default SinglePostPage