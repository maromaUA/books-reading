export const selectIsUserAuthorized = state => Boolean(state.auth.accessToken);
export const selectAuthIsLoading = state => state.auth.isLoading;
export const selectAuthError = state => state.auth.error;
export const selectAuthName = state => state.auth.name;
export const selectGoingtoRead = state => state.auth.goingToRead;
export const selectCurrentlyReading = state => state.auth.currentlyReading;
export const selectFinishedReading = state => state.auth.finishedReading;
