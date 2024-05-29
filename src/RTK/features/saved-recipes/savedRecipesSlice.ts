import { PayloadAction, createSlice } from "@reduxjs/toolkit";
const getRecipesFromLocalStorage = () => {
  const savedRecipesInLocalStorage = localStorage.getItem("savedRecipes");
  return savedRecipesInLocalStorage
    ? JSON.parse(savedRecipesInLocalStorage)
    : [];
};
const savedRecipes = createSlice({
  name: "savedRecipes",
  initialState: {
    savedRecipes: getRecipesFromLocalStorage() as Meal[],
  },
  reducers: {
    addRecipeToSaveList: (state, action: PayloadAction<Meal>) => {
      const exist = state.savedRecipes.find(
        (recipe) => recipe.idMeal === action.payload.idMeal
      );
      if (!exist) {
        // return {
        //   ...state,
        //   savedRecipes: [...state.savedRecipes, action.payload],
        // };
        state.savedRecipes.push(action.payload);
        localStorage.setItem(
          "savedRecipes",
          JSON.stringify(state.savedRecipes)
        );
      }
    },
    removeRecipeFromSaveList: (state, action: PayloadAction<string>) => {
      // return {
      //   ...state,
      //   savedRecipes: state.savedRecipes.filter(
      //     (recipe) => recipe.idMeal !== action.payload
      //   ),
      // };
      state.savedRecipes = state.savedRecipes.filter(
        (recipe) => recipe.idMeal !== action.payload
      );
      localStorage.setItem("savedRecipes", JSON.stringify(state.savedRecipes));
    },
  },
});

const savedRecipesReducer = savedRecipes.reducer;
export const { addRecipeToSaveList, removeRecipeFromSaveList } =
  savedRecipes.actions;
export default savedRecipesReducer;
