"use client";
import Image from "next/image";

export default function NameList({ id, name, capacity }) {
  const imageLoader = ({ src }) => {
    return `./rivers/${src}.jpeg`;
  };

  return (
    <div className="mb-4 p-4">
      <h2>{name}</h2>
      <p>{capacity}</p>
      <Image
        src={id}
        width={300}
        height={300}
        loader={imageLoader}
        alt={name}
      />
    </div>
  );
}
