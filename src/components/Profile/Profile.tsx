import React from "react";
import classes from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfilInfo/ProfileInfo";
import {Sidebar} from "../Sidebar/Sidebar";

type ProfilePropsType = {
    profilePageData: {
        postsData: {
            id: number
            title: string
            likesCount: number
        }[]
        addPost: (postMessage: string) => void
        postTextAreaEnteringValue: string
        updatePostTextAreaValue: (enteringValue: string) => void
    }
}
export const Profile: React.FC<ProfilePropsType> = (props) => {
    return (<>
        <Sidebar/>
        <div className={classes.content}>
            <ProfileInfo/>
            <MyPosts profilePageData={props.profilePageData}/>
            Main Content
        </div>
    </>)
}