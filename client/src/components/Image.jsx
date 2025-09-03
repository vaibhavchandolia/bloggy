import { Image } from "@imagekit/react"

const Img = ({className, src, w, h, alt}) => {
  return (
    <Image 
        urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT} 
        src={src} 
        className={className} 
        loading="lazy"
        lqip={{active: true, quality: 20}}
        alt={alt}
        width={w}
        height={h}
        transformation={[
          {
            width:w,
            height:h,
          }
        ]} 
    />
  )
}

export default Img