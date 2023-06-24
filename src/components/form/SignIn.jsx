import { signInWithEmailAndPassword } from "firebase/auth"
import { Auth } from "../../config/firebase.js"
import { useState } from "react"
import { Link } from "react-router-dom"
function SignInForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const handleClick = async () => {
    try {
      await signInWithEmailAndPassword(Auth, email, password)
      console.log(Auth)
    } catch (err) {
      setError(err.message)
    }
  }
  return (
    <div className="mx-auto flex flex-col gap-y-3 sm:w-80 md:mx-0 lg:w-96 lg:text-lg">
      <h1 className="mb-10 text-center text-4xl md:text-start lg:mb-16 lg:text-5xl">
        Welcome Back !
      </h1>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
        className="mb-2 rounded-lg border border-gunMetal bg-cornSilk px-4 py-3 placeholder:text-rhythm    "
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
        className="rounded-lg border border-gunMetal bg-cornSilk px-4 py-3 placeholder:text-rhythm"
      />
      <p className=" mt-2 text-darkOrange">
        {error !== "" ? `* ${error}` : null}
      </p>
      <div className="mt-8 space-y-4 self-center text-center sm:w-80 md:flex md:items-baseline md:justify-between lg:mt-20 lg:w-96">
        <button
          className="py-1px border-4 border-darkOrange px-8 py-px text-lg"
          onClick={handleClick}
        >
          Sign in
        </button>
        <p>
          New User?
          <Link to="/auth" className="text-orange underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}
export default SignInForm
