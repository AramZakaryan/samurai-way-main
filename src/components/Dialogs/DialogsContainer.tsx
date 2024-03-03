import {addMessageAC, updateMessageTextareaValueAC} from "../../redux/dialogsReducer";
import {DialogsPresentational, DialogsPresentationalPropsType} from "./DialogsPresentational";
import {connect} from "react-redux";
import {stateReduxType} from "../../redux/storeRedux";
import {Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";



////////// DialogsWithAuthRedirectComponent

const DialogsWithAuthRedirectComponent = withAuthRedirect(DialogsPresentational)



////////// DialogsContainer

type MapStateToPropsType = Pick<DialogsPresentationalPropsType, "dialogsPageData">

type MapDispatchToPropsType = Pick<DialogsPresentationalPropsType, "addMessage" | "textareaOnChangeHandler">

const mapStateToProps = (state: stateReduxType): MapStateToPropsType => {
    return {
        dialogsPageData: state.dialogsPageData,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addMessage: () => {
            dispatch(addMessageAC())
        },
        textareaOnChangeHandler: (enteringValue: string) => {
            dispatch(updateMessageTextareaValueAC(enteringValue))
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(DialogsWithAuthRedirectComponent)



// General Structure
// DialogsPresentational >>>
//    DialogsWithAuthRedirectComponent >>>
//       DialogsContainer


