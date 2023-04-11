import React from "react"
import cn from "classnames"
import style from "./style.module.scss"

export default ({ children, columns, compact }) => {
  const hoverRef = React.useRef(null)

  let hoverRow, unhoverRow
  hoverRow = e => {
    const tr = e.target.closest("tr")
    const hover = hoverRef.current
    if (!tr) return
    if (tr.parentNode.tagName === "THEAD") return (hover.hidden = true)

    hover.hidden = false
    hover.style.top = `${tr.offsetTop}px`
    hover.style.height = `${tr.offsetHeight}px`
  }

  unhoverRow = () => {
    hoverRef.current.hidden = true
  }

  return (
    <div
      className={cn(style.wrap, compact && style.compact, style.clickable)}
      onMouseMove={hoverRow}
      onMouseLeave={unhoverRow}
    >
      <table className={style.table}>
        {columns && (
          <thead>
            <tr>
              {columns.map((column, i) => (
                <th key={i}>{column}</th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>{children}</tbody>
      </table>
      <div ref={hoverRef} className={style.hoverRow} hidden />
    </div>
  )
}
