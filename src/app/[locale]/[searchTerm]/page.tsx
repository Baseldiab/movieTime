import React from "react";
type props = {
  params: {
    searchTerm: string;
  };
};
export default function page({ params: { searchTerm } }: props) {
  return <h1 className="text-3xl text-center text-white">search term page is {searchTerm}</h1>;
}
