import React from "react"
import classes from "./Profile.module.css"
import { ProfileInfo } from "./ProfilInfo/ProfileInfo"
import { Sidebar } from "../Sidebar/Sidebar"
import { MyPostsConnectContainer } from "./MyPosts/MyPostsConnectContainer"
import { getUserApiType } from "redux/types"

type ProfilePresentationalPropsType = {
    isOwner:boolean
  userProfile: getUserApiType
  status: null | string
  updateUserStatus: (status: null | string) => void
  getUserStatus: (userId: number) => void
}

export const ProfilePresentational: React.FC<ProfilePresentationalPropsType> = (props) => {
  return (
    <>
      <Sidebar />
      <div className={classes.content}>
        <ProfileInfo {...props} />
        <MyPostsConnectContainer />
        Main Content
      </div>
    </>
  )
}
