import React from "react"
import {ProfilePresentational} from "./ProfilePresentational"
import {connect} from "react-redux"
import {stateReduxType} from "redux/storeRedux"
import {getUserStatus, updateUserProfile, setUserProfile, updateUserPhoto, updateUserStatus} from "redux/profileReducer"
import {RouteComponentProps, withRouter} from "react-router-dom"
import {AuthPartDataType, ProfilePageDataType} from "redux/types"
import {compose, Dispatch} from "redux"
import {withAuthRedirect} from "hoc/WithAuthRedirect"

type ProfileClassContainerPropsType = {
    profilePageData: ProfilePageDataType
    authPartData: AuthPartDataType
    status: null | string
    isAuth: boolean
    setUserProfile: (userId: number) => void
    getUserStatus: (userId: number) => void
    updateUserStatus: (status: null | string) => void
    updateUserPhoto: (image: File )=>void
    updateUserProfile: (formData: any)=>any
} & RouteComponentProps<{ userId: string }> ////////// !!!

export class ProfileClassContainer extends React.PureComponent<ProfileClassContainerPropsType> {
    constructor(props: ProfileClassContainerPropsType) {
        super(props)
    }

    // shouldComponentUpdate(nextProps: any, nextState: any) {
    //   return nextProps != this.props || nextState != this.state
    // }

    refreshProfile() {
        let userId = +this.props.match.params.userId

        if (!userId) {
            userId = this.props.authPartData.authData.userId as number
            if (!userId) {
                this.props.history.push("/login")
            }
        }

        this.props.setUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<ProfileClassContainerPropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }

    }


    render() {
        return (
            <>
                <ProfilePresentational
                    isOwner={!this.props.match.params.userId}
                    userProfile={this.props.profilePageData.userProfile}
                    status={this.props.profilePageData.status}
                    updateUserStatus={this.props.updateUserStatus}
                    updateUserPhoto={this.props.updateUserPhoto}
                    getUserStatus={this.props.getUserStatus}
                    updateUserProfile={this.props.updateUserProfile}
                />
            </>
        )
    }
}

type MapStateToPropsType = Pick<ProfileClassContainerPropsType, "profilePageData" | "authPartData">

type MapDispatchToPropsType = Pick<
    ProfileClassContainerPropsType,
    "setUserProfile" | "getUserStatus" | "updateUserStatus" | "updateUserPhoto" | "updateUserProfile"
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
    updateUserPhoto,
    updateUserProfile:updateUserProfile
}

export const ProfileCompose = compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    // withAuthRedirect, // temporary commented and redirect organised by "history.push"
)(ProfileClassContainer)

