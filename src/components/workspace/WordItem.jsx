import { useState, useEffect } from "react"
function WordItem({ word, progress, state }) {
  const [textColor, setTextColor] = useState("text-rhythm")
  useEffect(() => {
    setTextColor(state === "hidden" ? "text-rhythm" : "text-gunMetal")
  }, [state])
  return (
    <div className="relative flex w-full items-center justify-between border-b-2 border-b-gunMetal px-10 lg:gap-x-32">
      <div
        className=" absolute left-0 top-0 -z-10 h-full bg-orange"
        style={{
          width: `${progress}%`,
          display: `${state === "hidden" ? "none" : "block"}`,
        }}
      ></div>
      <p className={`${textColor}`}>
        <span className={`pr-1 text-4xl leading-6 ${textColor}`}>.</span>
        {word}
      </p>
      <img src="MaterialSymbolsDelete.svg" alt="trash" className=" w-6" />
    </div>
  )
}
export default WordItem
