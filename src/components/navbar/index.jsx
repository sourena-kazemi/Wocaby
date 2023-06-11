function Navbar(props){
    return (
        <nav className="flex width-full px-5 justify-between mt-6 md:px-10 lg:px-20">
            <div className="flex">
                <img src="MaterialSymbolsLibraryBooksRounded.svg" alt="site logo"/>
                <p className="text-gunMetal mt-0.5">WOCABY</p>
            </div>
            <div className="flex gap-x-3">
                {props.isUserLogin ?
                <p className="text-gunMetal mt-0.5 hover:text-rhythm transition-colors">Log out</p> : 
                <p className="text-gunMetal mt-0.5 hover:text-rhythm transition-colors hidden sm:block">Sign in / Sign up</p>
                }
                <img src="icons8-github.svg" alt="github logo" className="hover:scale-105 transition-transform"/>
            </div>
        </nav>
    )
}
export default Navbar