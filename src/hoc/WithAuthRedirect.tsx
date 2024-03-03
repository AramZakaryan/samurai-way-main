import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {stateReduxType} from "../redux/storeRedux";


/** (Aram) Wrapper HOC which redirects to login page if the user is not authorised
 */
export const withAuthRedirect = (InitialComponent: any) => {

    class ClassComponent extends React.Component<any> {
        render() {
            if (!this.props.isAuth) {
                return <Redirect to={"/login"}/>
            }
            return <InitialComponent {...this.props}/>;
        }
    }

    const mapStateToProps = (state: stateReduxType) => {
        return {
            isAuth: state.authPartData.authData.isAuth
        }

    }

    const ConnectComponent = connect(mapStateToProps)(ClassComponent)

    return ConnectComponent

    // Structure
    // InitialComponent >>>
    //    ClassComponent >>>
    //       ConnectComponent

}