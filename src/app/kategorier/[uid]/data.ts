import { createClient } from "@/prismicio";
import * as prismic from "@prismicio/client";

const ITEMS_PER_PAGE = 12;
export async function fetchCategoryRecipePages(id: string) {
  const client = createClient();

  try {
    const recipes = await client.getByType("recipe", {
      filters: [prismic.filter.at("my.recipe.categories.category", id)],
      orderings: [{
        field: "document.first_publication_date",
        direction: "desc"
      }],
      pageSize: ITEMS_PER_PAGE,
      page: 1
    });
  
    return recipes.total_pages
  } catch (error) {
    console.error('API Error:', error);
    throw new Error('Failed to fetch total number of pages.');
  }
}

export async function fetchCategoryRecipes(currentPage: number, id: string) {
  const client = createClient();

  try {
    const recipes = await client.getByType("recipe", {
      filters: [prismic.filter.at("my.recipe.categories.category", id)],
      orderings: [{
        field: "document.first_publication_date",
        direction: "desc"
      }],
      pageSize: ITEMS_PER_PAGE,
      page: currentPage
    });

    return recipes.results
  } catch (error) {
    console.error('API Error:', error);
    throw new Error('Failed to fetch recipes.');
  }
}