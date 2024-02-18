import React from "react";
import {HeaderPresent} from "./HeaderPresent";
import axios from "axios";
import {log} from "node:util";


export class HeaderContainer extends React.Component {

    componentDidMount() {
        axios("https://social-network.samuraijs.com/api/1.0//auth/me", {withCredentials:true})
            .then(res=>console.log(res))
    }

    render() {
        return (
            <HeaderPresent/>
        )
    }


}