import S from "./Paginator.module.css"
import React, { useEffect, useState } from "react"


type PaginatorType = {
  totalItemsCount: number
  pageSize: number
  selectedPage: number
  setSelectedPage: (selectedPageNumber: number) => void
  portionSize?: number
}

export const Paginator: React.FC<PaginatorType> = ({
  totalItemsCount,
  pageSize,
  selectedPage,
  setSelectedPage,
  portionSize = 10,
}) => {
  let pageCount = Math.ceil(totalItemsCount / pageSize)
  let pages = []
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i)
  }

  let portionCount = Math.ceil(pageCount / portionSize)

  /** ZA: number of current portion */
  const [currPortion, setCurrPortion] = useState(Math.floor(selectedPage / portionSize) + 1)
  /** ZA: number of the page on the left of the current portion */
  let currPortionLeftPage = (currPortion - 1) * portionSize + 1
  /** ZA: number of the page on the right of the current portion */
  let currPortionRightPage = Math.min(currPortion * portionSize, pageCount)

  const leftButtonHandler = () => {
    setCurrPortion(currPortion - 1)
  }
  const rightButtonHandler = () => {
    setCurrPortion(currPortion + 1)
  }

  return (
    <div>
      {currPortion > 1 && <button onClick={leftButtonHandler}>left</button>}
      {pages
        .filter((p) => p <= currPortionRightPage && p >= currPortionLeftPage)
        .map((p) => (
          <span
            key={p}
            className={selectedPage === p ? S.selectedPage : ""}
            onClick={() => setSelectedPage(p)}
          >
            {" "}
            {p}{" "}
          </span>
        ))}
      {currPortion < portionCount && <button onClick={rightButtonHandler}>right</button>}

      {/*{pageCount > 10 && <span> ... {pageCount} </span>}*/}
    </div>
  )
}
