import React from "react";
import classes from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfilInfo/ProfileInfo";
import {Sidebar} from "../Sidebar/Sidebar";
import {dispatchType} from "../../redux/store";
// import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {storeReduxType} from "../../redux/storeRedux";
import {MyPostsConnectContainer} from "./MyPosts/MyPostsConnectContainer";

// type ProfilePropsType = {
//     profilePageData: {
//         postsData: {
//             id: number
//             title: string
//             likesCount: number
//         }[]
//         postTextAreaEnteringValue: string
//     }
//     dispatch: dispatchType
// }

// type ProfilePropsType = {
//     store: storeReduxType
// }

// export const Profile: React.FC<ProfilePropsType> = (props) => {
export const Profile: React.FC = () => {
    return (<>
        <Sidebar/>
        <div className={classes.content}>
            <ProfileInfo/>
            {/*<MyPosts profilePageData={props.profilePageData}*/}
            {/*         dispatch={props.dispatch}*/}
            {/*/>*/}
            {/*<MyPostsContainer profilePageData={props.profilePageData}*/}
            {/*         dispatch={props.dispatch}*/}
            {/*/>*/}
            {/*<MyPostsContainer store={props.store}*/}
            {/*/>*/}
            <MyPostsConnectContainer/>
            Main Content
        </div>
    </>)
}