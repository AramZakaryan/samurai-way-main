import React from "react";
import {Field, reduxForm} from "redux-form";


const LoginForm = (props:any) => {
    return (
        <form onSubmit={props.onSubmit}>
            <div>
                <Field component={"input"} name={"login"} placeholder={"login"}/>
            </div>
            <div>
                <Field component={"input"} name={"password"} placeholder={"password "}/>
            </div>
            <div>
                <Field component={"input"} name={"rememberMe"} type={"checkbox"}/>
                Remember Me
            </div>
            <div>
                <button type={"submit"}>Submit</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: "login"})(LoginForm)
export const Login = () => {
    const onSubmitHandler = (data:any) =>{
        console.log(data)
    }
    return (<>
        <div>coucou Login</div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmitHandler}/>
    </>)
}