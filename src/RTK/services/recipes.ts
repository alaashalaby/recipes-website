import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const recipesApi = createApi({
  reducerPath: "recipesAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.themealdb.com/api/json/v1/1/",
  }),
  endpoints: (builder) => ({
    getRecipeById: builder.query<Meals, number>({
      // query: (id) => `lookup.php?i=${id}`,
      query: (id) => ({ url: `lookup.php`, params: { i: id } }),
    }),
    getAllRecipes: builder.query<Meals, string>({
      query: (searchTerm = "") => ({ url: `search.php?s=${searchTerm}` }),
    }),
    getCategories: builder.query<CategoryResponse, void>({
      query: () => ({ url: `categories.php` }),
    }),
    getMealsByCategory: builder.query<CategoryMealResponse, string>({
      query: (categoryName) => ({ url: `filter.php?c=${categoryName}` }),
    }),
  }),
});

export const {
  useGetRecipeByIdQuery,
  useGetAllRecipesQuery,
  useGetCategoriesQuery,
  useGetMealsByCategoryQuery,
} = recipesApi;
export default recipesApi;
