import React from "react";
import {stateReduxType} from "../../redux/storeRedux";
import {Dispatch} from "redux";
import {
    follow,
    setNewUsers,
    setSelectedPage,
    setTotalUserCount,
    toggleIsFetching, toggleIsFollowingInProgress,
    unfollow
} from "../../redux/usersReducer";
import {connect} from "react-redux";
import axios from "axios";
import {UsersPresentational} from "./UsersPresentational";
import isFetchingSpinner from "../../assets/images/isFetchingSpinner.svg"
import {Preloader} from "../common/Preloader/Preloader";
import {api} from "../../api/api";


export type UsersClassContainerPropsType = {
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
        isFetching: boolean
        allFollowingInProgress: number[]
    }
    setNewUsers: (newUsers: {
        name: string
        id: number
        uniqueUrlName: string | null
        photos: {
            small: string | null
            large: string | null
        }
        status: string | null
        followed: boolean
    }[]) => void
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setSelectedPage: (selectedPageNumber: number) => void
    setTotalUserCount: (totalUserCount: number) => void
    /** P.S.(Aram) function for activating / disactivating spinner
     */
    toggleIsFetching: (isFetching: boolean) => void
    /** P.S.(Aram) function for activating / disactivating button
     */
    toggleIsFollowingInProgress: (userID: number, followingInProgress: boolean) => void
}


export class UsersClassContainer extends React.Component<UsersClassContainerPropsType, any> {
    constructor(props: UsersClassContainerPropsType) {
        super(props)
    }

    componentDidMount() {
        this.props.toggleIsFetching(true)
        api.getUsers(this.props.usersPageData.selectedPage, this.props.usersPageData.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setNewUsers(data.items)
                this.props.setTotalUserCount(data.totalCount)
            })

    }

    setSelectedPageHandler = (selectedPageNumber: number) => {
        this.props.toggleIsFetching(true)
        this.props.setSelectedPage(selectedPageNumber)
        api.getUsers(selectedPageNumber, this.props.usersPageData.pageSize)
            .then(data => {
                    this.props.toggleIsFetching(false)
                    this.props.setNewUsers(data.items)
                    this.props.setTotalUserCount(data.totalCount)
                }
            )
    }

    render() {
        return (<>
            {this.props.usersPageData.isFetching
                ? <Preloader/>
                : <UsersPresentational usersPageData={this.props.usersPageData}
                                       follow={this.props.follow}
                                       unfollow={this.props.unfollow}
                                       setSelectedPage={this.setSelectedPageHandler}
                                       toggleIsFollowingInProgress = {this.props.toggleIsFollowingInProgress}
                />
            }
        </>)
    }
}


type MapStateToPropsType = Pick<UsersClassContainerPropsType, "usersPageData">

type MapDispatchToPropsType = Pick<UsersClassContainerPropsType,
    "setNewUsers"
    | "follow"
    | "unfollow"
    | "setSelectedPage"
    | "setTotalUserCount"
    | "toggleIsFetching"
    | "toggleIsFollowingInProgress"
>


const mapStateToProps = (state: stateReduxType): MapStateToPropsType => {
    return {
        usersPageData: state.usersPageData,
    }
}


const mapDispatchToProps: MapDispatchToPropsType = {
    setNewUsers,
    follow,
    unfollow,
    setSelectedPage,
    setTotalUserCount,
    toggleIsFetching,
    toggleIsFollowingInProgress
}

export const UsersConnectContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClassContainer)



