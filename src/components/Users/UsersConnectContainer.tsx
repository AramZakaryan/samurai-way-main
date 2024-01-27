import React from "react";
import {Users, UsersPropsType} from "./Users";
import {stateReduxType} from "../../redux/storeRedux";
import {Dispatch} from "redux";
import {followAC, setNewUsersAC, unfollowAC} from "../../redux/usersReducer";
import {connect} from "react-redux";


type MapStateToPropsType = Pick<UsersPropsType, "usersPageData">

type MapDispatchToPropsType = Pick<UsersPropsType, "setNewUsers" | "follow" | "unfollow">


const mapStateToProps = (state: stateReduxType): MapStateToPropsType => {
    return {
        usersPageData: state.usersPageData
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        setNewUsers: (newUsers: {
            id: number
            photoUrl: string
            followed: boolean
            fullName: string
            status: string
            location: {
                city: string
                country: string
            }
        }[])=>{
            dispatch(setNewUsersAC(newUsers))
        },
        follow: (userID:number) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID:number) => {
            dispatch(unfollowAC(userID))
        }
    }
}

export const UsersConnectContainer = connect(mapStateToProps, mapDispatchToProps)(Users)


