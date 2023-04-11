import React from "react"
import logo from "../../../assets/images/logo2.png"
import cn from "classnames"
import style from "./style.module.scss"

export default ({ children, className }) => (
  <div className={style.page}>
    <div className={cn(style.wrap, className)}>
      <img className={style.logo} src={logo} alt="logo" />
      {children}
    </div>
  </div>
)
