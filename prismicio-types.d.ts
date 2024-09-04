// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type BlogPostDocumentDataSlicesSlice = ImageSlice | TextSlice;

/**
 * Content for Blog Post documents
 */
interface BlogPostDocumentData {
  /**
   * Title field in *Blog Post*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Title of the post
   * - **API ID Path**: blog_post.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * Post Image field in *Blog Post*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.post_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  post_image: prismic.ImageField<never>;

  /**
   * Slice Zone field in *Blog Post*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<BlogPostDocumentDataSlicesSlice> /**
   * Meta Description field in *Blog Post*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: blog_post.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Blog Post*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Blog Post*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: blog_post.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Blog Post document from Prismic
 *
 * - **API ID**: `blog_post`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BlogPostDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<BlogPostDocumentData>,
    "blog_post",
    Lang
  >;

/**
 * Content for Category documents
 */
interface CategoryDocumentData {
  /**
   * Name field in *Category*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: category.name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  name: prismic.RichTextField;

  /**
   * Description field in *Category*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: category.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Image field in *Category*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: category.image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Category document from Prismic
 *
 * - **API ID**: `category`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type CategoryDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<CategoryDocumentData>,
    "category",
    Lang
  >;

/**
 * Content for Course documents
 */
interface CourseDocumentData {
  /**
   * Name field in *Course*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: course.name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  name: prismic.TitleField;

  /**
   * Description field in *Course*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: course.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Image field in *Course*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: course.image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Course document from Prismic
 *
 * - **API ID**: `course`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type CourseDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<CourseDocumentData>, "course", Lang>;

type HomeDocumentDataSlicesSlice =
  | FeaturedRecipesSlice
  | FeaturedCategoriesSlice;

/**
 * Content for Home documents
 */
interface HomeDocumentData {
  /**
   * Title field in *Home*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Slice Zone field in *Home*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: home.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomeDocumentDataSlicesSlice> /**
   * Meta Description field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: home.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Home*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: home.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Home document from Prismic
 *
 * - **API ID**: `home`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<Simplify<HomeDocumentData>, "home", Lang>;

/**
 * Item in *Navigation → Main navigation*
 */
export interface NavigationDocumentDataMainNavigationItem {
  /**
   * Name field in *Navigation → Main navigation*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.main_navigation[].name
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  name: prismic.RichTextField;

  /**
   * Link field in *Navigation → Main navigation*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.main_navigation[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

type NavigationDocumentDataSlicesSlice = NavigationItemSlice;

/**
 * Content for Navigation documents
 */
interface NavigationDocumentData {
  /**
   * Name field in *Navigation*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  name: prismic.RichTextField;

  /**
   * Main navigation field in *Navigation*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.main_navigation[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  main_navigation: prismic.GroupField<
    Simplify<NavigationDocumentDataMainNavigationItem>
  >;

  /**
   * Slice Zone field in *Navigation*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<NavigationDocumentDataSlicesSlice>;
}

/**
 * Navigation document from Prismic
 *
 * - **API ID**: `navigation`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavigationDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<NavigationDocumentData>,
    "navigation",
    Lang
  >;

type PageDocumentDataSlicesSlice = ImageSlice | TextSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

/**
 * Item in *Recipe → Categories*
 */
export interface RecipeDocumentDataCategoriesItem {
  /**
   * Category field in *Recipe → Categories*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: recipe.categories[].category
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  category: prismic.ContentRelationshipField<"category">;
}

/**
 * Item in *Recipe → Courses*
 */
export interface RecipeDocumentDataCoursesItem {
  /**
   * Course field in *Recipe → Courses*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: recipe.courses[].course
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  course: prismic.ContentRelationshipField<"course">;
}

type RecipeDocumentDataSlicesSlice = TextSlice | IngredientsSlice | HowToSlice;

/**
 * Content for Recipe documents
 */
interface RecipeDocumentData {
  /**
   * Title field in *Recipe*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Title of the recipe
   * - **API ID Path**: recipe.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * Image field in *Recipe*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: recipe.image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<"thumbnail">;

  /**
   * Description field in *Recipe*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: A short description of the recipe
   * - **API ID Path**: recipe.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Servings field in *Recipe*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: recipe.servings
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  servings: prismic.NumberField;

  /**
   * Time field in *Recipe*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: recipe.time
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  time: prismic.NumberField;

  /**
   * Categories field in *Recipe*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: recipe.categories[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  categories: prismic.GroupField<Simplify<RecipeDocumentDataCategoriesItem>>;

  /**
   * Courses field in *Recipe*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: recipe.courses[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  courses: prismic.GroupField<Simplify<RecipeDocumentDataCoursesItem>>;

  /**
   * Slice Zone field in *Recipe*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: recipe.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<RecipeDocumentDataSlicesSlice> /**
   * Meta Description field in *Recipe*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: recipe.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Recipe*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: recipe.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Recipe*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: recipe.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Recipe document from Prismic
 *
 * - **API ID**: `recipe`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type RecipeDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<RecipeDocumentData>, "recipe", Lang>;

export type AllDocumentTypes =
  | BlogPostDocument
  | CategoryDocument
  | CourseDocument
  | HomeDocument
  | NavigationDocument
  | PageDocument
  | RecipeDocument;

/**
 * Primary content in *FeaturedCategories → Primary*
 */
export interface FeaturedCategoriesSliceDefaultPrimary {
  /**
   * Title field in *FeaturedCategories → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: featured_categories.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;
}

/**
 * Primary content in *FeaturedCategories → Items*
 */
export interface FeaturedCategoriesSliceDefaultItem {
  /**
   * Category field in *FeaturedCategories → Items*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: featured_categories.items[].category
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  category: prismic.ContentRelationshipField<"category">;
}

/**
 * Default variation for FeaturedCategories Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FeaturedCategoriesSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<FeaturedCategoriesSliceDefaultPrimary>,
  Simplify<FeaturedCategoriesSliceDefaultItem>
>;

/**
 * Slice variation for *FeaturedCategories*
 */
type FeaturedCategoriesSliceVariation = FeaturedCategoriesSliceDefault;

/**
 * FeaturedCategories Shared Slice
 *
 * - **API ID**: `featured_categories`
 * - **Description**: FeaturedCategories
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FeaturedCategoriesSlice = prismic.SharedSlice<
  "featured_categories",
  FeaturedCategoriesSliceVariation
>;

/**
 * Primary content in *FeaturedRecipes → Primary*
 */
export interface FeaturedRecipesSliceDefaultPrimary {
  /**
   * Title field in *FeaturedRecipes → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: featured_recipes.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Background color field in *FeaturedRecipes → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: featured_recipes.primary.background_color
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  background_color: prismic.SelectField<"white" | "lightgray">;
}

/**
 * Primary content in *FeaturedRecipes → Items*
 */
export interface FeaturedRecipesSliceDefaultItem {
  /**
   * Recipe field in *FeaturedRecipes → Items*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: featured_recipes.items[].recipe
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  recipe: prismic.ContentRelationshipField<"recipe">;
}

/**
 * Default variation for FeaturedRecipes Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FeaturedRecipesSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<FeaturedRecipesSliceDefaultPrimary>,
  Simplify<FeaturedRecipesSliceDefaultItem>
>;

/**
 * Slice variation for *FeaturedRecipes*
 */
type FeaturedRecipesSliceVariation = FeaturedRecipesSliceDefault;

/**
 * FeaturedRecipes Shared Slice
 *
 * - **API ID**: `featured_recipes`
 * - **Description**: FeaturedRecipes
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FeaturedRecipesSlice = prismic.SharedSlice<
  "featured_recipes",
  FeaturedRecipesSliceVariation
>;

/**
 * Primary content in *HowTo → Primary*
 */
export interface HowToSliceDefaultPrimary {
  /**
   * Title field in *HowTo → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: how_to.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;
}

/**
 * Primary content in *HowTo → Items*
 */
export interface HowToSliceDefaultItem {
  /**
   * Step field in *HowTo → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: how_to.items[].step
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  step: prismic.RichTextField;
}

/**
 * Default variation for HowTo Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HowToSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HowToSliceDefaultPrimary>,
  Simplify<HowToSliceDefaultItem>
>;

/**
 * Slice variation for *HowTo*
 */
type HowToSliceVariation = HowToSliceDefault;

/**
 * HowTo Shared Slice
 *
 * - **API ID**: `how_to`
 * - **Description**: HowTo
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HowToSlice = prismic.SharedSlice<"how_to", HowToSliceVariation>;

/**
 * Primary content in *Image → Primary*
 */
export interface ImageSliceDefaultPrimary {
  /**
   * Image field in *Image → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: image.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Default variation for Image Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ImageSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Image*
 */
type ImageSliceVariation = ImageSliceDefault;

/**
 * Image Shared Slice
 *
 * - **API ID**: `image`
 * - **Description**: Image
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageSlice = prismic.SharedSlice<"image", ImageSliceVariation>;

/**
 * Default variation for IngredientKit Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type IngredientKitSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  never
>;

/**
 * Slice variation for *IngredientKit*
 */
type IngredientKitSliceVariation = IngredientKitSliceDefault;

/**
 * IngredientKit Shared Slice
 *
 * - **API ID**: `ingredient_kit`
 * - **Description**: IngredientKit
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type IngredientKitSlice = prismic.SharedSlice<
  "ingredient_kit",
  IngredientKitSliceVariation
>;

/**
 * Primary content in *Ingredients → Primary*
 */
export interface IngredientsSliceDefaultPrimary {
  /**
   * Title field in *Ingredients → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: ingredients.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;
}

/**
 * Primary content in *Ingredients → Items*
 */
export interface IngredientsSliceDefaultItem {
  /**
   * Item field in *Ingredients → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: ingredients.items[].item
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  item: prismic.KeyTextField;

  /**
   * Quantity field in *Ingredients → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: ingredients.items[].quantity
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  quantity: prismic.KeyTextField;

  /**
   * Measurement field in *Ingredients → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: ingredients.items[].measurement
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  measurement: prismic.KeyTextField;
}

/**
 * Default variation for Ingredients Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type IngredientsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<IngredientsSliceDefaultPrimary>,
  Simplify<IngredientsSliceDefaultItem>
>;

/**
 * Slice variation for *Ingredients*
 */
type IngredientsSliceVariation = IngredientsSliceDefault;

/**
 * Ingredients Shared Slice
 *
 * - **API ID**: `ingredients`
 * - **Description**: Ingredients
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type IngredientsSlice = prismic.SharedSlice<
  "ingredients",
  IngredientsSliceVariation
>;

/**
 * Primary content in *NavigationItem → Primary*
 */
export interface NavigationItemSliceDefaultPrimary {
  /**
   * Name field in *NavigationItem → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation_item.primary.name
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  name: prismic.RichTextField;

  /**
   * Link field in *NavigationItem → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation_item.primary.link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Primary content in *NavigationItem → Items*
 */
export interface NavigationItemSliceDefaultItem {
  /**
   * Child Name field in *NavigationItem → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation_item.items[].child_name
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  child_name: prismic.RichTextField;

  /**
   * Child Link field in *NavigationItem → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation_item.items[].child_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  child_link: prismic.LinkField;
}

/**
 * Default variation for NavigationItem Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NavigationItemSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<NavigationItemSliceDefaultPrimary>,
  Simplify<NavigationItemSliceDefaultItem>
>;

/**
 * Slice variation for *NavigationItem*
 */
type NavigationItemSliceVariation = NavigationItemSliceDefault;

/**
 * NavigationItem Shared Slice
 *
 * - **API ID**: `navigation_item`
 * - **Description**: NavigationItem
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NavigationItemSlice = prismic.SharedSlice<
  "navigation_item",
  NavigationItemSliceVariation
>;

/**
 * Primary content in *Text → Items*
 */
export interface TextSliceDefaultItem {
  /**
   * Content field in *Text → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text.items[].content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;
}

/**
 * Default variation for Text Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<TextSliceDefaultItem>
>;

/**
 * Slice variation for *Text*
 */
type TextSliceVariation = TextSliceDefault;

/**
 * Text Shared Slice
 *
 * - **API ID**: `text`
 * - **Description**: Text
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextSlice = prismic.SharedSlice<"text", TextSliceVariation>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      BlogPostDocument,
      BlogPostDocumentData,
      BlogPostDocumentDataSlicesSlice,
      CategoryDocument,
      CategoryDocumentData,
      CourseDocument,
      CourseDocumentData,
      HomeDocument,
      HomeDocumentData,
      HomeDocumentDataSlicesSlice,
      NavigationDocument,
      NavigationDocumentData,
      NavigationDocumentDataMainNavigationItem,
      NavigationDocumentDataSlicesSlice,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      RecipeDocument,
      RecipeDocumentData,
      RecipeDocumentDataCategoriesItem,
      RecipeDocumentDataCoursesItem,
      RecipeDocumentDataSlicesSlice,
      AllDocumentTypes,
      FeaturedCategoriesSlice,
      FeaturedCategoriesSliceDefaultPrimary,
      FeaturedCategoriesSliceDefaultItem,
      FeaturedCategoriesSliceVariation,
      FeaturedCategoriesSliceDefault,
      FeaturedRecipesSlice,
      FeaturedRecipesSliceDefaultPrimary,
      FeaturedRecipesSliceDefaultItem,
      FeaturedRecipesSliceVariation,
      FeaturedRecipesSliceDefault,
      HowToSlice,
      HowToSliceDefaultPrimary,
      HowToSliceDefaultItem,
      HowToSliceVariation,
      HowToSliceDefault,
      ImageSlice,
      ImageSliceDefaultPrimary,
      ImageSliceVariation,
      ImageSliceDefault,
      IngredientKitSlice,
      IngredientKitSliceVariation,
      IngredientKitSliceDefault,
      IngredientsSlice,
      IngredientsSliceDefaultPrimary,
      IngredientsSliceDefaultItem,
      IngredientsSliceVariation,
      IngredientsSliceDefault,
      NavigationItemSlice,
      NavigationItemSliceDefaultPrimary,
      NavigationItemSliceDefaultItem,
      NavigationItemSliceVariation,
      NavigationItemSliceDefault,
      TextSlice,
      TextSliceDefaultItem,
      TextSliceVariation,
      TextSliceDefault,
    };
  }
}
