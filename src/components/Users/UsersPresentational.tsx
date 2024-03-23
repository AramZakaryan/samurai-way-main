import S from "./Users.module.css"
import nomiage from "../../assets/images/noimage.png"
import React from "react"
import { NavLink } from "react-router-dom"
import { UsersPageDataType } from "../../redux/types"

type UsersFuncPresentType = {
  usersPageData: UsersPageDataType
  follow: (userID: number) => void
  unfollow: (userID: number) => void
  setSelectedPage: (selectedPageNumber: number) => void
}

export function UsersPresentational(props: UsersFuncPresentType) {
  let pageCount = Math.ceil(props.usersPageData.totalUserCount / props.usersPageData.pageSize)
  let pages = []
  for (let i = 1; i <= Math.min(pageCount, 10); i++) {
    pages.push(i)
  }

  return (
    <div>
      <div>coucou users</div>
      <div>
        {pages.map((p) => (
          <span
            key={p}
            className={props.usersPageData.selectedPage === p ? S.selectedPage : ""}
            onClick={() => props.setSelectedPage(p)}
          >
            {" "}
            {p}{" "}
          </span>
        ))}
        {pageCount > 10 && <span> ... {pageCount} </span>}
      </div>

      {props.usersPageData.usersData.map((u) => (
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
                  disabled={props.usersPageData.allFollowingInProgress.some((el) => el === u.id)} // = true
                  onClick={() => {
                    props.unfollow(u.id)
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={props.usersPageData.allFollowingInProgress.some((el) => el === u.id)} // = true
                  onClick={() => {
                    props.follow(u.id)
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
