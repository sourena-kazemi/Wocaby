function Error() {
    return (
        <div className="mt-20 flex flex-col items-center">
            <img
                src="undraw_questions_re_1fy7.svg"
                alt="man, woman and question mark"
                className="sm:max-w-xl lg:max-w-xl xl:max-w-2xl"
            />
            <h1 className="mb-8 mt-16 text-3xl">Page Not Found</h1>
            <button className="startButton border-4 border-darkOrange px-4 py-1 text-lg transition-shadow">
                Go Home
            </button>
        </div>
    )
}
export default Error
