import React from "react"
import { ProfilePresentational } from "./ProfilePresentational"
import { connect } from "react-redux"
import { stateReduxType } from "redux/storeRedux"
import { getUserStatus, setUserProfile, updateUserStatus } from "redux/profileReducer"
import { RouteComponentProps, withRouter } from "react-router-dom"
import { AuthPartDataType, ProfilePageDataType } from "redux/types"
import { compose } from "redux"
import { withAuthRedirect } from "hoc/WithAuthRedirect"

type ProfileClassContainerPropsType = {
  profilePageData: ProfilePageDataType
  authPartData: AuthPartDataType
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
      userId = this.props.authPartData.authData.userId as number
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

type MapStateToPropsType = Pick<ProfileClassContainerPropsType, "profilePageData" | "authPartData">

type MapDispatchToPropsType = Pick<
  ProfileClassContainerPropsType,
  "setUserProfile" | "getUserStatus" | "updateUserStatus"
>

const mapStateToProps = (state: stateReduxType): MapStateToPropsType => {
  return {
    profilePageData: state.profilePageData,
    authPartData: state.authPartData,
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
  // withAuthRedirect, // temporary commented
)(ProfileClassContainer)

/////////// General Structure
// ProfilePresentational >>>
//    ProfileClassContainer
//       ProfileCompose
