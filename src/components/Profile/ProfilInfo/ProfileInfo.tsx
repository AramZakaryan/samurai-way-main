import React, {ChangeEvent, useState} from "react"
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
    updateUserProfile: (formData: any) => void

}

export const ProfileInfo: React.FC<ProfileInfoType> = (props) => {

    const [editMode, setEditMode] = useState(false)

    if (!props.userProfile) {
        return <Preloader/>

    }
    const imageUploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.files?.length) {
            props.updateUserPhoto(e.currentTarget.files[0])
        }
    }

    const onSubmit = (formData: any) => {
        props.updateUserProfile(formData)
        setEditMode(false)
    }

    const {photos, userId, ...initialValues} = props.userProfile


    return (
        <>
            <div className={S.descriptionBlock}>
                <img className={S.imgLarge} src={props.userProfile.photos.large || noimage} alt={"profile photo"}/>
                <div><input className={S.upload} type={"file"} onInput={imageUploadHandler}/></div>
                {props.isOwner && editMode ?
                    <ProfileDataReduxForm initialValues={initialValues} onSubmit={onSubmit}/>
                    : (<><ProfileData {...props.userProfile}/>
                        {props.isOwner && <button onClick={() => setEditMode(true)}>Edit the Profile</button>}
                    </>)
                }

                <div className={S.profileStatusContainer}>
                    <ProfileStatusWithUseState
                        isOwner={props.isOwner}
                        status={props.status}
                        updateUserStatus={props.updateUserStatus}
                    />
                </div>
            </div>
        </>
    )
}
