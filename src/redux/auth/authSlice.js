import { createSlice } from '@reduxjs/toolkit';
import {
  addNewBook,
  getAuthUser,
  loginUser,
  logoutUser,
  refreshToken,
  registerUser,
} from './authOperations';

const initialState = {
  accessToken: null,
  refreshToken: null,
  sid: null,
  email: null,
  error: null,
  isLoading: false,
  isAuth: false,
  currentlyReading: null,
  goingToRead: null,
  finishedReading: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    googleAuth(state, { payload }) {
      return { ...state, ...payload };
    },
  },
  extraReducers: builder => {
    builder
      // ============== REGISTRATION ====================
      .addCase(registerUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        return {
          isAuth: true,
          isLoading: false,
          error: null,
          ...payload,
        };
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      // ================ LOGIN =========================
      .addCase(loginUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(
        loginUser.fulfilled,
        (state, { payload: { userData, ...payload } }) => {
          return {
            ...state,
            isAuth: true,
            isLoading: false,
            error: null,
            email: userData.email,
            name: userData.name,
            currentlyReading: userData.currentlyReading,
            goingToRead: userData.goingToRead,
            finishedReading: userData.finishedReading,
            ...payload,
          };
        }
      )
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      // ================ LOGOUT ========================
      .addCase(logoutUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(logoutUser.fulfilled, state => {
        return {
          ...initialState,
        };
      })
      .addCase(logoutUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })

      //================= ADD NEW BOOK===================
      .addCase(addNewBook.pending, state => {
        state.isLoading = true;
      })
      .addCase(addNewBook.fulfilled, (state, { payload }) => {
        state.goingToRead.push(payload);
      })

      // ================ GET AUTHORIZED USER =====================
      .addCase(getAuthUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAuthUser.fulfilled, (state, { payload }) => {
        return {
          ...state,
          isAuth: true,
          isLoading: false,
          error: null,
          ...payload,
        };
      })
      .addCase(getAuthUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      // ================ REFRESH TOKEN =====================
      .addCase(refreshToken.pending, state => {
        state.isLoading = true;
      })
      .addCase(refreshToken.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.accessToken = payload.newAccessToken;
        state.refreshToken = payload.newRefreshToken;
        state.sid = payload.newSid;
      })
      .addCase(refreshToken.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const { googleAuth } = authSlice.actions;
export default authSlice.reducer;
