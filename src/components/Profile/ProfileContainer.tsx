import React from "react";
import {ProfilePresentational} from "./ProfilePresentational";
import {connect} from "react-redux";
import {stateReduxType} from "../../redux/storeRedux";
import {setUserProfile} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {ProfilePageDataType} from "../../redux/types";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";


type ProfileClassContainerPropsType = {
    profilePageData: ProfilePageDataType
    isAuth: boolean
    setUserProfile: (userId: number) => void
} & RouteComponentProps<{ userId: string }> ////////// !!!

export class ProfileClassContainer extends React.Component <ProfileClassContainerPropsType> {

    constructor(props: ProfileClassContainerPropsType) {
        super(props);
    }

    componentDidMount() {

        let userId = +this.props.match.params.userId

        if (!userId) {
            userId = 30080 // for showing my user if no other user was selected
        }

        this.props.setUserProfile(userId)

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
    return {
        profilePageData: state.profilePageData,
    }
}

const mapDispatchToProps: MapDispatchToPropsType = {
    setUserProfile
}

export const ProfileCompose =
    compose<React.ComponentType>(
        connect(mapStateToProps, mapDispatchToProps),
        withRouter,
        withAuthRedirect)
    (ProfileClassContainer)

/////////// General Structure
// ProfilePresentational >>>
//    ProfileClassContainer
//       ProfileCompose
