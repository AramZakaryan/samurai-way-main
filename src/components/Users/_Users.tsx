import React from "react";
// import S from "./Users.module.css"
// import axios from "axios";
// import noimage from "../../assets/images/noimage.png"
//
//
// export type UsersPropsType = {
//     usersPageData: {
//         usersData: {
//             name: string
//             id: number
//             uniqueUrlName: string | null
//             photos: {
//                 small: string | null
//                 large: string | null
//             }
//             status: string
//             followed: boolean
//         }[]
//         pageSize: number
//     }
//     setNewUsers: (newUsers: {
//         name: string
//         id: number
//         uniqueUrlName: string | null
//         photos: {
//             small: string | null
//             large: string | null
//         }
//         status: string
//         followed: boolean
//     }[]) => void
//     follow: (userID: number) => void
//     unfollow: (userID: number) => void
// }
//
// export const Users: React.FC<UsersPropsType> = (props) => {
//
//     const getUsers = () => axios.get("https://social-network.samuraijs.com/api/1.0/users")
//         // .then(response => console.log(response.data.items))
//         // .then(response => setTimeout(() => props.setNewUsers(response.data.items), 2000))
//         .then(response => props.setNewUsers(response.data.items))
//
//
//     return (
//         <div>
//             <div>coucou users   </div>
//
//             <button onClick={getUsers}>Get Users</button>
//
//             {props.usersPageData.usersData.map(u =>
//                 <div key={u.id}>
//                     <span>
//                         <div>
//                             <img src={u.photos.small ?? noimage} className={S.userPhoto}/>
//                         </div>
//                         <div>
//                             {u.followed
//                                 ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
//                                 : <button onClick={() => props.follow(u.id)}>Follow</button>}
//                         </div>
//                     </span>
//                     <span>
//                         <span>
//                             <div> {u.name}</div>
//                             <div>{u.status}</div>
//                         </span>
//                         {/*<span>*/}
//                         {/*    <div>{u.location.city}</div>*/}
//                         {/*    <div>{u.location.country}</div>*/}
//                         {/*</span>*/}
//
//                     </span>
//                 </div>)}
//
//
//         </div>
//     )
// }