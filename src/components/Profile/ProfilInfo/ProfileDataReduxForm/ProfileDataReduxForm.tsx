import React from "react";
import S from "./ProfileDataReduxForm.module.css";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {CustomInput, CustomCheckbox, CustomTextarea} from "../../../FormControls/CustomFields";
import {validateMaxLength, validateRequiredField} from "../../../../utils/validators/validators";
import {GetUserApiType} from "../../../../redux/types";

type Props =  Omit<GetUserApiType, "userId" | "photos">


const validateMaxLength50 = validateMaxLength(50)

const ProfileDataForm = ({handleSubmit, initialValues, error}: InjectedFormProps<Props>) => {

    return (<form onSubmit={handleSubmit}>
        <div>
            <Field
                component={CustomInput}
                name={"aboutMe"}
                placeholder={"aboutMe8"}
                // validate={[validateRequiredField, validateMaxLength50]}
            />
        </div>
        <div>
            <Field
                component={CustomCheckbox}
                name={"lookingForAJob"}
                placeholder={"lookingForAJob"}
                // validate={[validateRequiredField, validateMaxLength50]}
            />
        </div>
        <div>
            <Field
                component={CustomTextarea}
                name={"lookingForAJobDescription"}
                placeholder={"lookingForAJobDescription"}
                // validate={[validateRequiredField, validateMaxLength50]}
            />
        </div>
        <div>
            <Field
                component={CustomInput}
                name={"fullName"}
                placeholder={"fullName"}
                validate={[validateRequiredField, validateMaxLength50]}
            />
        </div>
        <b>contacts: </b>
        <div className={S.contacts}>
            {initialValues.contacts && Object.entries(initialValues.contacts).map(([k, v]) =>
                <Field key={k}
                       component={CustomInput}
                       name={`contacts.${k}`}
                       placeholder={k}
                    // validate={[validateRequiredField, validateMaxLength50]}
                />)}
        </div>
        <div className={error && S.formSummaryError}>{error}</div>
        <button type={"submit"}>Submit</button>
    </form>)
}

export const ProfileDataReduxForm = reduxForm<Props>({form: "profileDataForm"})(ProfileDataForm)


