export const selectIsUserAuthorized = state => Boolean(state.auth.accessToken);
export const selectAuthIsLoading = state => state.auth.isLoading;
export const selectAuthError = state => state.auth.error;