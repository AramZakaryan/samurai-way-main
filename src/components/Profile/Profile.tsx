import React from "react";
import classes from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfilInfo/ProfileInfo";
import {Sidebar} from "../Sidebar/Sidebar";

type ProfilePropsType = {
    data: {
    postsData:{
        id: number
        message: string
        likesCount: number
    }[]
    }
    addPost: (postMessage: string)=>void
}
export const Profile: React.FC <ProfilePropsType>= (props) => {
    return (<>
        <Sidebar/>
        <div className={classes.content}>
            <ProfileInfo/>
            <MyPosts postsData={props.data.postsData} addPost={props.addPost}/>
            Main Content
        </div>
    </>)
}