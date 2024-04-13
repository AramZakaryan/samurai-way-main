import React from "react"
import { Redirect } from "react-router-dom"
import { ReactComponent } from "*.svg"

/** ZA Wrapper by React.Suspense */
export function withSuspense(InitialComponent: React.ComponentType<any>) {
  return (
    <React.Suspense fallback={<div> loading in the process </div>}>
      <InitialComponent />
    </React.Suspense>
  )
}
