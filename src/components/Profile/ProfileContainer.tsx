import React from "react"
import { ProfilePresentational } from "./ProfilePresentational"
import { connect } from "react-redux"
import { stateReduxType } from "redux/storeRedux"
import { getUserStatus, setUserProfile, updateUserStatus } from "redux/profileReducer"
import { RouteComponentProps, withRouter } from "react-router-dom"
import { ProfilePageDataType } from "redux/types"
import { compose } from "redux"
import { withAuthRedirect } from "hoc/WithAuthRedirect"

type ProfileClassContainerPropsType = {
  profilePageData: ProfilePageDataType
  status: null | string
  isAuth: boolean
  setUserProfile: (userId: number) => void
  getUserStatus: (userId: number) => void
  updateUserStatus: (status: null | string) => void
} & RouteComponentProps<{ userId: string }> ////////// !!!

export class ProfileClassContainer extends React.Component<ProfileClassContainerPropsType> {
  constructor(props: ProfileClassContainerPropsType) {
    super(props)
  }

  componentDidMount() {
    let userId = +this.props.match.params.userId

    if (!userId) {
      userId = 30080 // for showing my user if no other user was selected
    }

    this.props.setUserProfile(userId)
    this.props.getUserStatus(userId)
  }

  render() {
    return (
      <>
        <ProfilePresentational
          userProfile={this.props.profilePageData.userProfile}
          status={this.props.profilePageData.status}
          updateUserStatus={this.props.updateUserStatus}
          getUserStatus={this.props.getUserStatus}
        />
      </>
    )
  }
}

type MapStateToPropsType = Pick<ProfileClassContainerPropsType, "profilePageData">

type MapDispatchToPropsType = Pick<
  ProfileClassContainerPropsType,
  "setUserProfile" | "getUserStatus" | "updateUserStatus"
>

const mapStateToProps = (state: stateReduxType): MapStateToPropsType => {
  return {
    profilePageData: state.profilePageData,
  }
}

const mapDispatchToProps: MapDispatchToPropsType = {
  setUserProfile,
  getUserStatus,
  updateUserStatus,
}

export const ProfileCompose = compose<React.ComponentType>(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
  withAuthRedirect,
)(ProfileClassContainer)

/////////// General Structure
// ProfilePresentational >>>
//    ProfileClassContainer
//       ProfileCompose
