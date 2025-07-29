import { useState } from "react";
import WordItem from "./WordItem.jsx";
function WordList() {
  const [progressVisibility, setProgressVisibility] = useState("hidden");
  const toggleProgressVisibility = () => {
    setProgressVisibility(
      progressVisibility === "hidden" ? "visible" : "hidden"
    );
  };
  return (
    <div className="mx-auto mt-5 flex max-w-md flex-col gap-y-5 text-center md:mt-16 lg:max-w-4xl lg:flex-row lg:gap-x-5">
      <div className="ml-5 mr-5 flex flex-col">
        <h1 className="mb-5 text-left text-2xl lg:mb-10">
          See all the <span className="text-orange underline">101</span> words
          you are practicing And your progress in learning each.
        </h1>
        <div className="mt-10 flex flex-col items-center gap-y-5 lg:flex-row lg:items-baseline lg:justify-between lg:gap-0">
          <button
            className="flex gap-x-1 text-lg text-orange underline"
            onClick={() => toggleProgressVisibility()}
          >
            <img
              src={`${
                progressVisibility === "hidden"
                  ? "./MaterialSymbolsVisibilityOutlineRounded.svg"
                  : "./MaterialSymbolsVisibilityOffOutlineRounded.svg"
              }`}
              alt="show icon"
            />
            Show Progress
          </button>
          <button className="w-fit border-4 border-darkOrange px-3 py-1 text-lg text-darkOrange underline">
            Reset Password
          </button>
        </div>
      </div>
      <div className="space-y-4 px-2">
        <WordItem word="Pagination" progress={52} state={progressVisibility} />
        <WordItem word="Pagination" progress={72} state={progressVisibility} />
        <WordItem word="Pagination" progress={72} state={progressVisibility} />
        <WordItem word="Pagination" progress={72} state={progressVisibility} />
        <WordItem word="Pagination" progress={72} state={progressVisibility} />
      </div>
    </div>
  );
}
export default WordList;
