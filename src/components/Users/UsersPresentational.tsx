import S from "./Users.module.css"
import nomiage from "../../assets/images/noimage.png"
import React from "react"
import { NavLink } from "react-router-dom"
import { UsersPageDataType } from "redux/types"
import { Paginator } from "components/common/Paginator/Paginator"

type UsersFuncPresentType = {
  usersPageData: UsersPageDataType
  follow: (userID: number) => void
  unfollow: (userID: number) => void
  setSelectedPage: (selectedPageNumber: number) => void
}

export const UsersPresentational: React.FC<UsersFuncPresentType> = ({
  usersPageData,
  follow,
  unfollow,
  setSelectedPage,
}) => {
  return (
    <div>
      <div>coucou users</div>
      <Paginator
        totalItemsCount={usersPageData.totalUserCount}
        pageSize={usersPageData.pageSize}
        selectedPage={usersPageData.selectedPage}
        setSelectedPage={setSelectedPage}
      />

      {usersPageData.usersData.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <NavLink to={"/profile/" + u.id}>
                <img src={u.photos.small ?? nomiage} className={S.userPhoto} />
              </NavLink>
            </div>
            <div>
              {u.followed ? (
                <button
                  disabled={usersPageData.allFollowingInProgress.some((el) => el === u.id)} // = true
                  onClick={() => {
                    unfollow(u.id)
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={usersPageData.allFollowingInProgress.some((el) => el === u.id)} // = true
                  onClick={() => {
                    follow(u.id)
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div> {u.name}</div>
              <div>{u.status}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  )
}
