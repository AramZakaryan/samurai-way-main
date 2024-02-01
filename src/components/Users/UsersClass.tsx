import React, {MouseEventHandler} from "react";
import axios from "axios";
import nomiage from "../../assets/images/noimage.png";
import S from "./Users.module.css";
import {setSelecetedPageAC} from "../../redux/usersReducer";


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
        }[]
        pageSize: number
        totalUserCount: number
        selectedPage: number
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
    }[]) => void
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setSelectedPage: (selectedPageNumber: number) => void
    setTotalUserCount: (totalUserCount: number) => void
}


export class UsersClass extends React.Component<UsersClassPropsType, any> {
    constructor(props: UsersClassPropsType) {
        super(props)


        // getUsers = () => axios.get("https://social-network.samuraijs.com/api/1.0/users")
        //     .then(response => this.props.setNewUsers(response.data.items))

        // axios.get("https://social-network.samuraijs.com/api/1.0/users")
        //     .then(response => this.props.setNewUsers(response.data.items))

    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users/?page=${this.props.usersPageData.selectedPage}&count=${this.props.usersPageData.pageSize}`)
            .then(response => {
                this.props.setNewUsers(response.data.items)
                this.props.setTotalUserCount(response.data.totalCount)
            })
    }

    setSelectedPageHandler = (p: number) => {
        this.props.setSelectedPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users/?page=${p}&count=${this.props.usersPageData.pageSize}`)
            .then(response => {
                    this.props.setNewUsers(response.data.items)
                    this.props.setTotalUserCount(response.data.totalCount)
                }
            )
    }

    render() {

        let pageCount = Math.ceil(this.props.usersPageData.totalUserCount / this.props.usersPageData.pageSize)
        let pages = []
        for (let i = 1; i <= Math.min(pageCount, 10); i++) {
            pages.push(i)
        }

        console.log(pages, "cucu", this.props.usersPageData.selectedPage)

        return (
            <div>
                <div>coucou users</div>
                <div>
                    {pages.map(p =>
                        <span key={p}
                              className={this.props.usersPageData.selectedPage === p ? S.selectedPage : ""}
                              onClick={() => this.setSelectedPageHandler(p)}
                        > {p} </span>)}
                    {pageCount > 10 && <span> ... {pageCount} </span>}
                </div>

                {/*<button onClick={this.getUsers}>Get Users</button>*/}

                {this.props.usersPageData.usersData.map(u =>
                    <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small ?? nomiage} className={S.userPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button>
                                : <button onClick={() => this.props.follow(u.id)}>Follow</button>}
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
}

