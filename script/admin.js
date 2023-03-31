// For admin Page
// Change the value in the object based on the title, from a inputfield
const movies = [
    {
      title: "The Shawshank Redemption",
      coverimage:
        "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
      cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
      release_year: 1994,
      genre: "Drama",
    },
    {
      title: "The Godfather",
      coverimage:
        "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
      cast: ["Marlon Brando", "Al Pacino", "James Caan"],
      release_year: 1972,
      genre: "Crime",
    },
    {
      title: "The Dark Knight",
      coverimage:
        "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
      cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
      release_year: 2008,
      genre: "Action",
    },
    {
      title: "Pulp Fiction",
      coverimage:
        "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
      cast: ["John Travolta", "Samuel L. Jackson", "Uma Thurman"],
      release_year: 1994,
      genre: "Crime",
    },
    {
      title: "Forrest Gump",
      coverimage:
        "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
      cast: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
      release_year: 1994,
      genre: "Drama",
    },
    {
      title: "The Lord of the Rings: The Return of the King",
      coverimage:
        "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
      cast: ["Elijah Wood", "Viggo Mortensen", "Ian McKellen"],
      release_year: 2003,
      genre: "Fantasy",
    },
    {
      title: "Inception",
      coverimage:
        "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
      cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
      release_year: 2010,
      genre: "Action",
    },
    {
      title: "Star Wars: Episode IV - A New Hope",
      coverimage:
        "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg",
      cast: ["Mark Hamill", "Harrison Ford", "Carrie Fisher"],
      release_year: 1977,
      genre: "Sci-Fi",
    },
    {
      title: "Jurassic Park",
      coverimage:
        "https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_SX300.jpg",
      cast: ["Sam Neill", "Laura Dern", "Jeff Goldblum"],
      release_year: 1993,
      genre: "Sci-Fi",
    },
    {
      title: "Titanic",
      coverimage:
        "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
      cast: ["Leonardo DiCaprio", "Kate Winslet", "Billy Zane"],
      release_year: 1997,
      genre: "Romance",
    },
  ];

const selectedTitle = document.querySelector("#selectedTitle");
const changeTitle = document.querySelector("#titleInput");
const changeCoverImage = document.querySelector("#coverImageInput");
const changeCast = document.querySelector("#castInput");
const changeReleaseYear = document.querySelector("#releaseYearInput");
const changeGenre = document.querySelector("#genreInput");
const updateButton = document.querySelector("#submitButton");

updateButton.addEventListener("click", function (event) {
  event.preventDefault();
  const titleToBeUpdated = selectedTitle.value;
  const newTitle = changeTitle.value;
  const newCoverImage = changeCoverImage.value;
  const newCast = changeCast.value;
  const newReleaseYear = changeReleaseYear.value;
  const newGenre = changeGenre.value;
  
  const movieIndex = movies.findIndex(
    (movie) => movie.title === titleToBeUpdated
  );

  if (movieIndex === -1) {
    alert(
      `Fant ingen filmer med tittelen ${titleToBeUpdated}, prøv igjen eller legg til filmen i skjemaet under`
    );
    return;
  }
  movies[movieIndex].title = newTitle;
  movies[movieIndex].coverimage = newCoverImage;
  movies[movieIndex].cast = newCast;
  movies[movieIndex].release_year = newReleaseYear;
  movies[movieIndex].genre = newGenre;
  alert(`
Filmen ${titleToBeUpdated} har blitt oppdatert. 
Ny tittel er: ${newTitle}
Nytt cover image er: ${newCoverImage}
Ny cast er: ${newCast}
Nytt release year er: ${newReleaseYear}
Nytt genre er: ${newGenre}
`);
});