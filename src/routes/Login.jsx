import { SignIn } from "@clerk/clerk-react"

const Login = () => {
  return (
    <div className='flex items-center justify-center h-[calc(100vh-80px)] '>
      <SignIn />
    </div>
  )
}

export default Login