import React from "react";
import S from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

export type DialogItemPropsType = {
    name: string
    id: number
}
export const DialogItem: React.FC<DialogItemPropsType> = (props) => {
    return (
        <div className={S.dialog}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}