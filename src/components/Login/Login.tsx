import React from "react";
import {Field, reduxForm} from "redux-form";


const LoginForm = () => {
    return (
        <form>
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
    return (<>
        <div>coucou Login</div>
        <h1>Login</h1>
        <LoginReduxForm/>
    </>)
}