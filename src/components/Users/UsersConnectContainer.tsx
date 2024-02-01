import React from "react";
// import {Users, UsersPropsType} from "./Users";
import {UsersClassPropsType} from "./UsersClass";
import {stateReduxType} from "../../redux/storeRedux";
import {Dispatch} from "redux";
import {followAC, setNewUsersAC, setSelecetedPageAC, setTotalUserCountAC, unfollowAC} from "../../redux/usersReducer";
import {connect} from "react-redux";
import {UsersClass} from "./UsersClass";


type MapStateToPropsType = Pick<UsersClassPropsType, "usersPageData">

type MapDispatchToPropsType = Pick<UsersClassPropsType, "setNewUsers" | "follow" | "unfollow" | "setSelectedPage" | "setTotalUserCount">


const mapStateToProps = (state: stateReduxType): MapStateToPropsType => {
    return {
        usersPageData: state.usersPageData,
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
        },
        setSelectedPage: (selectedPageNumber: number) => {
            dispatch(setSelecetedPageAC(selectedPageNumber))
        },
        setTotalUserCount: (totalUserCount: number) => {
            dispatch(setTotalUserCountAC(totalUserCount))
        }
    }
}

// export const UsersConnectContainer = connect(mapStateToProps, mapDispatchToProps) (Users)
export const UsersConnectContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass)



