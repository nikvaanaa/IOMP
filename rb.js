function searchRecipes() {
    // Get the input field and filter value
    const input = document.getElementById('searchBar');
    const filter = input.value.toLowerCase();
    
    // Get all recipe and cuisine cards
    const recipeCards = document.getElementsByClassName('recipe-card');
    const cuisineCards = document.getElementsByClassName('cuisine-card');

    // Function to filter cards
    function filterCards(cards) {
        for (let i = 0; i < cards.length; i++) {
            let card = cards[i];
            let title = card.getElementsByTagName('h3')[0];

            // If the title or description matches the filter, display the card; otherwise, hide it
            if (title.innerText.toLowerCase().indexOf(filter) > -1 || 
                card.innerText.toLowerCase().indexOf(filter) > -1) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }
        }
    }

    // Apply the filter to both recipe and cuisine cards
    filterCards(recipeCards);
    filterCards(cuisineCards);
}
