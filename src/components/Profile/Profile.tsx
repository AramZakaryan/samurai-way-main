import React from "react";
import classes from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfilInfo/ProfileInfo";

type ProfilePropsType = {
    postsData: {
        id: number
        message: string
        likesCount: number
    }[]
}
export const Profile: React.FC <ProfilePropsType>= (props) => {
    return (
        <div className={classes.content}>
            <ProfileInfo/>
            <MyPosts postsData={props.postsData}/>
            Main Content
        </div>
    )
}