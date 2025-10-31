// the best palce to fetch data is inside a server component because runs faster
async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    // next.js specific option to cache data fetching
    // revalidate: 60, // revalidate every 60 seconds
    cache: "no-store", // disable caching
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Trees() {
  const data = await getData();

  return (
    <div className="flex min-h-screen items-center justify-center bg-blue-50 font-sans dark:bg-blue-900">
      <h1 className="text-4xl font-bold text-green-600">
        The{" "}
        <span className="underline italic uppercase text-green-300 text-shadow-lg shadow-green-500/50">
          Trees
        </span>{" "}
        Page
      </h1>
      <div>
        {data.map((title) => (
          <p
            key={title.id}
            className="mt-8 text-lg text-blue-800 dark:text-blue-200"
          >
            {title.title}
          </p>
        ))}
      </div>
    </div>
  );
}
