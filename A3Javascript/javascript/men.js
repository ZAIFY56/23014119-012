// FILTER FUNCTIONS
function toggleFilterSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.toggle('hidden');
    }
}

function applyFilters() {
    // Get all selected filters
    const selectedFilters = {
        gender: Array.from(document.querySelectorAll('input[name="gender"]:checked')).map(el => el.value),
        material: Array.from(document.querySelectorAll('input[name="material"]:checked')).map(el => el.value),
        color: Array.from(document.querySelectorAll('input[name="color"]:checked')).map(el => el.value)
    };
    
    console.log("Applying filters:", selectedFilters);
    // In a real app, you would filter products here
    showAlert(`Filters applied: ${JSON.stringify(selectedFilters)}`);
}

// PRODUCT FUNCTIONS
function addToWishlist(productName) {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    if (!wishlist.includes(productName)) {
        wishlist.push(productName);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        showAlert(`${productName} added to wishlist!`);
    } else {
        showAlert(`${productName} is already in your wishlist!`);
    }
}

function quickView(productId) {
    // In a real app, this would fetch product details
    toggleVisibility(`quickView-${productId}`);
}

// SORTING FUNCTION
function sortProducts(sortBy) {
    const productGrid = document.getElementById('productGrid');
    if (productGrid) {
        const products = Array.from(productGrid.children);
        
        products.sort((a, b) => {
            // Example sorting logic - you'd use real data in practice
            if (sortBy === 'price-low-high') return 1;
            if (sortBy === 'price-high-low') return -1;
            return 0;
        });
        
        products.forEach(product => productGrid.appendChild(product));
        showAlert(`Sorted by: ${sortBy.replace('-', ' ')}`);
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Make filter sections collapsible
    document.querySelectorAll('.filter-section h3').forEach(header => {
        header.addEventListener('click', function() {
            this.nextElementSibling.classList.toggle('hidden');
        });
    });
    
    // Add click handlers to all "Add to Wishlist" buttons
    document.querySelectorAll('.wishlist-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const productName = this.getAttribute('data-product');
            addToWishlist(productName);
        });
    });
});