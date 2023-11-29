"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faX } from "@fortawesome/free-solid-svg-icons";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function SearchForm() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch("");
    router.push(`/${search}/`);
  };
  const handleReset = () => {
    setSearch("");
  };

  return (
    <form
      className={`p-0 relative w-3/5 flex items-center  transition-border-radius duration-500 ease-in
         bg-secBg focus:bg-white shadow-xl focus-within:bg-white rounded-full group   
         ${search ? "bg-white" : "bg-secBg"} `}
      onSubmit={handleSubmit}
    >
      <div
        className="flex items-center justify-between
      basis-11/12 px-2 "
      >
        <input
          className="input text-base bg-transparent w-full h-full p-2 border-none focus:outline-none text-black placeholder:text-gray-600 "
          placeholder="Search for movie,tv shows, person....."
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {search && (
          <button
            className={`reset border-none bg-none text-black ${
              search ? "inline" : "hidden"
            } `}
            onClick={handleReset}
          >
            <FontAwesomeIcon icon={faX} />
          </button>
        )}
      </div>
      <button
        className={`p-2 px-5
       bg-secondary rounded-full h-full w-full basis-1/12 flex items-center justify-center disabled:text-gray-600 text-black `}
        disabled={search === ""}
      >
        <span>Search</span>
      </button>
    </form>
  );
}
