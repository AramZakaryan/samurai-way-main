import React, {ChangeEvent} from "react";
import S from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Messages/Message";
import {Sidebar} from "../Sidebar/Sidebar";
import {DialogsPageDataType} from "../../redux/types";
import {Redirect} from "react-router-dom";


export type DialogsPresentationalPropsType = {
    dialogsPageData: DialogsPageDataType
    isAuth: boolean
    addMessage: () => void
    textareaOnChangeHandler: (enteringValue: string) => void
}


export const DialogsPresentational: React.FC<DialogsPresentationalPropsType> = (props) => {

    let dialogs = props.dialogsPageData.dialogsData.map(el =>
        <DialogItem key={el.id} name={el.name} id={el.id}/>
    )

    let messages = props.dialogsPageData.messagesData.map(msg =>
        <Message key={msg.id} message={msg.title}/>
    )

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addMessageHandler = () => {
        // props.dispatch(addMessageAC())
        props.addMessage()
    }

    const textareaOnChangeHandler = (ev: ChangeEvent<HTMLTextAreaElement>) => {
        // props.dispatch(updateMessageTextareaValueAC(ev.currentTarget.value))
        props.textareaOnChangeHandler(ev.currentTarget.value)
    }

    // if (!props.isAuth) {
    //     return <Redirect to={"/login"}/>
    // }

    return (<>
            <Sidebar/>
            {/*<div>isAuth: {props.isAuth ? "Yes" : "No"}</div>*/}
            <div className={S.dialogs}>

                <div className={S.dialogsItems}>
                    {dialogs}
                </div>

                <div className={S.messages}>
                    {messages}
                    <div>
                        <div>
                        <textarea ref={newPostElement}
                                  placeholder={"Enter your message here!"}
                                  value={props.dialogsPageData.messageTextareaEnteringValue}
                                  onChange={textareaOnChangeHandler}
                                  onKeyDown={ev => ev.key === "Enter" && addMessageHandler()}
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