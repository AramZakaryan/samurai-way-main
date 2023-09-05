import React from "react";
import S from "../Dialogs.module.css";

export type MessagePropsType = {
    message: string
}
export const Message: React.FC<MessagePropsType> = (props) => {
    return (
        <div className={S.message}>
            {props.message}
        </div>
    )
}