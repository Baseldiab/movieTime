export default async function getTopRated(pageNumber: string) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MDg5Nzg3NDYxZDUwMzliZDdkNWExMmM4NWRiZWRmZCIsInN1YiI6IjY1NjcxZWE5YThiMmNhMDEwYmMxYWU5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v7agPHqzRiOGuOA4K4tYGPiKkClCtLeok1rXFJUwpG0",
    },
  };

  const response = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${pageNumber}`,
    options
  );

  return response.json();
}
