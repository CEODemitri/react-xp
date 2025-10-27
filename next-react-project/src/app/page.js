import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-4xl font-bold text-blue-600">
        More{" "}
        <span className="underline italic uppercase text-blue-300 text-shadow-lg shadow-red-500/50">
          React
        </span>{" "}
        on the Way
      </h1>
      <Image
        src="https://github.com/ceodemitri.png"
        alt="Hehe"
        width={200}
        height={200}
      />
    </div>
  );
}
