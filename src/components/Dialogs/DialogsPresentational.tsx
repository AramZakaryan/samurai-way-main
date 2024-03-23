import React, { ChangeEvent } from "react"
import S from "./Dialogs.module.css"
import { DialogItem } from "./DialogItem/DialogItem"
import { Message } from "./Messages/Message"
import { Sidebar } from "../Sidebar/Sidebar"
import { DialogsPageDataType } from "redux/types"
import { Field, InjectedFormProps, reduxForm } from "redux-form"

type FormDatatype = {
  newMessageBody: string
}

const AddMessageForm: React.FC<InjectedFormProps<FormDatatype>> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={"textarea"}
          // ref={newPostElement}
          placeholder={"Enter your message here!"}
          // value={props.dialogsPageData.messageTextareaEnteringValue}
          // onChange={textareaOnChangeHandler}
          // onKeyDown={(ev) => ev.key === "Enter" && addMessageHandler()}
        />
      </div>
      <div>
        <button type={"submit"}>Add Message</button>
      </div>
    </form>
  )
}

const AddMessageReduxForm = reduxForm<FormDatatype>({ form: "addMessageForm" })(AddMessageForm)

export type DialogsPresentationalPropsType = {
  dialogsPageData: DialogsPageDataType
  isAuth: boolean
  addMessage: (newMessageBody: string) => void
  // textareaOnChangeHandler: (enteringValue: string) => void
}

export const DialogsPresentational: React.FC<DialogsPresentationalPropsType> = (props) => {
  let dialogs = props.dialogsPageData.dialogsData.map((el) => (
    <DialogItem key={el.id} name={el.name} id={el.id} />
  ))

  let messages = props.dialogsPageData.messagesData.map((msg) => (
    <Message key={msg.id} message={msg.title} />
  ))

  let newPostElement = React.createRef<HTMLTextAreaElement>()

  // const addMessageHandler = () => {
  //   props.addMessage()
  // }
  //
  // const textareaOnChangeHandler = (ev: ChangeEvent<HTMLTextAreaElement>) => {
  //   props.textareaOnChangeHandler(ev.currentTarget.value)
  // }
  const addNewMessageHandler = (data: FormDatatype) => {
    props.addMessage(data.newMessageBody)
  }

  return (
    <>
      <Sidebar />
      <div className={S.dialogs}>
        <div className={S.dialogsItems}>{dialogs}</div>
        <div className={S.messages}>
          {messages}
          <div>
            <AddMessageReduxForm onSubmit={addNewMessageHandler} />
          </div>
        </div>
      </div>
    </>
  )
}
