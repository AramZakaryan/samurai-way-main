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
        postTextAreaEnteringValue: string
    }
    addPost: (postMessage: string) => void
    updatePostTextAreaValue: (enteringValue: string) => void
}
export const Profile: React.FC<ProfilePropsType> = (props) => {
    return (<>
        <Sidebar/>
        <div className={classes.content}>
            <ProfileInfo/>
            <MyPosts profilePageData={props.profilePageData}
                     addPost={props.addPost}
                     updatePostTextAreaValue={props.updatePostTextAreaValue}
            />
            Main Content
        </div>
    </>)
}