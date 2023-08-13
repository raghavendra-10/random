const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('search');



    const recipePages = [
        { name: "aloo", url: "aloo.html" },
        { name: "biriyani", url: "bir.html" },
        { name: "chicken", url: "chick.html" },
        { name: "dosa", url: "dosa.html" },
        { name: "fish", url: "fish.html" },
        { name: "veg", url: "veg.html" },
        { name: "mutton", url: "mutton.html" },
        { name: "paneer", url: "paneer.html" }
    ]; 
function search(){

        const searchTerm = searchInput.value.toLowerCase();
        const filteredRecipes = recipePages.filter(recipe =>
            recipe.name.toLowerCase().includes(searchTerm)
        );
  
        console.log(filteredRecipes)

        searchResults.innerHTML = '';
    
        filteredRecipes.forEach(recipe => {
            const recipeLink = document.createElement('a');
            recipeLink.textContent = recipe.name;
            recipeLink.href = recipe.url;
            
            const recipeDiv = document.createElement('div');
            recipeDiv.appendChild(recipeLink);
            
            searchResults.appendChild(recipeDiv);
        });
}
    