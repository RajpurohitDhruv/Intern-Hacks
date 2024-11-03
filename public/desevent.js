document.addEventListener('DOMContentLoaded', function() {
    const toggleNavButton = document.getElementById('toggleNavButton');
    const sideNav = document.getElementById('sideNav');

    toggleNavButton.addEventListener('click', function() {
        sideNav.classList.toggle('show');
    });
});

function postevent(){
            window.location.href = "https://intern-hacks-frontend.vercel.app/event.html" 
}
function redirecthome(){
            window.location.href = "https://intern-hacks-frontend.vercel.app/home.html" 
}
function findevent(){
            window.location.href = "https://intern-hacks-frontend.vercel.app/eventmy.html" 
}
function allevent(){
            window.location.href = "https://intern-hacks-frontend.vercel.app/eventpage.html" 
}


let isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'; // You can replace this with your authentication logic
    document.addEventListener('DOMContentLoaded', function() {
        const logoutButton = document.getElementById('button1');
    
        logoutButton.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default form submission behavior
    
            // Call the logout function
            logout();
        });
    
        function logout() {
            // Clear local storage
            localStorage.removeItem('isAuthenticated');
            localStorage.removeItem('username');
            localStorage.removeItem('email');
    
            // Redirect to the login page or perform any other necessary actions
            // Example redirect (uncomment and adjust as needed):
            window.location.href = "https://intern-hacks-frontend.vercel.app/public/home1.html";
        }
    });
 