import { DialogsPresentational, DialogsPresentationalPropsType } from "./DialogsPresentational"
import { connect } from "react-redux"
import { compose, Dispatch } from "redux"
import React from "react"
import { stateReduxType } from "redux/storeRedux"
import { addMessageAC } from "redux/dialogsReducer"
import { withAuthRedirect } from "hoc/WithAuthRedirect"

type MapStateToPropsType = Pick<DialogsPresentationalPropsType, "dialogsPageData">

type MapDispatchToPropsType = Pick<DialogsPresentationalPropsType, "addMessage">

const mapStateToProps = (state: stateReduxType): MapStateToPropsType => {
  return {
    dialogsPageData: state.dialogsPageData,
  }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
  return {
    addMessage: (newMessageBody: string) => {
      dispatch(addMessageAC(newMessageBody))
    },
  }
}

const DialogsCompose = compose<React.ComponentType>(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect,
)(DialogsPresentational)

export default DialogsCompose

/////////// General Structure
// DialogsPresentational >>>
//    DialogsCompose
