export default function River() {
  // server action handleSubmit
  async function handleSubmit(formData) {
    "use server";
    const searchQuery = formData.get("search");
    console.log("Searching for:", searchQuery);
    return searchQuery;
  }
  return (
    <main className="max-w-md mx-auto p-6 shadow-md">
      <h1 className="text-4xl font-bold text-blue-600 text-center mb-6">
        The{" "}
        <span className="underline italic uppercase text-blue-300 text-shadow-lg shadow-red-500/50">
          River
        </span>{" "}
        Page
      </h1>

      {/* using the action as an attribute */}
      <form className="space-y-4" action={handleSubmit}>
        <div className="flex gap-4">
          <label htmlFor="search" className="block mb-2 font-medium">
            Search Rivers:
          </label>
          <input
            type="text"
            id="search"
            name="search"
            className="border border-gray-300 rounded-md p-2 w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter river name"
          />
        </div>
        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Search
        </button>
      </form>
    </main>
  );
}
