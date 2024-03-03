import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {stateReduxType} from "../redux/storeRedux";


type mapStateToPropsType = {
    isAuth: boolean
}

type lala = mapStateToPropsType

const mapStateToProps = (state: stateReduxType): mapStateToPropsType => {
    return {
        isAuth: state.authPartData.authData.isAuth
    }
}




/** (Aram) Wrapper HOC which redirects to login page if the user is not authorised
 */
export function withAuthRedirect<T>(InitialComponent: React.ComponentType<T>) {

    function TransformerComponent(props: mapStateToPropsType) {
        const {isAuth, ...restProps} = props
        // console.log(props)
        if (!isAuth) {
            return <Redirect to={"/login"}/>
        }
        return <InitialComponent {...restProps as T} />;
    }

    const ConnectedComponent = connect(mapStateToProps)(TransformerComponent)

    return ConnectedComponent

    // Structure
    // InitialComponent >>>
    //    TransformerComponent >>>
    //       ConnectedComponent

}


// // version with class component inside

// export const withAuthRedirect = (InitialComponent: any) => {
//
//     class ClassComponent extends React.Component<any> {
//         render() {
//             if (!this.props.isAuth) {
//                 return <Redirect to={"/login"}/>
//             }
//             return <InitialComponent {...this.props}/>;
//         }
//     }
//
//     const mapStateToProps = (state: stateReduxType) => {
//         return {
//             isAuth: state.authPartData.authData.isAuth
//         }
//
//     }
//
//     const ConnectComponent = connect(mapStateToProps)(ClassComponent)
//
//     return ConnectComponent
//
//     // Structure
//     // InitialComponent >>>
//     //    ClassComponent >>>
//     //       ConnectComponent
//
// }




