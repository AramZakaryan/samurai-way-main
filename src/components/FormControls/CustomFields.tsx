import React from "react"
import S from "./CustomField.module.css"

export const CustomTextarea: React.FC<any> = ({ input, meta, ...restProps }) => {
  let { error: errorMsg, touched: fieldTouched }: { error: string; touched: boolean } = meta
  // let errorMsg: string = meta.error
  // let fieldTouched: boolean = meta.touched
  return (
    <div className={`${S.formControl} ${fieldTouched && errorMsg && S.formError}`}>
      <div>
        <textarea {...input} {...restProps} />
      </div>
      <span>{fieldTouched && errorMsg}</span>
    </div>
  )
}

export const CustomInput: React.FC<any> = ({ input, meta, ...restProps }) => {
  let { error: errorMsg, touched: fieldTouched }: { error: string; touched: boolean } = meta
  // let errorMsg: string = meta.error
  // let fieldTouched: boolean = meta.touched
  return (
    <div className={`${S.formControl} ${fieldTouched && errorMsg && S.formError}`}>
      <div>
        <input {...input} {...restProps} />
      </div>
      <span>{fieldTouched && errorMsg}</span>
    </div>
  )
}

export const CustomCheckbox: React.FC<any> = ({ input, meta, ...restProps }) => {
    let { error: errorMsg, touched: fieldTouched }: { error: string; touched: boolean } = meta
    // let errorMsg: string = meta.error
    // let fieldTouched: boolean = meta.touched

    console.log(input)
    return (
        <div className={`${S.formControl} ${fieldTouched && errorMsg && S.formError}`}>
            <div>
                <input type={"checkbox"} {...input} {...restProps} checked={input.value}/>
            </div>
            <span>{fieldTouched && errorMsg}</span>
        </div>
    )
}