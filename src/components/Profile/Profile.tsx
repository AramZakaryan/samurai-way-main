import React from "react";
import classes from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfilInfo/ProfileInfo";

export const Profile: React.FC = () => {
    return (
        <div className={classes.content}>
            <ProfileInfo/>
            <MyPosts/>
            Main Content
        </div>
    )
}