import { stateReduxType } from "redux/storeRedux"
import { createSelector } from "reselect"

/////////// Users Selectors
export const selectUsersPageData = (state: stateReduxType) => state.usersPageData

// export const selectInitialized = (state: stateReduxType) => state.app.initialized
// export const selectUsersData = (state: stateReduxType) => state.usersPageData.usersData
// export const selectFilteredUsers = createSelector(
//   [selectUsersData, selectInitialized],
//   (usersData, initialized) => usersData.filter((u) => u.status === "Hurrah"),
// )
// export const selectFilteredUsers = (state: stateReduxType) =>
//   state.usersPageData.usersData.filter((u) => u.status === "Hurrah")

/////////// Profile Selectors

/////////// Dialogs Selectors
