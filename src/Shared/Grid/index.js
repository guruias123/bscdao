import React from "react"
import style from "./style.module.scss"

export const Columns = ({ children }) => (
  <div className={style.columns}>{children}</div>
)

export const SmallColumn = ({ children }) => (
  <div className={style.smallColumn}>{children}</div>
)

export const WideColumn = ({ children }) => (
  <div className={style.wideColumn}>{children}</div>
)
