import React from "react";
import S from "./Users.module.css"
import axios from "axios";
import nomiage from "../../assets/images/noimage.png"


export type UsersClassPropsType = {
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
            // location: {
            //     city: string
            //     country: string
            // }
        }[]
    }
    setNewUsers: (newUsers: {
        name: string
        id: number
        uniqueUrlName: string | null
        photos: {
            small: string | null
            large: string | null
        }
        status: string
        followed: boolean
        // location: {
        //     city: string
        //     country: string
        // }
    }[]) => void
    follow: (userID: number) => void
    unfollow: (userID: number) => void
}

export class UsersClass extends React.Component<any, any>{
    render () {

    }
}