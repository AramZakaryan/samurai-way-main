import React from "react";
import classes from "./Profile.module.css"
import {ProfileInfo} from "./ProfilInfo/ProfileInfo";
import {Sidebar} from "../Sidebar/Sidebar";
import {MyPostsConnectContainer} from "./MyPosts/MyPostsConnectContainer";

export const Profile: React.FC = () => {
    return (<>
        <Sidebar/>
        <div className={classes.content}>
            <ProfileInfo/>
            <MyPostsConnectContainer/>
            Main Content
        </div>
    </>)
}