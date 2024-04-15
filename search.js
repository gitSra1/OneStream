const searchBar = document.getElementById('search-bar');
const searchResultsGrid = document.getElementById('search-results-grid');
const subscriptionsButton = document.getElementById('add-subscriptions-button');
const movieData=[
  {
      "movieName": "Spider-Man: No Way Home",
      "posterImage": "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXGsKQRW4jV0.jpg",
      "platforms": [
          { "name": "Netflix", "logo": "./assets/cbs.png" },
          { "name": "Disney+", "logo": "./assets/fubotv.png" }
      ]
  },
  {
    "movieName": "Spider-Man: Far From Home",
    "posterImage": "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXGsKQRW4jV0.jpg",
    "platforms": [
        { "name": "Netflix", "logo": "./assets/netflix_logo.png" },
        { "name": "Disney+", "logo": "disneyplus_logo.png" }
    ]
},
{
  "movieName": "Fall out",
  "posterImage": "./assets/fallout.png",
  "platforms": [
      { "name": "Prime video", "logo": "./assets/primevideo.png" },
            ]
},
{
"movieName": "The Tank",
"posterImage": "./assets/the tank.png",
"platforms": [
    { "name": "Hulu", "logo": "./assets/hululogopng.png" },
]
},
{
  "movieName": "C U Soon",
  "posterImage": "./assets/C U SOON.jpg",
  "platforms": [
      { "name": "Prime video", "logo": "./assets/primevideo.png" },
            ]
},
{
"movieName": "Joji",
"posterImage": "./assets/joji.jpg",
"platforms": [
    { "name": "Prime Video", "logo": "./assets/primevideo.png" },
]
},
{
  "movieName": "Cold case",
  "posterImage": "./assets/coldcase.jpg",
  "platforms": [
      { "name": "Prime video", "logo": "./assets/primevideo.png" },
            ]
},
{
"movieName": "You",
"posterImage": "./assets/you.jpg",
"platforms": [
    { "name": "Netflix", "logo": "./assets/netflix_logo.png" },
]
},
{
  "movieName": "Scoop",
  "posterImage": "./assets/scoop.jpg",
  "platforms": [
      { "name": "Netflix", "logo": "./assets/netflix_logo.png" },
            ]
},
{
"movieName": "Lost girls",
"posterImage": "./assets/lostgirls.jpg",
"platforms": [
    { "name": "Netflix", "logo": "./assets/netflix_logo.png" },
]
},
{
  "movieName": "The purge",
  "posterImage": "./assets/purge.jpg",
  "platforms": [
      { "name": "Hulu", "logo": "./assets/hululogopng.png" },
            ]
},
{
"movieName": "You should have left",
"posterImage": "./assets/you should have left.jpg",
"platforms": [
    { "name": "Peacock", "logo": "./assets/peacock.png" },
]
},
{
  "movieName": "Night Swim",
  "posterImage": "./assets/night swim",
  "platforms": [
      { "name": "Peacock", "logo": "./assets/peacock.png" },
            ]
},
{
"movieName": "4 little girls",
"posterImage": "./assets/4 little girls.jpg",
"platforms": [
    { "name": "HBO", "logo": "./assets/hululogopng.png" },
]
},
{
  "movieName": "Taboo",
  "posterImage": "./assets/taboo.jpg",
  "platforms": [
      { "name": "Crackle", "logo": "./assets/Crackle_Logo.png" },
            ]
}, 
{
  "movieName": "Matrix",
  "posterImage": "./assets/matrix.jpg",
  "platforms": [
      { "name": "Netflix", "logo": "./assets/netflix_logo.png" },
      
  ]
},
{
  "movieName": "Enola Holmes 2",
  "posterImage": "./assets/EnolaHolmes2.jpg",
  "platforms": [
      { "name": "Netflix", "logo": "./assets/netflix_logo.png" },
      
  ]
},
{
  "movieName": "The Theory of Everything",
  "posterImage": "./assets/The_Theory_of_Everything.jpg",
  "platforms": [
      { "name": "Netflix", "logo": "./assets/netflix_logo.png" },
     
  ]
},
{
  "movieName": "The Hunger Games",
  "posterImage": "./assets/the_hunger_games.jpg",
  "platforms": [
      { "name": "Netflix", "logo": "./assets/netflix_logo.png" },
      
  ]
},
{
  "movieName": "Battleship",
  "posterImage": "./assets/battleship.jpg",
  "platforms": [
      { "name": "Netflix", "logo": "./assets/netflix_logo.png" },
    
  ]
},
{
  "movieName": "The Gray Man",
  "posterImage": "./assets/thegrayman.jpg",
  "platforms": [
      { "name": "Netflix", "logo": "./assets/netflix_logo.png" },
      
  ]
},
{
  "movieName": "Army of the Dead",
  "posterImage": "./assets/armyofthedead.jpg",
  "platforms": [
      { "name": "Netflix", "logo": "./assets/netflix_logo.png" },
    
  ]
},
{
  "movieName": "Enola Holmes ",
  "posterImage": "./assets/enolaholmes.jpg",
  "platforms": [
      { "name": "Netflix", "logo": "./assets/netflix_logo.png" },
      
  ]
},
{
  "movieName": "Gatsby",
  "posterImage": "./assets/gatsby.jpg",
  "platforms": [
      { "name": "Netflix", "logo": "./assets/netflix_logo.png" },
     
  ]
},
{
  "movieName": "Split",
  "posterImage": "./assets/split.jpg",
  "platforms": [
      { "name": "Netflix", "logo": "./assets/netflix_logo.png" },
  ]
},
{
  "movieName": "Sister Death",
  "posterImage": "./assets/sisterdeath.jpg",
  "platforms": [
      { "name": "Netflix", "logo": "./assets/netflix_logo.png" },
      
  ]
},
{
  "movieName": "Joker",
  "posterImage": "./assets/joker.jpg",
  "platforms": [
      { "name": "Netflix", "logo": "./assets/netflix_logo.png" },
      
  ]
}
]





