import React from "react";
import classes from "./Posts.module.css";

type PostPropsType = {
    message: string
}

export const Post: React.FC<PostPropsType>= (props) => {

    return (
        <div className={classes.item}>
            <img
                src={"https://static.fnac-static.com/multimedia/Images/FD/Comete/123455/CCP_IMG_1200x800/1608824.jpg"}/>
            {props.message}
            <div>
                <span>
                    like
                </span>
            </div>
        </div>
    )
}