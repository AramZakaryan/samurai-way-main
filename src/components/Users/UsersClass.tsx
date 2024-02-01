import React from "react";
import axios from "axios";
import nomiage from "../../assets/images/noimage.png";
import S from "./Users.module.css";


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
}

export class UsersClass extends React.Component<UsersClassPropsType, any> {
    constructor(props:UsersClassPropsType) {
        super(props)


    // getUsers = () => axios.get("https://social-network.samuraijs.com/api/1.0/users")
    //     .then(response => this.props.setNewUsers(response.data.items))

        // axios.get("https://social-network.samuraijs.com/api/1.0/users")
        //     .then(response => this.props.setNewUsers(response.data.items))

    }

   componentDidMount() {
       axios.get("https://social-network.samuraijs.com/api/1.0/users")
           .then(response => this.props.setNewUsers(response.data.items))
   }

    render() {
        return (
            <div>
                <div>coucou users</div>

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