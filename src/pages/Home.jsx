function Home(){
    return (
    <header className="ml-5 flex flex-col md:ml-10 lg:ml-20">
        <div className="flex mt-16 md:mt-24 lg:mt-32 justify-between xl:mt-40 items-center">
            <div className="flex flex-col max-w-[30rem] xl:max-w-2xl">
                <h1 className="text-4xl xl:text-5xl">Improve your <span className="text-orange">Vocabulary</span>, for Free and in <span className="underline">No Time</span></h1>
                <h2 className="text-rhythm mt-8 mr-5 sm:mr-0">Wocaby is free and easy to use.By just a minute a day,improve your vocabulary skills.</h2>
                <div className="flex flex-col sm:flex-row ml-8 sm:gap-x-10">
                    <button className="startButton border-darkOrange border-4 px-4 py-1 text-lg mt-16 w-fit self-center -translate-x-1/4 transition-shadow">Start Now</button>
                    <a href="https://github.com/sourena-kazemi" className="text-orange underline mt-10 self-center -translate-x-6 sm:mt-16">We are open source</a>
                </div>  
            </div>
            <img src="undraw_online_test_re_kyfx.svg" alt="man taking a online test" className="hidden sm:block w-1/4 mr-5 md:mr-10 lg:mr-20"/>
        </div>
    </header>
    )
}
export default Home