import React from "react";
import {ProfilePresentational} from "./ProfilePresentational";
import {connect} from "react-redux";
import {stateReduxType} from "../../redux/storeRedux";
import {setUserProfile} from "../../redux/profileReducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {ProfilePageDataType} from "../../redux/types";


type ProfileClassContainerPropsType = {
    profilePageData: ProfilePageDataType
    isAuth: boolean
    setUserProfile: (userId: number) => void
} & RouteComponentProps<{ userId: string }> //////////////////////////// !!!


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
        if (!this.props.isAuth) {
            return <Redirect to={"/login"}/>
        }
        return (<>
            <ProfilePresentational userProfile={this.props.profilePageData.userProfile}/>
        </>)
    }

}


let ProfileWithRouterComponent = withRouter<RouteComponentProps<{ userId: string }>, any>(ProfileClassContainer)


type MapStateToPropsType = Pick<ProfileClassContainerPropsType, "profilePageData" | "isAuth">

type MapDispatchToPropsType = Pick<ProfileClassContainerPropsType, "setUserProfile">
const mapStateToProps = (state: stateReduxType): MapStateToPropsType => {
    return {
        profilePageData: state.profilePageData,
        isAuth: state.authPartData.authData.isAuth
    }

}

const mapDispatchToProps: MapDispatchToPropsType = {
    setUserProfile
}

export const ProfileConnectContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileWithRouterComponent)