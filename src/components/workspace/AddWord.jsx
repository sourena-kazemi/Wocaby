function AddWord() {
  return (
    <div className="mx-auto mt-5 flex max-w-md flex-col gap-y-5 text-center md:mt-16 lg:max-w-4xl lg:flex-row lg:gap-x-5">
      <div className="ml-5 mr-5 flex flex-col">
        <h1 className="mb-5 text-left text-2xl lg:mb-10">
          Add the word you want to learn And its meaning.
        </h1>
        <input
          type="text"
          placeholder="Write the word"
          className="rounded-lg border border-gunMetal bg-cornSilk px-3 py-2 placeholder:text-rhythm focus-within:border-orange"
        />
        <div className="mt-10 hidden items-baseline justify-between lg:flex">
          <button className="w-fit border-4 border-darkOrange px-10 py-1 text-xl">
            Add
          </button>
          <button className="text-lg text-orange underline">
            Give me the meaning
          </button>
        </div>
      </div>
      <textarea
        placeholder="Write the meaning of the word"
        className="mb-10 ml-5 mr-5 resize-none rounded-lg border border-gunMetal bg-cornSilk px-3 py-2 placeholder:text-rhythm focus-within:border-orange lg:m-0 lg:w-3/4"
      />
      <div className="flex flex-col items-center gap-y-5 lg:hidden">
        <button className="w-fit border-4 border-darkOrange px-10 py-1 text-xl">
          Add
        </button>
        <button className="text-orange underline ">Give me the meaning</button>
      </div>
    </div>
  )
}
export default AddWord
