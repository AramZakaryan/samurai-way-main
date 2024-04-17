import React from "react"
import S from "./ProfileInfo.module.css"
import { Preloader } from "../../common/Preloader/Preloader"
import { getUserApiType } from "redux/types"
import { ProfileStatusWithUseState } from "components/Profile/ProfileStatusWithUseState"
import noimage from "assets/images/noimage.png"

type ProfileInfoType = {
  userProfile: getUserApiType
  status: null | string
  updateUserStatus: (status: null | string) => void
}

export const ProfileInfo: React.FC<ProfileInfoType> = (props) => {
  if (!props.userProfile) {
    return <Preloader />
  }

  return (
    <>
      {/*<div>*/}
      {/*    <img className={S.imgLarge}*/}
      {/*         src={"https://www.mickeyshannon.com/photos/zoom/yosemite-sunset-panorama.jpg"}/>*/}
      {/*</div>*/}
      <div className={S.descriptionBlock}>
        <img className={S.imgLarge} src={props.userProfile.photos.large || noimage} />
        <div>{props.userProfile.fullName}</div>
        <div>{props.userProfile.aboutMe}</div>
        <div>
          <a href={""}>{props.userProfile.contacts.instagram}</a>
        </div>
        <div style={{ marginTop: "40px" }}>
          {/*<ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus} />*/}
          <ProfileStatusWithUseState
            status={props.status}
            updateUserStatus={props.updateUserStatus}
          />
        </div>
      </div>
    </>
  )
}
