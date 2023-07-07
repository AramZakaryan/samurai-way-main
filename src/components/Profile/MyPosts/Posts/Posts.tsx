import React from "react";
import classes from "./Posts.module.css";

export const Post = () => {

    return (
        <div className={classes.item}>
            <img
                src={"https://static.fnac-static.com/multimedia/Images/FD/Comete/123455/CCP_IMG_1200x800/1608824.jpg"}/>
            Post 1
            <div>
                <span>
                    like
                </span>
            </div>
        </div>
    )
}