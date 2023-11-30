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
      className={`nav__form md:my-0 my-3 p-0 relative w-full flex items-center  transition-border-radius duration-500 ease-in
         bg-[#ffffff14] focus:bg-gray-200 shadow-xl focus-within:bg-gray-200 rounded-full group   
         ${search ? "bg-gray-200" : "bg-[#ffffff14]"} `}
      onSubmit={handleSubmit}
    >
      <div
        className="flex items-center justify-between
      basis-11/12 px-2 "
      >
        <input
          className="nav__input input md:text-base text-sm  bg-transparent w-full h-full p-2 border-none focus:outline-none text-black placeholder:text-gray-500 placeholder:font-semibold group-focus-within:placeholder:text-gray-600 "
          placeholder="Search for movie,tv shows, person....."
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {search && (
          <button
            className={`nav__reset border-none bg-none text-black ${
              search ? "inline" : "hidden"
            } `}
            onClick={handleReset}
          >
            <FontAwesomeIcon icon={faX} />
          </button>
        )}
      </div>
      <button
        className={`nav__search p-2 md:px-5 px-3 md:text-xl text-sm
       bg-primary hover:bg-blue-700 rounded-full h-full w-full basis-1/12 flex items-center justify-center disabled:text-gray-200 text-white `}
        disabled={search === ""}
      >
        <span>Search</span>
      </button>
    </form>
  );
}
