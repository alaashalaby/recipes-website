import { configureStore } from "@reduxjs/toolkit";
import latestRecipesReducer from "../RTK/features/latest-recipes/latestRecipesSlice";
import recipesApi from "../RTK/services/recipes";
import savedRecipesReducer from "../RTK/features/saved-recipes/savedRecipesSlice";
const store = configureStore({
  reducer: {
    latestRecipesReducer: latestRecipesReducer,
    [recipesApi.reducerPath]: recipesApi.reducer,
    savedRecipesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(recipesApi.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;