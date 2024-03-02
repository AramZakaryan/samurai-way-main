import S from "./Users.module.css";
import nomiage from "../../assets/images/noimage.png";
import React from "react";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {api} from "../../api/api";


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
        allFollowingInProgress: number[]
    }
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    /** P.S.(Aram) function for activating / disactivating spinner
     */
    setSelectedPage: (selectedPageNumber: number) => void
    /** P.S.(Aram) function for activating / disactivating button
     */
    toggleIsFollowingInProgress: (userId: number, followingInProgress: boolean) => void
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
                                ? <button
                                    disabled={props.usersPageData.allFollowingInProgress.some(el => el === u.id)} // = true
                                    onClick={() => {
                                        props.toggleIsFollowingInProgress(u.id, true)
                                        api.unfollowUser(u.id)
                                            .then(res => {
                                                if (res.resultCode == 0) {
                                                    props.unfollow(u.id)
                                                }
                                                props.toggleIsFollowingInProgress(u.id, false)
                                            })
                                    }}>Unfollow</button>
                                : <button
                                    disabled={props.usersPageData.allFollowingInProgress.some(el => el === u.id)} // = true
                                    onClick={() => {
                                        props.toggleIsFollowingInProgress(u.id, true)
                                        api.followUser(u.id)
                                            .then(res => {
                                                if (res.resultCode == 0) {
                                                    props.follow(u.id)
                                                }
                                                props.toggleIsFollowingInProgress(u.id, false)
                                            })
                                    }}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div> {u.name}</div>
                            <div>{u.status}</div>
                        </span>
                    </span>
                </div>)}
        </div>
    )
}