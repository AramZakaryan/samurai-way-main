import React from "react";
import S from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Messages/Message";

type DialogsPropsType = {
    data: {
        dialogsData: {
            id: number
            name: string
        }[]
        messagesData: {
            id: number
            message: string
        } []
    }
}


export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let dialogs = props.data.dialogsData.map(el =>
        <DialogItem name={el.name} id={el.id}/>
    )

    let messages = props.data.messagesData.map(msg =>
        <Message message={msg.message}/>
    )

    return (
        <div className={S.dialogs}>
            <div className={S.dialogsItems}>
                {dialogs}
            </div>
            <div className={S.messages}>
                {messages}
            </div>

        </div>

    )
}