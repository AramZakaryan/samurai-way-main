import React from "react";
import {Users, UsersPropsType} from "./Users";
import {UsersClass} from "./UsersClass";
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
        setNewUsers: (newUsers:
                          {
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
                          }[]) => {
            dispatch(setNewUsersAC(newUsers))
        },
        follow: (userID: number) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID: number) => {
            dispatch(unfollowAC(userID))
        }
    }
}

export const UsersConnectContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass) // (Users)



