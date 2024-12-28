// JavaScript to handle ingredient selection and searching for recipes

function toggleSelect(element) {
    element.classList.toggle('selected');
}

function searchRecipes() {
    const selectedIngredients = document.querySelectorAll('.ingredient-card.selected');
    const ingredients = Array.from(selectedIngredients).map(card => card.querySelector('img').alt);
    
    if (ingredients.length === 0) {
        alert('Please select at least one ingredient.');
        return;
    }

    // Redirect to recipes.html with selected ingredients as query parameters
    const queryParams = new URLSearchParams({ ingredients: ingredients.join(',') }).toString();
    window.location.href = `recipes.html?${queryParams}`;
}
