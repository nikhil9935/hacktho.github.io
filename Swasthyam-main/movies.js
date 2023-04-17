const getMovies = () => {
   const inputField = document.getElementById("")
   const inputValue = inputField.value;

   toggleSpinner("block")
   toggleSearchResult("none")

   fetch(`https://api.themoviedb.org/3/movie/550?api_key=bdd2207952896b897678b719f44572a3`)
      .then(res => res.json())
      .then(data => {
         displayBooks(data)
      })
      .catch((err) => {
         document.getElementById("notFound").style.display = "block"; // api error handling
         console.log(err);
      })
}

