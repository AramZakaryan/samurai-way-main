import React from "react";
import {GetUserApiType} from "../../../../redux/types";
import S from "./ProfileData.module.css";

type Props = GetUserApiType


export const ProfileData = (props: Props) => {
    return (<div style={{marginTop: "20px"}}>
        <div><b>name: </b>{props.fullName}</div>
        <div><b>about me: </b>{props.aboutMe}</div>
        <div><b>looking for a job: </b>{props.lookingForAJob ? "yes" : "no"}</div>
        <div><b>description of the job looking for: </b>{props.lookingForAJobDescription}</div>
        <div className={S.contactsContainer}>
            <b>contacts: </b>
            <div className={S.contacts}>
                {Object.entries(props.contacts).map(([k, v]) => <div key={k}><b>{k}: </b>{v}</div>)}
                {/*{Object.keys(props).map(k => <div key={k}><b>{k}: </b>{props[k as keyof typeof props]}</div>)}*/}
            </div>
        </div>
    </div>)
}


