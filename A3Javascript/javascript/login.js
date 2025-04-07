// LOGIN VALIDATION
function validateLoginForm(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if (!validateEmail(email)) {
        showAlert('Please enter a valid email address');
        return false;
    }
    
    if (password.length < 6) {
        showAlert('Password must be at least 6 characters');
        return false;
    }
    
    // Simulate successful login
    showAlert('Login successful! Redirecting...');
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1500);
    
    return true;
}

// PASSWORD VISIBILITY TOGGLE
function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const toggleIcon = document.getElementById('togglePassword');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.classList.replace('fa-eye', 'fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        toggleIcon.classList.replace('fa-eye-slash', 'fa-eye');
    }
}

// SOCIAL LOGIN HANDLERS
function handleGoogleLogin() {
    showAlert('Redirecting to Google authentication...');
    // In a real app, this would redirect to Google OAuth
}

function handleAppleLogin() {
    showAlert('Redirecting to Apple authentication...');
    // In a real app, this would redirect to Apple OAuth
}

// NEWSLETTER SUBSCRIPTION
function handleNewsletterSubscribe() {
    const email = document.getElementById('newsletterEmail').value;
    if (validateEmail(email)) {
        showAlert('Thank you for subscribing to our newsletter!');
        document.getElementById('newsletterEmail').value = '';
    } else {
        showAlert('Please enter a valid email address');
    }
}

// Initialize login page
document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners
    document.querySelector('form').addEventListener('submit', validateLoginForm);
    document.getElementById('googleLogin').addEventListener('click', handleGoogleLogin);
    document.getElementById('appleLogin').addEventListener('click', handleAppleLogin);
    document.getElementById('newsletterBtn').addEventListener('click', handleNewsletterSubscribe);
    
    // Add password toggle if it exists
    if (document.getElementById('togglePassword')) {
        document.getElementById('togglePassword').addEventListener('click', togglePasswordVisibility);
    }
});