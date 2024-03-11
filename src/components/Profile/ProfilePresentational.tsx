import React from "react";
import classes from "./Profile.module.css"
import {ProfileInfo} from "./ProfilInfo/ProfileInfo";
import {Sidebar} from "../Sidebar/Sidebar";
import {MyPostsConnectContainer} from "./MyPosts/MyPostsConnectContainer";
import {getUserApiType, ProfilePageDataType} from "../../redux/types";
import {Redirect} from "react-router-dom";
import {updateUserStatus} from "../../redux/profileReducer";

type ProfilePresentationalPropsType = {
    userProfile: getUserApiType
    status:null|string
    updateUserStatus: (status: null | string)=>void
    getUserStatus: (userId: number) => void

}

export const ProfilePresentational: React.FC<ProfilePresentationalPropsType> = (props) => {

    return (<>
        <Sidebar/>
        <div className={classes.content}>
            <ProfileInfo {...props}/>
            <MyPostsConnectContainer/>
            Main Content
        </div>
    </>)
}