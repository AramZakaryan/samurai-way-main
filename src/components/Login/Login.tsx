import React from "react"
import { Field, InjectedFormProps, reduxForm } from "redux-form"
import { CustomInput } from "components/FormControls/CustomFields"
import { validateMaxLength, validateRequiredField } from "utils/validators/validators"

type FormDataType = {
  login: string
  password: string
  rememberMe: boolean
}

const validateMaxLength10 = validateMaxLength(10)

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={CustomInput}
          name={"login"}
          placeholder={"login"}
          validate={[validateRequiredField, validateMaxLength10]}
        />
      </div>
      <div>
        <Field
          component={CustomInput}
          name={"password"}
          placeholder={"password "}
          validate={[validateRequiredField, validateMaxLength10]}
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
export const Login = () => {
  const onSubmitHandler = (data: FormDataType) => {
    console.log(data)
  }
  return (
    <>
      <div>coucou Login</div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmitHandler} />
    </>
  )
}
