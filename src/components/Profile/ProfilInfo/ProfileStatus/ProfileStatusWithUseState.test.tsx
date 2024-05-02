import {create} from "react-test-renderer"
import {ProfileStatusWithUseState} from "../../ProfileStatusWithUseState"
import {updateUserStatus} from "redux/profileReducer"
import React from "react"

// : (status: null | string) => void

describe("ProfileStatusWithUseState component tests", () => {
  test("lala", () => {
    const component = create(
      <ProfileStatusWithUseState status={"some status"} updateUserStatus={updateUserStatus} />,
    )
    const instance = component.getInstance()
  })
})
