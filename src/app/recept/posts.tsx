import { fetchRecipes } from "./data";
import { RecipeCard } from "../ui/cards/RecipeCard";
import { RecipeDocument } from "../../../prismicio-types";

export async function RecipePosts({currentPage, isHighlight}: {currentPage: number, isHighlight?: boolean}) {

  const data = await fetchRecipes(currentPage);
  let recipes: RecipeDocument<string>[] = [];

  if (isHighlight) { recipes = data.slice(0, 3) }
  else if (currentPage === 1 && !isHighlight) { recipes = data.splice(3) }
  else { recipes = data }

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-3 lg:gap-x-6 my-6">
      {recipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)}
    </div>
  )
}