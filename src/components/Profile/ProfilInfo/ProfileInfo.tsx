import React, {ChangeEvent} from "react"
import S from "./ProfileInfo.module.css"
import {Preloader} from "../../common/Preloader/Preloader"
import {GetUserApiType} from "redux/types"
import {ProfileStatusWithUseState} from "components/Profile/ProfileStatusWithUseState"
import noimage from "../../../assets/images/noimage.png"
import {ProfileData} from "./ProfileData/ProfileData";
import {ProfileDataReduxForm} from "./ProfileDataReduxForm/ProfileDataReduxForm";

type ProfileInfoType = {
    isOwner: boolean
    userProfile: null | GetUserApiType
    status: null | string
    updateUserStatus: (status: null | string) => void
    updateUserPhoto: (image: File) => void

}

export const ProfileInfo: React.FC<ProfileInfoType> = (props) => {
    if (!props.userProfile) {
        return <Preloader/>
    }

    const imageUploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.files?.length) {
            props.updateUserPhoto(e.currentTarget.files[0])
        }
    }

    return (
        <>
            <div className={S.descriptionBlock}>
                <img className={S.imgLarge} src={props.userProfile.photos.large || noimage} alt={"profile photo"}/>
                <div><input className={S.upload} type={"file"} onInput={imageUploadHandler}/></div>
                {/*<ProfileData {...props.userProfile}/>*/}
                <ProfileDataReduxForm initialValues={props.userProfile}/>
                <div className={S.profileStatusContainer}>
                    <ProfileStatusWithUseState
                        status={props.status}
                        updateUserStatus={props.updateUserStatus}
                    />
                </div>
            </div>
        </>
    )
}
