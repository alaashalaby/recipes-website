import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState: LatestRecipesProps = {
  meals: [],
  loading: false,
  error: null,
};

export const getLatestRecipes = createAsyncThunk(
  "latestRecipes/getLatestRecipes",
  async () => {
    const response = await fetch(
      "https://latest-recipes.onrender.com/latestMeals"
    );
    if (!response.ok) {
      throw new Error("Failed to Fetch Data");
    }
    // return (await response.json()) as Meal[];
    const data = await response.json();
    return data.meals as Meal[];
  }
);
const latestRecipesSlice = createSlice({
  name: "latestRecipes",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getLatestRecipes.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getLatestRecipes.fulfilled,
      (state, action: PayloadAction<Meal[]>) => {
        state.loading = false;
        state.meals = action.payload;
      }
    );
    builder.addCase(getLatestRecipes.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Something went wrong";
    });
  },
});

const latestRecipesReducer = latestRecipesSlice.reducer;
export default latestRecipesReducer;
