import { useState } from "react"
import Navbar from "./components/navbar"
function App() {

  return (
    <>
      <Navbar isUserLogin={false}></Navbar>
      <header className="ml-5 flex flex-col md:ml-10 lg:ml-20">
        <div className="flex justify-between mr-5 md:mr-10 items-end lg:mr-20">
          <h1 className="text-4xl mt-16 sm:w-1/2 md:mt-24 h-36 lg:mt-32 lg:h-40 xl:w-2/5">Improve your <span className="text-orange">Vocabulary</span>, for Free and in <span className="underline">No Time</span></h1>
          <img src="undraw_online_test_re_kyfx.svg" alt="man sitting inside the monitor" className="hidden sm:block w-48 lg:w-56"/>
        </div>
        <h2 className="text-rhythm mt-10 sm:w-1/2 lg:w-2/5 sm:mt-0">Wocaby is free and easy to use.By just a minute a day,improve your vocabulary skills.</h2>
        <div className="flex flex-col sm:flex-row sm:self-center sm:gap-x-10 lg:self-auto lg:ml-8">
          <button className="startButton border-darkOrange border-4 px-4 py-1 text-lg mt-16 w-fit self-center -translate-x-1/4 transition-shadow">Start Now</button>
          <a href="https://github.com/sourena-kazemi" className="text-orange underline mt-10 self-center -translate-x-6 sm:mt-16">We are open source</a>
        </div>
      </header>
      <footer className="text-rhythm ml-5 fixed bottom-0 mb-2"><span className="text-orange">@</span>Made by <a href="https://github.com/sourena-kazemi" className="underline hover:text-orange">Sourena Kazemi</a></footer>
    </>
  )
}

export default App
