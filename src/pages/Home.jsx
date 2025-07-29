import { Link } from "react-router-dom";
import { Auth } from "../config/firebase.js";

function Home() {
  return (
    <header className="ml-5 flex flex-col md:ml-10 lg:ml-20">
      <div className="mt-16 flex items-center justify-between md:mt-24 lg:mt-32 xl:mt-40">
        <div className="flex max-w-[30rem] flex-col xl:max-w-2xl">
          <h1 className="text-4xl xl:text-5xl">
            Improve your
            <span className="text-orange"> Vocabulary</span>, for Free and in
            <span className="underline"> No Time</span>
          </h1>
          <h2 className="mr-5 mt-8 text-rhythm sm:mr-0">
            Wocaby is free and easy to use.By just a minute a day,improve your
            vocabulary skills.
          </h2>
          <div className="ml-8 flex flex-col sm:flex-row sm:gap-x-10">
            <Link
              to="/auth"
              className="button mt-16 w-fit -translate-x-1/4 self-center border-4 border-darkOrange px-4 py-1 text-lg transition-shadow"
            >
              Start Now
            </Link>
            <a
              href="https://github.com/sourena-kazemi/Wocaby"
              target="_blank"
              className="mt-10 -translate-x-6 self-center text-lg text-orange underline sm:mt-16"
            >
              We are open source
            </a>
          </div>
        </div>
        <img
          src="./undraw_online_test_re_kyfx.svg"
          alt="man taking a online test"
          className="mr-5 hidden w-1/4 sm:block md:mr-10 lg:mr-20"
        />
      </div>
    </header>
  );
}
export default Home;
