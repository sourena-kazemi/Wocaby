import { useState, useEffect } from "react"
function Navbar({ pageUpdater }) {
  const [page, setPage] = useState(0)
  const [pagesName, setPagesName] = useState([
    "Add Word",
    "My Words",
    "Take a Test",
  ])
  useEffect(() => {
    pageUpdater(page)
  }, [page])
  const movePage = (direction) => {
    let index = page + direction
    let newPageIndex = index <= 2 && index >= 0 ? index : index > 2 ? 0 : 2
    setPage(newPageIndex)
  }
  return (
    <nav className="mt-10 flex justify-center gap-x-5">
      <img
        src="MaterialSymbolsArrowCircleRightOutline.svg"
        alt="left arrow"
        className="rotate-180 md:hidden"
        onClick={() => movePage(-1)}
      />
      <p className="text-xl text-orange underline md:hidden">
        {pagesName[page]}
      </p>
      <div className="mt-10 hidden w-1/2 justify-around md:flex">
        <p
          className={`transition-colors hover:scale-105 active:scale-95 ${
            page === 0 ? "text-orange underline" : ""
          }`}
          onClick={() => setPage(0)}
        >
          {pagesName[0]}
        </p>
        <p
          className={`transition-colors hover:scale-105 active:scale-95 ${
            page === 1 ? "text-orange underline" : ""
          }`}
          onClick={() => setPage(1)}
        >
          {pagesName[1]}
        </p>
        <p
          className={`transition-colors hover:scale-105 active:scale-95 ${
            page === 2 ? "text-orange underline" : ""
          }`}
          onClick={() => setPage(2)}
        >
          {pagesName[2]}
        </p>
      </div>
      <img
        src="MaterialSymbolsArrowCircleRightOutline.svg"
        alt="right arrow"
        className="md:hidden"
        onClick={() => movePage(1)}
      />
    </nav>
  )
}
export default Navbar
