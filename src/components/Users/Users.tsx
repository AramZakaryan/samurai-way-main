import React from "react";
import S from "./Users.module.css"
import {followAC, setNewUsersAC, unfollowAC} from "../../redux/usersReducer";

export type UsersPropsType = {
    usersData: {
        id: number
        followed: boolean
        fullName: string
        status: string
        location: {
            city: string
            country: string
        }
    }[]
    setNewUsersAC: (newUsers: any)=>void
    follow: (userID:number) => void
    unfollow: (userID:number) => void
}

export const Users: React.FC<UsersPropsType> = (props) => {

    return (
        <div>

            coucou users

        </div>
    )
}