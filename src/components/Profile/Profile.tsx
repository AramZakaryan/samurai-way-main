import React from "react";
import classes from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile: React.FC = () => {
    return (
        <div className={classes.content}>
            <div>
                <img className={classes.imgLarge}
                     src={"https://www.mickeyshannon.com/photos/zoom/yosemite-sunset-panorama.jpg"}/>
            </div>
            <div>

                <img className={classes.imgSmall}
                     src={"https://w0.peakpx.com/wallpaper/121/527/HD-wallpaper-joker-2016-awesome-beautiful-love.jpg"}/>
                Avatar and description
            </div>
            <MyPosts/>
            Main Content
        </div>
    )
}