// Function to display search results
function displaySearchResults(results) {
    searchResultsGrid.innerHTML = ''; // Clear previous results

    results.forEach(movie => createResultCard(movie));
}

// Function to create a single card
function createResultCard(movie) {
    const card = document.createElement('div');
    card.classList.add('search-result-card');

    // Poster Image with Background
    card.style.backgroundImage = `url(${movie.posterImage})`; 
    card.style.backgroundSize = 'cover'; 
    card.style.backgroundPosition = 'center'; 

    // Movie Title (Overlay Text)
    const title = document.createElement('h3');
    title.textContent = movie.movieName; 
    card.appendChild(title); 

    // Platform Logos
    const platformLogos = document.createElement('div');
    platformLogos.classList.add('platform-logos');

    movie.platforms.forEach(platform => {
        const logoImg = document.createElement('img');
        logoImg.src = platform.logo;
        logoImg.alt = `${platform.name} logo`;
        logoImg.classList.add('platform-logo');
        platformLogos.appendChild(logoImg);
    });

    card.appendChild(platformLogos);
    searchResultsGrid.appendChild(card); // Append to grid
}

// Search Event Listener
searchBar.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') { // Check for 'Enter' keypress
      console.log(searchBar.value)
      const searchQuery = searchBar.value.trim(); 
      if (searchQuery.length > 0) { 
        const filteredResults = movieData.filter(movie => 
            movie.movieName.toLowerCase().includes(searchQuery.toLowerCase())
        );
        console.log(filteredResults)
        displaySearchResults(filteredResults);
    } else {
        searchResultsGrid.innerHTML = '';  // Clear results area 
    }
    
  }
});

// Subscriptions Button Listener
subscriptionsButton.addEventListener('click', () => {
  window.location.href = 'subscriptions.html'; // Redirect
});
