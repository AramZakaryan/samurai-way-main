import React from "react";
import S from "./ProfileInfo.module.css";
import classes from "../Profile.module.css";
import {UserProfileType} from "../../../redux/profileReducer";


type ProfileInfoType = UserProfileType

export const ProfileInfo: React.FC<ProfileInfoType> = (props) => {
    return (<>
            <div>

                <img className={S.imgLarge}
                     src={"https://www.mickeyshannon.com/photos/zoom/yosemite-sunset-panorama.jpg"}/>

            </div>
            <div className={S.descriptionBlock}>
                <img className={S.imgSmall}
                     src={"https://w0.peakpx.com/wallpaper/121/527/HD-wallpaper-joker-2016-awesome-beautiful-love.jpg"}/>
                Avatar and description
            </div>
        </>
    )
}