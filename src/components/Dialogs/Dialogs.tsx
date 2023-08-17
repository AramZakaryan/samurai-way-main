import React from "react";
import S from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import exp from "constants";


export type DialogItemPropsType = {
    name: string
    id: number
}

export type MessagePropsType = {
    message: string
}

export const DialogItem: React.FC<DialogItemPropsType> = (props) => {
    return (
        <div className={S.dialog}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

export const Message: React.FC<MessagePropsType> = (props) => {
    return (
        <div className={S.messag}>
            {props.message}
        </div>
    )
}


export const Dialogs = () => {

    return (
        <div className={S.dialogs}>
            <div className={S.dialogsItems}>
                <DialogItem name={"Gagulik"} id={1}/>
                <DialogItem name={"Vazgenchik"} id={2}/>
                <DialogItem name={"Serobik"} id={3}/>
                <DialogItem name={"Ghukasik"} id={4}/>
            </div>
            <div className={S.messages}>
                <Message message={"Hi!"}/>
                <Message message={"How are you?"}/>
                <Message message={"Yo!"}/>

            </div>

        </div>

    )
}