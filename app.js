const search = document.getElementById('searchButton');

search.addEventListener('click', loadMovie);

function loadMovie(e) {
  e.preventDefault();
  let movieSearched = document.getElementById('searchInput').value.replace(' ', '+');
  let movieInfoSection = document.getElementById('movieInfo');
  movieInfoSection.classList.remove('d-none');

  let url = '';
  if (movieSearched !== '') {
    url = `http://www.omdbapi.com/?t=${movieSearched}&apikey=20f44b84`;
  }

  fetch(url)
    .then(res => res.json())
    .then(data => {
      if (data.Error) {
        movieInfoSection.innerHTML = `<h1>${data.Error} Please Try again!</h1>`;
      } else {
        let htmlTemplate = `
          <h3 class="display-4 mb-4">${data.Title}</h3>
          <div class="row">
            <div class="col-md-3">
              <img src="${data.Poster}" class="img-fluid">
            </div>
            <div class="col-md-9">
              <dl class="row">
                <dt class="col-sm-2">Year</dt>
                <dd class="col-sm-10">${data.Year}</dd>
      
                <dt class="col-sm-2">Genre</dt>
                <dd class="col-sm-10">${data.Genre}</dd>
      
                <dt class="col-sm-2">Director</dt>
                <dd class="col-sm-10">${data.Director}</dd>
  
                <dt class="col-sm-2">Actors</dt>
                <dd class="col-sm-10">${data.Actors}</dd>
      
                <dt class="col-sm-2">Plot</dt>
                <dd class="col-sm-10">${data.Plot}</dd>
      
                <dt class="col-sm-2">IMDB Rating</dt>
                <dd class="col-sm-10">${data.imdbRating}</dd>
              </dl>    
            </div>
          </div>
        `;

        movieInfoSection.innerHTML = htmlTemplate;
      }
    })
    .catch(error => {
      console.log(error)
      movieInfoSection.innerHTML = `<h1>Sorry, Something went wrong :( Please reload and try again!</h1>`;
    });

  // let xhr = new XMLHttpRequest();

  // xhr.open('GET', url, true);

  // xhr.onload = function() {
  //   if(this.status === 200) {
  // const movie = JSON.parse(this.responseText);

  // let htmlTemplate = `
  //   <h3 class="display-4 mb-4">${movie.Title}</h3>
  //   <div class="row">
  //     <div class="col-md-3">
  //       <img src="${movie.Poster}" class="img-fluid">
  //     </div>
  //     <div class="col-md-9">
  //       <dl class="row">
  //         <dt class="col-sm-2">Year</dt>
  //         <dd class="col-sm-10">${movie.Year}</dd>

  //         <dt class="col-sm-2">Genre</dt>
  //         <dd class="col-sm-10">${movie.Genre}</dd>

  //         <dt class="col-sm-2">Director</dt>
  //         <dd class="col-sm-10">${movie.Director}</dd>

  //         <dt class="col-sm-2">Actors</dt>
  //         <dd class="col-sm-10">${movie.Actors}</dd>

  //         <dt class="col-sm-2">Plot</dt>
  //         <dd class="col-sm-10">${movie.Plot}</dd>

  //         <dt class="col-sm-2">IMDB Rating</dt>
  //         <dd class="col-sm-10">${movie.imdbRating}</dd>
  //       </dl>    
  //     </div>
  //   </div>
  // `;

  // let movieInfoSection = document.getElementById('movieInfo');
  // movieInfoSection.classList.remove('d-none');
  // movieInfoSection.innerHTML = htmlTemplate;
  //   }
  // }

  // xhr.send();
}