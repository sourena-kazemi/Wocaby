import { useState } from "react"
import WorkSpaceNavbar from "../components/workspace/Navbar.jsx"
import AddWordPage from "../components/workspace/AddWord.jsx"
import WordListPage from "../components/workspace/WordList.jsx"
import TestPage from "../components/workspace/Test.jsx"
function WorkSpace() {
  const [page, setPage] = useState(0)
  const updatePage = (page) => {
    setPage(page)
  }
  return (
    <div>
      <WorkSpaceNavbar pageUpdater={updatePage} />
      {page === 0 ? (
        <AddWordPage />
      ) : page === 1 ? (
        <WordListPage />
      ) : (
        <TestPage />
      )}
    </div>
  )
}
export default WorkSpace
