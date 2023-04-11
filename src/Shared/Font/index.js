import React from "react"
import cn from "classnames"
import style from "./style.module.scss"

export default ({ children, color, pointer, ...props }) => (
  <span
    {...props}
    className={cn(color && style[color], pointer && style.pointer)}
  >
    {children}
  </span>
)
