export const fetchRecipes = async (query) => {
  const apiKey = import.meta.env.VITE_APP_API_KEY;
  const apiId = import.meta.env.VITE_APP_API_ID;
  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${apiId}&app_key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    // Check if there's a next page link and add it to the result if needed
    const nextPageUrl = data._links?.next?.href || null;

    return {
      recipes: data.hits,
      nextPageUrl: nextPageUrl,
    };
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return { recipes: [], nextPageUrl: null };
  }
};
