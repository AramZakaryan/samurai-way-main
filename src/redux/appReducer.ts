import { AppActionsType } from "redux/types"
import { setUserData } from "redux/authReducer"
import { AppThunkActionType } from "redux/storeRedux"

const INITIALIZED_SUCCESSFULLY = "INITIALIZED_SUCCESSFULLY"

export const initialState: appStateType = {
  initialized: false,
}

type appStateType = {
  initialized: boolean
}

export const appReducer = (
  state: appStateType = initialState,
  action: AppActionsType,
): appStateType => {
  switch (action.type) {
    case "INITIALIZED_SUCCESSFULLY":
      return { ...state, initialized: true }
    default:
      return state
  }
}

/** P.S.(Aram) initializedSuccessfullyAC ACTION CREATOR
 */
export const initializedSuccessfullyAC = () =>
  ({
    type: INITIALIZED_SUCCESSFULLY,
  }) as const

// THUNK CREATORS

/** P.S.(Aram) initializeApp THUNK CREATOR
 */
export const initializeApp = (): AppThunkActionType => (dispatch) => {
  dispatch(setUserData()).then(() => dispatch(initializedSuccessfullyAC()))
}
