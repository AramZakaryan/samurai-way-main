import S from "./Paginator.module.css"
import React from "react"

type PaginatorType = {
  totalUserCount: number
  pageSize: number
  selectedPage: number
  setSelectedPage: (selectedPageNumber: number) => void
}

export const Paginator: React.FC<PaginatorType> = ({
  totalUserCount,
  pageSize,
  selectedPage,
  setSelectedPage,
}) => {
  let pageCount = Math.ceil(totalUserCount / pageSize)
  let pages = []
  for (let i = 1; i <= Math.min(pageCount, 10); i++) {
    pages.push(i)
  }

  return (
    <div>
      {pages.map((p) => (
        <span
          key={p}
          className={selectedPage === p ? S.selectedPage : ""}
          onClick={() => setSelectedPage(p)}
        >
          {" "}
          {p}{" "}
        </span>
      ))}
      {pageCount > 10 && <span> ... {pageCount} </span>}
    </div>
  )
}
