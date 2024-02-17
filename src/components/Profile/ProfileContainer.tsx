import React from "react";
import {ProfilePresentational} from "./ProfilePresentational";
import axios from "axios";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {stateReduxType} from "../../redux/storeRedux";
import {setUserProfile, UserProfileType} from "../../redux/profileReducer";
import {UsersClassContainerPropsType} from "../Users/UsersContainer";

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
        axios.get<UserProfileType>(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => this.props.setUserProfile(response.data))
    }

    render() {
        return (<>
            <ProfilePresentational {...this.props.profilePageData.userProfile}/>
        </>)
    }

}

type MapStateToPropsType = Pick<ProfileClassContainerPropsType, "profilePageData">


const mapStateToProps = (state: stateReduxType):MapStateToPropsType => {
    return {profilePageData:state.profilePageData}
}

const mapDispatchToProps= {
    setUserProfile
}

export const ProfileConnectContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileClassContainer)