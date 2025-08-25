import Img from "./Image"

const FeaturedPosts = () => {
  return (
    <div className='mt-8 flex flex-col lg:flex-row gap-8'>
        {/* firstpost */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4 ">
            {/* Image */}
            <Img src="featured1.jpeg" classname="rounded-3xl object-cover" />
            {/* details */}
            {/* title */}
        </div>
        {/* other posts */}
        <div className=""></div>
    </div>
  )
}

export default FeaturedPosts