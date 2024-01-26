import React from "react";
// import {Users, UsersPropsType} from "./Users";
// import {stateReduxType} from "../../redux/storeRedux";
// import {Dispatch} from "redux";
// import {followAC, setNewUsersAC, unfollowAC} from "../../redux/usersReducer";
// import {connect} from "react-redux";
//
//
// type MapStateToPropsType = Pick<UsersPropsType, "usersData">
//
// type MapDispatchToPropsType = Pick<UsersPropsType, "setNewUsersAC" | "follow" | "unfollow">
//
//
// const mapStateToProps = (state: stateReduxType): MapStateToPropsType => { //////////////////////////any
//     return {
//         usersData: state.usersData
//     }
// }
//
// // {usersData: {id: number, followed: boolean, fullName: string, status: string, location: {city: string, country: string}}[]}
// //
// // {usersData: {id: number, followed: boolean, fullName: string, status: string, location: {city: string, country: string}}[]}
// const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {  ///////////////////////////any
//     return {
//         setNewUsersAC: (newUsers: any)=>{
//             dispatch(setNewUsersAC(newUsers))
//         },
//         follow: (userID:number) => {
//             dispatch(followAC(userID))
//         },
//         unfollow: (userID:number) => {
//             dispatch(unfollowAC(userID))
//         }
//     }
// }
//
// export const UsersConnectContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
//
//
//
