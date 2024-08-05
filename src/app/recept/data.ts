import { createClient } from "@/prismicio";

const ITEMS_PER_PAGE = 6;
export async function fetchRecipePages() {
  const client = createClient();

  try {
    const recipes = await client.getByType("recipe", {
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

export async function fetchRecipes(currentPage: number) {
  const client = createClient();

  try {
    const recipes = await client.getByType("recipe", {
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