import NameList from "./NameList";

async function getData() {
  const res = await fetch("https://snowtooth-hotel-api.fly.dev");
  return res.json();
}

export default async function History() {
  const data = await getData();
  return (
    <main>
      <h1 className="text-4xl font-bold text-yellow-600">
        The{" "}
        <span className="underline italic uppercase text-yellow-300 text-shadow-lg shadow-yellow-500/50">
          History
        </span>{" "}
        Page
      </h1>
      {/* <div>{JSON.stringify(data)}</div> */}
      <article>
        {data.map((name) => (
          <NameList
            key={name.id}
            id={name.id}
            name={name.name}
            capacity={name.capacity}
          />
        ))}
      </article>
    </main>
  );
}
