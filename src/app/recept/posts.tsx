import { fetchRecipes } from "./data";
import { RecipeCard } from "../ui/cards/RecipeCard";

export async function RecipePosts({currentPage}: {currentPage: number}) {

  const recipes = await fetchRecipes(currentPage)

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-6 my-6">
      {recipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)}
    </div>
  )
}