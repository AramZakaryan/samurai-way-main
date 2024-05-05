import React from "react"
import classes from "./Profile.module.css"
import {ProfileInfo} from "./ProfilInfo/ProfileInfo"
import {Sidebar} from "../Sidebar/Sidebar"
import {MyPostsConnectContainer} from "./MyPosts/MyPostsConnectContainer"
import {GetUserApiType} from "redux/types"
import {Dispatch} from "redux";

type ProfilePresentationalPropsType = {
    isOwner: boolean
    userProfile: null | GetUserApiType
    status: null | string
    updateUserStatus: (status: null | string) => void
    getUserStatus: (userId: number) => void
    updateUserPhoto: (image: File) => void
    updateUserProfile: (formData: any)=>Promise<number>
}


export const ProfilePresentational: React.FC<ProfilePresentationalPropsType> = (props) => {


    return (
        <>
            <Sidebar/>
            <div className={classes.content}>
                <ProfileInfo {...props} updateUserProfile={props.updateUserProfile}/>
                <MyPostsConnectContainer/>
                Main Content
            </div>
        </>
    )
}
