import S from "./Users.module.css";
import nomiage from "../../assets/images/noimage.png";
import React from "react";
import {NavLink} from "react-router-dom";
import axios from "axios";


type UsersFuncPresentType = {
    usersPageData: {
        usersData: {
            name: string
            id: number
            uniqueUrlName: string | null
            photos: {
                small: string | null
                large: string | null
            }
            status: string
            followed: boolean
        }[]
        pageSize: number
        totalUserCount: number
        selectedPage: number
    }
    // setNewUsers: (newUsers: {
    //     name: string
    //     id: number
    //     uniqueUrlName: string | null
    //     photos: {
    //         small: string | null
    //         large: string | null
    //     }
    //     status: string
    //     followed: boolean
    // }[]) => void
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setSelectedPage: (selectedPageNumber: number) => void
    // setTotalUserCount: (totalUserCount: number) => void

}

type FollowUnfollowUserResponseFromApiType = {
    data: {}
    messages: string[]
    fieldsErrors: string[]
    resultCode: number
}


export function UsersPresent(props: UsersFuncPresentType) {

    let pageCount = Math.ceil(props.usersPageData.totalUserCount / props.usersPageData.pageSize)
    let pages = []
    for (let i = 1; i <= Math.min(pageCount, 10); i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>coucou users</div>
            <div>
                {pages.map(p =>
                    <span key={p}
                          className={props.usersPageData.selectedPage === p ? S.selectedPage : ""}
                          onClick={() => props.setSelectedPage(p)}
                    > {p} </span>)}
                {pageCount > 10 && <span> ... {pageCount} </span>}
            </div>

            {/*<button onClick={this.getUsers}>Get Users</button>*/}

            {props.usersPageData.usersData.map(u =>
                <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={"/profile/" + u.id}>
                            <img src={u.photos.small ?? nomiage} className={S.userPhoto}/>
                                </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    axios.delete<FollowUnfollowUserResponseFromApiType>(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                        {
                                            withCredentials: true,
                                            headers: {"API-KEY": "3485684c-f79f-42a9-a6c9-e22cde9c6d79"}
                                        })
                                        .then(res => {
                                            if (res.data.resultCode == 0) {
                                                props.unfollow(u.id)
                                            }
                                        })
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    axios.post<FollowUnfollowUserResponseFromApiType>(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                        {}, {
                                            withCredentials: true,
                                            headers: {"API-KEY": "3485684c-f79f-42a9-a6c9-e22cde9c6d79"}
                                        })
                                        .then(res => {
                                            if (res.data.resultCode == 0) {
                                                props.follow(u.id)
                                            }
                                        })
                                }}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div> {u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        {/*<span>*/}
                        {/*    <div>{u.location.city}</div>*/}
                        {/*    <div>{u.location.country}</div>*/}
                        {/*</span>*/}
                    </span>
                </div>)}
        </div>
    )
}