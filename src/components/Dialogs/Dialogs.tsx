import React, {ChangeEvent} from "react";
import S from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Messages/Message";
import {Sidebar} from "../Sidebar/Sidebar";

type DialogsPropsType = {
    dialogsPageData: {
        dialogsData: {
            id: number
            name: string
        }[]
        messagesData: {
            id: number
            title: string
        } []
        addMessage: () => void
        messageTextareaEnteringValue:string
        updateMessageTextareaValue: (enteringValue: string)=>void
    }
}


export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let dialogs = props.dialogsPageData.dialogsData.map(el =>
        <DialogItem key={el.id} name={el.name} id={el.id}/>
    )

    let messages = props.dialogsPageData.messagesData.map(msg =>
        <Message key={msg.id} message={msg.title}/>
    )

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addMessageHandler = ()=>{
        props.dialogsPageData.addMessage()
    }

    const textareaOnChangeHandler = (ev:ChangeEvent<HTMLTextAreaElement>)=>{
        props.dialogsPageData.updateMessageTextareaValue(ev.currentTarget.value)
    }

    return (<>
            <Sidebar/>
        <div className={S.dialogs}>

            <div className={S.dialogsItems}>
                {dialogs}
            </div>

            <div className={S.messages}>
                {messages}
                <div>
                    <div>
                        <textarea ref={newPostElement}
                                  value={props.dialogsPageData.messageTextareaEnteringValue}
                                  onChange={textareaOnChangeHandler}
                                  onKeyDown={ev=>ev.key==="Enter"&&addMessageHandler()}
                        />
                    </div>
                    <div>
                        <button onClick={addMessageHandler}>Add Message</button>
                    </div>
                </div>
            </div>


        </div>
        </>
    )
}