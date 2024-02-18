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
    setUserProfile: (userProfile: UserProfileType)=>void
}


export class ProfileClassContainer extends React.Component <ProfileClassContainerPropsType> {

    constructor(props: ProfileClassContainerPropsType) {
        super(props);
    }

    componentDidMount() {
        axios.get<UserProfileType>(`https://social-network.samuraijs.com/api/1.0/profile/10`)
            .then(response => this.props.setUserProfile(response.data))
    }

    render() {
        console.log(this.props)
        return (<>
            <ProfilePresentational userProfile={this.props.profilePageData.userProfile}/>
        </>)
    }

}

type MapStateToPropsType = Pick<ProfileClassContainerPropsType, "profilePageData">
type MapDispatchToPropsType = Pick<ProfileClassContainerPropsType, "setUserProfile">


const mapStateToProps = (state: stateReduxType):MapStateToPropsType => {
    return {profilePageData:state.profilePageData}
}

const mapDispatchToProps:MapDispatchToPropsType= {
    setUserProfile
}

let ProfileWithRouterComponent = withRouter<RouteComponentProps<{ userId: string }> & ProfileClassContainerPropsType,any>(ProfileClassContainer)

export const ProfileConnectContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileWithRouterComponent)