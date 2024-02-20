import React, {ComponentClass, ComponentType} from "react";
import {ProfilePresentational} from "./ProfilePresentational";
import axios from "axios";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {stateReduxType} from "../../redux/storeRedux";
import {setUserProfile, UserProfileType} from "../../redux/profileReducer";
import {UsersClassContainerPropsType} from "../Users/UsersContainer";
import {RouteComponentProps, withRouter} from "react-router-dom";


type ProfileClassContainerPropsType = {
    profilePageData: {
        postsData: {
            id: number
            title: string
            likesCount: number
        } []
        userProfile: UserProfileType
        postTextAreaEnteringValue: string
    }
    setUserProfile: (userProfile: UserProfileType) => void
} & RouteComponentProps<{ userId: string }>

// type UserResponseFromApiType = {
//     aboutMe: null | string
//     contacts: {
//         facebook: null | string
//         website: null | string
//         vk: null | string
//         twitter: null | string
//         instagram: null | string
//         youtube: null | string
//         github: null | string
//         mainLink: null | string
//     }
//     lookingForAJob: boolean
//     lookingForAJobDescription: null | string
//     fullName: null | string
//     userId: number
//     photos: {
//         small: null | string
//         large: null | string
//     }
// }

type UserResponseFromApiType = UserProfileType


export class ProfileClassContainer extends React.Component <ProfileClassContainerPropsType> {

    constructor(props: ProfileClassContainerPropsType) {
        super(props);
    }

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = "30080"
        }
        axios.get<UserResponseFromApiType>(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => this.props.setUserProfile(response.data))
    }

    render() {
        return (<>
            <ProfilePresentational userProfile={this.props.profilePageData.userProfile}/>
        </>)
    }

}

type MapStateToPropsType = Pick<ProfileClassContainerPropsType, "profilePageData">
type MapDispatchToPropsType = Pick<ProfileClassContainerPropsType, "setUserProfile">


const mapStateToProps = (state: stateReduxType): MapStateToPropsType => {
    return {profilePageData: state.profilePageData}
}

const mapDispatchToProps: MapDispatchToPropsType = {
    setUserProfile
}

let ProfileWithRouterComponent = withRouter<RouteComponentProps<{ userId: string }>, any>(ProfileClassContainer)

export const ProfileConnectContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileWithRouterComponent)