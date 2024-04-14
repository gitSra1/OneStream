
const platforms = [
    { name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Netflix-Logo.png", subscribed: true},
    { name: "Disney+", logo: "./assets/disney plus.png", subscribed: false },
    { name: "Hulu", logo: "./assets/hululogopng.png", subscribed: false },
    // ... add more platforms with similar structure
  ];
  
  const subscribedSection = document.getElementById('subscribed-section');
  const addSubscriptionsSection = document.getElementById('add-subscriptions-section');
  
  function renderCards() {
    platforms.forEach(platform => {
       const card = createCard(platform); 
       const targetSection = platform.subscribed ? subscribedSection : addSubscriptionsSection;
       targetSection.appendChild(card);
    });
  }
  
  function createCard(platform) {
    const card = document.createElement('div');
    card.classList.add('subscription-card');
  
    const img = document.createElement('img');
    img.src = platform.logo;
    img.alt = `${platform.name} logo`;
  
    const toggleButton = document.createElement('button');
  
    card.appendChild(img); 
    card.appendChild(toggleButton);
  
    return card;
  }
  
  function toggleSubscription(platform) {
    platform.subscribed = !platform.subscribed; 
    updateCardSections(); // We need to define this function below
  }
  
  function updateCardSections() {
    subscribedSection.innerHTML = ''; // Clear existing cards
    addSubscriptionsSection.innerHTML = '';
    renderCards(); // Redraw with updated subscriptions
  }
  
  // Initial Rendering
  renderCards();
  