import { Auth } from "../../config/firebase.js"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import { Link } from "react-router-dom"
function SignUpForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [repeatedPassword, setRepeatedPassword] = useState("")
  const handleClick = () => {
    if (password === repeatedPassword) {
      signUp()
    }
    const signUp = async () => {
      await createUserWithEmailAndPassword(auth, email, password)
    }
  }

  return (
    <div className="mx-auto flex flex-col gap-y-3 sm:w-80 md:mx-0 lg:w-96 lg:text-lg">
      <h1 className="mb-6 text-center text-2xl md:text-start lg:mb-14 lg:text-3xl">
        Welcome to WOCABY !
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
      <input
        type="password"
        id="password"
        placeholder="Password again"
        onChange={(e) => setRepeatedPassword(e.target.value)}
        className="rounded-lg border border-gunMetal bg-cornSilk px-4 py-3 placeholder:text-rhythm"
      />
      <div className="mt-6 space-y-4 self-center text-center sm:w-80 md:flex md:items-baseline md:justify-between lg:mt-16 lg:w-96">
        <button
          onClick={handleClick}
          lassName="py-1px border-4 border-darkOrange px-8 py-px text-lg"
        >
          Sign up
        </button>
        <p>
          Already a User?
          <Link to="/auth?page=sign-in" className="text-orange underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}
export default SignUpForm
