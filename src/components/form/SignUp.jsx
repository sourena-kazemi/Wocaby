function SignUpForm() {
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
                className="mb-2 rounded-lg border border-gunMetal bg-cornSilk px-4 py-3 placeholder:text-rhythm    "
            />
            <label htmlFor="password">Password</label>
            <input
                type="password"
                id="password"
                placeholder="Enter Password"
                className="rounded-lg border border-gunMetal bg-cornSilk px-4 py-3 placeholder:text-rhythm"
            />
            <input
                type="password"
                id="password"
                placeholder="Password again"
                className="rounded-lg border border-gunMetal bg-cornSilk px-4 py-3 placeholder:text-rhythm"
            />
            <div className="mt-6 space-y-4 self-center text-center sm:w-80 md:flex md:items-baseline md:justify-between lg:mt-16 lg:w-96">
                <button className="py-1px border-4 border-darkOrange px-8 py-px text-lg">
                    Sign up
                </button>
                <p>
                    Already a User?
                    <a href="#" className="text-orange underline">
                        Sign in
                    </a>
                </p>
            </div>
        </div>
    )
}
export default SignUpForm
