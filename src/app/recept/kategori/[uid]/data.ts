import { createClient } from "@/prismicio";
import * as prismic from "@prismicio/client";

const ITEMS_PER_PAGE = 12;
export async function fetchTagPages(id: string) {
  const client = createClient();

  try {
    const recipes = await client.getByType("tag", {
      filters: [prismic.filter.at("my.tag.collection", id)],
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

export async function fetchCollectionTags(currentPage: number, id: string) {
  const client = createClient();

  try {
    const recipes = await client.getByType("tag", {
      filters: [prismic.filter.at("my.tag.collection", id)],
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