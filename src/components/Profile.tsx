import React from "react";

export const Profile: React.FC= () => {
    return(
        <div className={"content"}>
            <div>
                <img className={"imgLarge"}
                     src={"https://www.mickeyshannon.com/photos/zoom/yosemite-sunset-panorama.jpg"}/>
            </div>
            <div>

                <img className={"imgSmall"}
                     src={"https://w0.peakpx.com/wallpaper/121/527/HD-wallpaper-joker-2016-awesome-beautiful-love.jpg"}/>
                Avatar and description
            </div>
            <div>
                My Posts
                <div>
                    New Post
                </div>
                <div>
                    Post 1
                </div>
                <div>
                    Post 2
                </div>

            </div>
            Main Content
        </div>
    )
}