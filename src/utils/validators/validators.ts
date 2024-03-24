export const validateMaxLength = (maxlength: number) => (value: string) => {
  if (value.length > maxlength) return `Max length should be ${maxlength}.`
  return undefined
}

export const validateRequiredField = (value: string) => {
  if (value) return undefined
  return "Field should be completed."
}
