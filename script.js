const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission for now 

    // In a real app, you would capture email/password and validate or send to a backend
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log("Email:", email); 
    console.log("Password:", password);
    event.preventDefault(); 
    window.location.href = "search.html"; 
});

