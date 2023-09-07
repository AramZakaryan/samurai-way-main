import React from "react";
import S from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";

export type DialogItemPropsType = {
    name: string
    id: number
}
export const DialogItem: React.FC<DialogItemPropsType> = (props) => {
    return (
        <div className={S.dialog}>
            <NavLink to={"/dialogs/" + props.id}>
                <img
                    src={"https://static.fnac-static.com/multimedia/Images/FD/Comete/123455/CCP_IMG_1200x800/1608824.jpg"}
                />
                {props.name}
            </NavLink>
        </div>
    )
}