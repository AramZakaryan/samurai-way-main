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


export class ProfileClassContainer extends React.Component <ProfileClassContainerPropsType> {

    constructor(props: ProfileClassContainerPropsType) {
        super(props);
    }

    componentDidMount() {
        let userId=this.props.match.params.userId
        if(!userId){userId="30080"}
        axios.get<UserProfileType>(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
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