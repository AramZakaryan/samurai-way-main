import React from "react"
import S from "./Message.module.css"

export type MessagePropsType = {
  message: string
}
export const Message: React.FC<MessagePropsType> = (props) => {
  return (
    <div className={S.message}>
      <img
        src={
          "https://static.fnac-static.com/multimedia/Images/FD/Comete/123455/CCP_IMG_1200x800/1608824.jpg"
        }
      />
      {props.message}
    </div>
  )
}
