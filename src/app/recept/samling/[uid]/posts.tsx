import { fetchCategoryRecipes } from "./data";
import { RecipeCard } from "@/app/ui/cards/RecipeCard";

export async function RecipePosts({currentPage, id}: {currentPage: number, id: string}) {

  const recipes = await fetchCategoryRecipes(currentPage, id);

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-3 lg:gap-x-6 my-6">
      {recipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)}
    </div>
  )
}