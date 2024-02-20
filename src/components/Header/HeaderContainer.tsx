import React from "react";
import {HeaderPresent} from "./HeaderPresent";
import axios from "axios";
import {log} from "node:util";
import {connect} from "react-redux";
import {stateReduxType, storeReduxType} from "../../redux/storeRedux";
import {AuthPartDataType} from "../../redux/types";
import {AuthDataFromApiType, setUserData} from "../../redux/authReducer";
import {api} from "../../api/api";

type HeaderClassContainerType = {
    authPartData: {
        authData: {
            userId: number | null
            login: string | null // = user name
            email: string | null
            isAuth: boolean
        }
    }
    setUserData: (authDataFromApi: AuthDataFromApiType) => void
}


export class HeaderClassContainer extends React.Component <HeaderClassContainerType, any> {

    constructor(props: HeaderClassContainerType) {
        super(props);
    }

    componentDidMount() {
        api.auth()
            .then(data => {
                data.resultCode === 0 // checking: 0 means user exists
                &&
                this.props.setUserData(data.data)
            })
    }

    render() {
        return (
            <HeaderPresent {...this.props}/>
        )
    }


}

type MapStateToPropsType = Pick<HeaderClassContainerType, "authPartData">

type MapDispatchToPropsType = Pick<HeaderClassContainerType, "setUserData">

const mapStateToProps = (state: stateReduxType): MapStateToPropsType => ({
    authPartData: state.authPartData
})


const mapDispatchToProps: MapDispatchToPropsType = {
    setUserData
}


export const HeaderConnectContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderClassContainer)