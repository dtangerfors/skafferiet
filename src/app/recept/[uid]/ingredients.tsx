import { Content } from "@prismicio/client"

const ItemList = ({children}: {children: React.ReactNode}) => (
  <ul>{children}</ul>
)

const Item = ({ item, quantity, measurement }: Content.IngredientsSliceDefaultItem) => (
  <li className="flex py-3 mt-4 first:mt-0 border-b border-dotted border-black border-opacity-20 justify-between text-base text-neutral-700">
    <span className="font-bold">{item}</span>
    {quantity &&  <span>{quantity} {measurement}</span>}
  </li>
)

const RecipeGroup = ({children}: {children: React.ReactNode}) => (
  <div className="pb-8 first-of-type:pt-6">{children}</div>
)

const HowTo = ({ children }: {children: React.ReactNode}) => <ol className="list-decimal pl-4 mt-8">{children}</ol>


export { Item, ItemList, HowTo, RecipeGroup }