import { CategoryCard } from "@/app/ui/cards/CategoryCard";
import { fetchCollectionTags } from "./data";

export async function RecipePosts({currentPage, id}: {currentPage: number, id: string}) {

  const tags = await fetchCollectionTags(currentPage, id);

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-3 lg:gap-x-6 my-6">
      {tags.map(tag => <CategoryCard key={tag.id} category={tag} />)}
    </div>
  )
}