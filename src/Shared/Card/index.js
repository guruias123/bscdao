import React from "react"
import style from "./style.module.scss"

export default ({ children, title, actions }) => (
  <div className={style.card}>
    <div className={style.header}>
      {title && (
        <div className={style.title}>
          {title.split(" ").map((word, i) => (
            <span key={i} className={style.word}>
              {word}
            </span>
          ))}
        </div>
      )}
      {actions}
    </div>
    <div className={style.content}>{children}</div>
  </div>
)
