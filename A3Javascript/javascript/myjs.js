// Function 1: Toggle the visibility of an element
function toggleVisibility(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.style.display = (element.style.display === 'none' || element.style.display === '') ? 'block' : 'none';
    }
}

// Function 2: Validate email format
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Function 3: Show an alert with a custom message
function showAlert(message) {
    alert(message);
}

// Function 4: Change the background color of an element
function changeBackgroundColor(elementId, color) {
    const element = document.getElementById(elementId);
    if (element) {
        element.style.backgroundColor = color;
    }
}

// Function 5: Add a new item to a list
function addItemToList(itemText) {
    if (!itemText.trim()) return; // Ignore empty input
    const list = document.getElementById('itemList');
    if (list) {
        const newItem = document.createElement('li');
        newItem.textContent = itemText;
        list.appendChild(newItem);
        document.getElementById('newWatch').value = ''; // Clear input
    }
}

// Function 6: Clear all items from a list
function clearList() {
    const list = document.getElementById('itemList');
    if (list) {
        list.innerHTML = '';
    }
}

// Function 7: Change the text of a button on click
function changeButtonText(buttonId, newText) {
    const button = document.getElementById(buttonId);
    if (button) {
        button.textContent = newText;
    }
}

// Function 8: Log the current date and time to the console
function logCurrentDateTime() {
    const now = new Date();
    console.log(`Current Date and Time: ${now}`);
}

// Function 9: Validate form inputs before submission
function validateForm(event) {
    const emailInput = document.getElementById('email');
    if (emailInput && !validateEmail(emailInput.value)) {
        event.preventDefault();
        showAlert('Please enter a valid email address.');
    } else {
        showAlert('Form submitted successfully!');
    }
}

// Function 10: Change the text of an element when hovered
function changeTextOnHover(elementId, newText) {
    const element = document.getElementById(elementId);
    if (element) {
        element.addEventListener('mouseover', () => {
            element.dataset.originalText = element.textContent; // Backup original text
            element.textContent = newText;
        });
        element.addEventListener('mouseout', () => {
            element.textContent = element.dataset.originalText;
        });
    }
}

// Newsletter Validation
function validateNewsletter() {
    const emailInput = document.getElementById('newsletterEmail');
    if (!validateEmail(emailInput.value)) {
        showAlert('Please enter a valid email address.');
    } else {
        showAlert('Thank you for subscribing!');
        emailInput.value = '';
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    logCurrentDateTime();
    changeTextOnHover('heroText', 'Explore Limited Edition!');
});