import { Link } from "react-router-dom";
function Navbar(props) {
  return (
    <nav className="width-full mt-6 flex justify-between px-5 sm:mt-8 md:px-10 lg:px-20">
      <div className="flex">
        <img src="./MaterialSymbolsLibraryBooksRounded.svg" alt="site logo" />
        <Link to="/" className="mt-0.5 text-gunMetal">
          WOCABY
        </Link>
      </div>
      <div className="flex gap-x-6">
        {props.isUserLogin ? (
          <p className="mt-0.5 text-gunMetal transition-colors hover:text-rhythm">
            Log out
          </p>
        ) : (
          <>
            <Link
              to="/auth?page=sign-in"
              className="mt-0.5 text-gunMetal transition-colors hover:text-rhythm sm:hidden"
            >
              Sign in/up
            </Link>
            <Link
              to="/auth?page=sign-in"
              className="mt-0.5 hidden text-gunMetal transition-colors hover:text-rhythm sm:block"
            >
              Sign in
            </Link>
            <Link
              to="/auth"
              className="mt-0.5 hidden text-gunMetal transition-colors hover:text-rhythm sm:block"
            >
              Sign up
            </Link>
          </>
        )}
        <a href="https://github.com/sourena-kazemi/Wocaby" target="_blank">
          <img
            src="./icons8-github.svg"
            alt="github logo"
            className="transition-transform hover:scale-105"
          />
        </a>
      </div>
    </nav>
  );
}
export default Navbar;
