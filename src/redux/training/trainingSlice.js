import { createSlice } from '@reduxjs/toolkit';
import { addPlanning, getPlanning } from './trainingOperations';

const initialState = {
  isLoading: false,
  error: null,
  planning: null,
  //   startDate: null,
  //   endDate: null,
  //   books: null,
  //   duration: null,
  //   pagesPerDay: null,
  //   stats: null,
};

const trainingSlice = createSlice({
  name: 'training',
  initialState,
  extraReducers: builder => {
    builder
      // ============== GET ====================
      .addCase(getPlanning.pending, state => {
        state.isLoading = true;
      })
      .addCase(getPlanning.fulfilled, (state, { payload }) => {
        return {
          isLoading: false,
          error: null,
          planning: { ...payload },
        };
      })
      .addCase(getPlanning.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      //========add Planning============
      .addCase(addPlanning.pending, state => {
        state.isLoading = true;
      })
      .addCase(addPlanning.fulfilled, (state, { payload }) => {
        return {
          isLoading: false,
          error: null,
          planning: { ...payload },
        };
      })
      .addCase(addPlanning.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export default trainingSlice.reducer;
