import React from "react";
import S from "./Users.module.css"
import axios from "axios";
import nomiage from "../../assets/images/noimage.png"



export type UsersPropsType = {
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

export const Users: React.FC<UsersPropsType> = (props) => {


    // // check if usersData is empty then set new users
    // !props.usersPageData.usersData.length && props.setNewUsers(
    //     [
    //         {
    //             id: 1,
    //             photoUrl: "https://i.imgur.com/xwQu3JU.jpeg",
    //             followed: false,
    //             fullName: "Dmitry",
    //             status: "I'm a boss.",
    //             location: {city: "Minsk", country: "Belorus"}
    //         },
    //         {
    //             id: 2,
    //             photoUrl: "https://preview.redd.it/brad-pitt-as-the-joker-on-a-movie-poster-for-an-upcoming-v0-n6t2q6nn8e0c1.jpg?width=768&format=pjpg&auto=webp&s=8cdb44bcf07549acb626fbd0de666037cfae0178",
    //             followed: true,
    //             fullName: "Sasha",
    //             status: "I'm a boss too.",
    //             location: {city: "Moscow", country: "Russia"}
    //         },
    //         {
    //             id: 3,
    //             photoUrl: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/a-romantic-portrait-of-joker-liliana-pop-schroffel.jpg",
    //             followed: false,
    //             fullName: "Andrew",
    //             status: "I'm a boss too.",
    //             location: {city: "Kiev", country: "Ukraine"}
    //         }
    //     ]
    // )

    axios.get("https://social-network.samuraijs.com/api/1.0/users")
        // .then(response => console.log(response.data.items))
        .then(response => setTimeout(()=>props.setNewUsers(response.data.items),2000))
        // .then(response=> props.setNewUsers(response.data.items))


    return (
        <div>
            coucou users

            {props.usersPageData.usersData.map(u =>
                <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small??nomiage} className={S.userPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                                : <button onClick={() => props.follow(u.id)}>Follow</button>}
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