import React from "react";
import {stateReduxType} from "../../redux/storeRedux";
import {
    follow,
    getUsers,
    setSelectedPage,
    toggleIsFollowingInProgress, unfollow,
} from "../../redux/usersReducer";
import {connect} from "react-redux";
import {UsersPresentational} from "./UsersPresentational";
import {Preloader} from "../common/Preloader/Preloader";
import {UsersPageDataType} from "../../redux/types";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {ProfileClassContainer} from "../Profile/ProfileContainer";


////////// UsersClassContainer

export type UsersClassContainerPropsType = {
    usersPageData: UsersPageDataType
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setSelectedPage: (selectedPageNumber: number) => void
    getUsers: (selectedPage: number, pageSize: number) => void
}

export class UsersClassContainer extends React.Component<UsersClassContainerPropsType, any> {
    constructor(props: UsersClassContainerPropsType) {
        super(props)
    }

    componentDidMount() {
        this.props.getUsers(this.props.usersPageData.selectedPage, this.props.usersPageData.pageSize)
    }

    setSelectedPageHandler = (selectedPageNumber: number) => {
        this.props.setSelectedPage(selectedPageNumber)
        this.props.getUsers(selectedPageNumber, this.props.usersPageData.pageSize)
    }

    render() {
        return (<>
            {this.props.usersPageData.isFetching
                ? <Preloader/>
                : <UsersPresentational usersPageData={this.props.usersPageData}
                                       follow={this.props.follow}
                                       unfollow={this.props.unfollow}
                                       setSelectedPage={this.setSelectedPageHandler}
                />
            }
        </>)
    }
}


////////// UsersWithAuthRedirectComponent

const UsersWithAuthRedirectComponent = withAuthRedirect(UsersClassContainer)


////////// UsersConnectContainer

type MapStateToPropsType = Pick<UsersClassContainerPropsType, "usersPageData">

type MapDispatchToPropsType = Pick<UsersClassContainerPropsType,
    "follow"
    | "unfollow"
    | "setSelectedPage"
    | "getUsers"
>

const mapStateToProps = (state: stateReduxType): MapStateToPropsType => {
    return {
        usersPageData: state.usersPageData,
    }
}

const mapDispatchToProps: MapDispatchToPropsType = {
    follow,
    unfollow,
    setSelectedPage,
    getUsers
}

export const UsersConnectContainer = connect(mapStateToProps, mapDispatchToProps)(UsersWithAuthRedirectComponent)


// General Structure
// UsersPresentational >>>
//    UsersClassContainer >>>
//       UsersWithAuthRedirectComponent >>>
//          UsersConnectContainer


