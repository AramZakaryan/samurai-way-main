import React, { useEffect, useState } from "react"

type ProfileStatusPropsType = {
  status: null | string
  updateUserStatus: (status: null | string) => void
}

export const ProfileStatusWithUseState: React.FC<ProfileStatusPropsType> = (props) => {
  const [editMode, setEditMode] = useState(false)
  const [status, setStatus] = useState<null | string>("")

  useEffect(() => {
    setStatus(props.status)
  }, [props.status])

  const activateEditModeHandler = () => {
    setEditMode(true)
  }

  const deactivateEditModeHandler = (ev: React.FocusEvent<HTMLInputElement>) => {
    setEditMode(false)
    props.updateUserStatus(status)
  }

  const inputOnChangeHandler = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(ev.currentTarget.value)
  }

  return (
      <div>
        <b>status: </b>
        {!editMode ? (
            // <div>
          <span onDoubleClick={activateEditModeHandler}>
            {props.status || "There is no status"}
          </span>
            // </div>
        ) : (
            // <div>
            //   <input value={this.state.value?.toString()}
              <input
                  value={status?.toString()}
                  onBlur={deactivateEditModeHandler}
                  autoFocus={true}
                  onChange={inputOnChangeHandler}
              />
            // </div>
        )}
      </div>
  )
}
