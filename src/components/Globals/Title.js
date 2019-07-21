import React from "react"

export default function Title({ title }) {
  return (
    <div className="row">
      <div className="col text-center text-weight-bold mb-3">
        <h1>{title}</h1>
      </div>
    </div>
  )
}
