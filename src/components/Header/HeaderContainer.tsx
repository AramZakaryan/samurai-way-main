import React from "react";
import {HeaderPresent} from "./HeaderPresent";
import {connect} from "react-redux";
import {stateReduxType} from "../../redux/storeRedux";
import {AuthPartDataType} from "../../redux/types";
import {setUserData} from "../../redux/authReducer";

type HeaderClassContainerPropsType = {
    authPartData: AuthPartDataType
    setUserData: () => void
}


export class HeaderClassContainer extends React.Component <HeaderClassContainerPropsType, any> {

    constructor(props: HeaderClassContainerPropsType) {
        super(props);
    }

    componentDidMount() {
        this.props.setUserData()
        // api.auth()
        //     .then(data => {
        //         data.resultCode === 0 // checking: 0 means user exists
        //         &&
        //         this.props.setUserData(data.data)
        //     })
    }

    render() {
        return (
            <HeaderPresent {...this.props}/>
        )
    }


}

type MapStateToPropsType = Pick<HeaderClassContainerPropsType, "authPartData">

type MapDispatchToPropsType = Pick<HeaderClassContainerPropsType, "setUserData">

const mapStateToProps = (state: stateReduxType): MapStateToPropsType => ({
    authPartData: state.authPartData
})


const mapDispatchToProps: MapDispatchToPropsType = {
    setUserData
}


export const HeaderConnectContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderClassContainer)