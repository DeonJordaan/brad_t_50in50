const API_URL =
	'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=0c4e25b37ca0d88d1fcd5c02a6e82455&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API =
	'https://api.themoviedb.org/3/search/movie?api_key=0c4e25b37ca0d88d1fcd5c02a6e82455&query="';

const form = document.getElementById('form');
const search = document.getElementById('search');

const main = document.querySelector('.main');

//Get initial movies
getMovies(API_URL);

async function getMovies(url) {
	const response = await fetch(url);
	const data = await response.json();

	displayMovies(data.results);
}

function displayMovies(movies) {
	main.innerHTML = '';

	movies.forEach((movie) => {
		const { title, poster_path, vote_average, overview } = movie;

		const movieEl = document.createElement('div');
		movieEl.classList.add('movie');

		movieEl.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="${title}">
            <div class="movie-info">
          <h3>${title}</h3>
          <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
          <h3>Overview</h3>
          ${overview}
        </div>
        `;
		main.appendChild(movieEl);
	});
}

// NOTE My solution
// function displayMovies(movies) {
// 	main.innerHTML = '';

// 	movies.forEach((result) => {
// 		main.insertAdjacentHTML(
// 			'afterbegin',
// 			`
//                 <div class="movie">
//                             <img
//                                 src="${IMG_PATH + result.poster_path}"
//                             />
//                             <div class="movie-info">
//                                 <h3>${result.original_title}</h3>
//                                 <span class="${getClassByRate(
// 																	result.vote_average
// 																)}">${result.vote_average}</span>
//                             </div>
//                             <div class="overview">
//                                 <h3>Overview</h3>
//                                 ${result.overview}
//                             </div>
//                         </div>`
// 		);
// 	});
// }

function getClassByRate(vote) {
	if (vote >= 8) {
		return 'green';
	} else if (vote >= 5) {
		return 'orange';
	} else {
		return 'red';
	}
}

form.addEventListener('submit', (e) => {
	e.preventDefault();

	const searchTerm = search.value;

	if (searchTerm && searchTerm !== '') {
		getMovies(SEARCH_API + searchTerm);

		search.value = '';
	} else {
		window.location.reload();
	}
});

// function displayMovies() {
// 	main.insertAdjacentHTML(
// 		'afterbegin',
// 		`
//     <div class="movie">
// 				<img
// 					src="IMG_PATH + ${data.}"
// 				/>
// 				<div class="movie-info">
// 					<h3>Movie Title</h3>
// 					<span class="green">9.8</span>
// 				</div>
// 				<div class="overview">
// 					<h3>Overview</h3>
// 					Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi vitae
// 					labore laudantium ex molestias eligendi consequatur quas ab sit fuga?
// 				</div>
// 			</div>`
// 	);
// }
