const _apiURL = 'https://www.themealdb.com/api/json/v1/1/';

// получить все категории
const getAllCategories = async () => {
    const response = await fetch(_apiURL + 'categories.php');
    return await response.json();
};

// получить рецепты категории
const getCategoryRecipes = async (name) => {
    const response = await fetch(_apiURL + 'filter.php?c=' + name);
    return await response.json();
};

export {getAllCategories, getCategoryRecipes};