import { createAsyncThunk } from '@reduxjs/toolkit';
//import { errorHandler } from '../error/errorHandler';
import { getPlanningApi, addPlanningApi } from '../../services/api';

export const getPlanning = createAsyncThunk(
  'training/getPlanning',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getPlanningApi();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addPlanning = createAsyncThunk(
  'training/addPlanning',
  async (planning, { rejectWithValue }) => {
    try {
      const { data } = await addPlanningApi(planning);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
