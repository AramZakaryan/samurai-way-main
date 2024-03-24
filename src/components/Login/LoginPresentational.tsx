import React from "react"
import { Field, InjectedFormProps, reduxForm } from "redux-form"
import { CustomInput } from "components/FormControls/CustomFields"
import { validateMaxLength, validateRequiredField } from "utils/validators/validators"
import { AuthPartDataType } from "redux/types"
import { Redirect } from "react-router-dom"

type FormDataType = {
  email: string
  password: string
  rememberMe: boolean
}

const validateMaxLength50 = validateMaxLength(50)

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
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
          placeholder={"password "}
          validate={[validateRequiredField, validateMaxLength50]}
        />
      </div>
      <div>
        <Field component={CustomInput} name={"rememberMe"} type={"checkbox"} />
        Remember Me
      </div>
      <div>
        <button type={"submit"}>Submit</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm<FormDataType>({ form: "login" })(LoginForm)

export type LoginPresentationalPropsType = {
  authPartData: AuthPartDataType
  login: (email: string, password: string, rememberMe: boolean) => void
  logout: () => void
}

export const LoginPresentational: React.FC<LoginPresentationalPropsType> = (props) => {
  const onSubmitHandler = (data: FormDataType) => {
    props.login(data.email, data.password, data.rememberMe)
  }

  if (props.authPartData.authData.isAuth) {
    return <Redirect to={"/profile"} />
  }

  return (
    <>
      <div>coucou Login</div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmitHandler} />
    </>
  )
}
