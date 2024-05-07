import React, {useState} from "react"
import {Field, InjectedFormProps, reduxForm} from "redux-form"
import {CustomInput} from "components/FormControls/CustomFields"
import {validateMaxLength, validateRequiredField} from "utils/validators/validators"
import {AuthPartDataType} from "redux/types"
import {Redirect} from "react-router-dom"
import S from "./../FormControls/CustomField.module.css"

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha?: string
}

type AdditionalProps = {
    captchaURL: string | null
}


const validateMaxLength50 = validateMaxLength(50)

const LoginForm: React.FC<InjectedFormProps<FormDataType, AdditionalProps> & AdditionalProps> = ({
                                                                                                     handleSubmit,
                                                                                                     error,
                                                                                                     captchaURL
                                                                                                 }) => {

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field
                    component={CustomInput}
                    name={"email"}
                    placeholder={"email"}
                    validate={[validateRequiredField, validateMaxLength50]}
                />
            </div>
            <div>
                <Field
                    // type={"password"}
                    component={CustomInput}
                    name={"password"}
                    placeholder={"password"}
                    validate={[validateRequiredField, validateMaxLength50]}
                />

            </div>
            <div>
                <Field component={CustomInput}
                       name={"rememberMe"}
                       type={"checkbox"}/>
                Remember Me
            </div>

            {captchaURL &&
                <div>
                    <Field
                        // type={"password"}
                        component={CustomInput}
                        name={"captcha"}
                        placeholder={"captcha"}
                        // validate={[validateRequiredField, validateMaxLength50]}
                    />

                    <div><img src={captchaURL} alt={"captcha"}/></div>
                </div>}
            <div className={error && S.formSummaryError}>{error}</div>
            <div>
                <button type={"submit"}>Submit</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType, AdditionalProps>({form: "loginForm"})(LoginForm)

export type LoginPresentationalPropsType = {
    authPartData: AuthPartDataType
    login: (email: string, password: string, rememberMe: boolean, captcha?: string) => void
    logout: () => void
}

export const LoginPresentational: React.FC<LoginPresentationalPropsType> = ({
                                                                                login,
                                                                                authPartData,
                                                                            }) => {

    const [captcha, setCaptcha] = useState("")

    const onSubmitHandler = (data: FormDataType) => {
        login(data.email, data.password, data.rememberMe, data.captcha)
    }

    if (authPartData.authData.isAuth) {
        return <Redirect to={"/profile"}/>
    }


    return (
        <>
            <div>coucou Login</div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmitHandler}
                            captchaURL={authPartData.authData.captcha}
            />
        </>
    )
}


type CoderType = {
    techs: string[],
    country: string
}

type DesignerType = {
    highEducation: boolean,
    experience: number
}
