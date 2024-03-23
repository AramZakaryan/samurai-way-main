import React from "react"
import isFetchingSpinner from "../../../assets/images/isFetchingSpinner.svg"

export const Preloader: React.FC = () => {
  return (
    <div>
      <img src={isFetchingSpinner} />
    </div>
  )
}
