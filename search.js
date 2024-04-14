const searchBar = document.getElementById('search-bar');
const searchResultsGrid = document.getElementById('search-results-grid');
const subscriptionsButton = document.getElementById('add-subscriptions-button');

function displaySearchResults(results) {
    searchResultsGrid.innerHTML = '';

    results.forEach(movie => createResultCard(movie));
}

function createResultCard(movie) {
    const card = document.createElement('div');
    card.classList.add('search-result-card');

    // Poster Image
    const img = document.createElement('img');
    img.src = movie.posterImage; 
    img.alt = movie.movieName + " Poster";
    card.appendChild(img); 

    // Movie Title
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
    searchResultsGrid.appendChild(card); 
}

// ... (Rest of your code: search event listener, subscriptions button handling)
searchBar.addEventListener('input', () => {
  const searchQuery = searchBar.value.trim();

  if (searchQuery.length >= 4) { 
      fetch('./assets/searchData.json')
          .then(response => response.json())
          .then(data => {
              const filteredResults = data.filter(movie => 
                  movie.movieName.toLowerCase().includes(searchQuery.toLowerCase())
              );
              displaySearchResults(filteredResults);
          })
          .catch(error => console.error('Error fetching data:', error)); 
  } else {
      searchResultsGrid.innerHTML = '';
  }
});
subscriptionsButton.addEventListener('click', () => {
  fetch('subscriptions.html')
      .then(response => response.text())
      .then(html => {
          // ... (Logic to display the fetched HTML content) ...
      })
      .catch(error => console.error('Error fetching subscriptions:', error));
});
