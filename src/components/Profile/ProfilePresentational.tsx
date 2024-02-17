import React from "react";
import classes from "./Profile.module.css"
import {ProfileInfo} from "./ProfilInfo/ProfileInfo";
import {Sidebar} from "../Sidebar/Sidebar";
import {MyPostsConnectContainer} from "./MyPosts/MyPostsConnectContainer";
import {UserProfileType} from "../../redux/profileReducer";

type ProfilePresentationalPropsType = UserProfileType

export const ProfilePresentational: React.FC <ProfilePresentationalPropsType>= (props) => {
    return (<>
        <Sidebar/>
        <div className={classes.content}>
            <ProfileInfo {...props}/>
            <MyPostsConnectContainer/>
            Main Content
        </div>
    </>)
}