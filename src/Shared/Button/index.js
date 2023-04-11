import React from "react"
import cn from "classnames"
import style from "./style.module.scss"

export default ({
  component: Component = "div",
  children,
  className,
  secondary,
  primary,
  outline,
  light,
  shadow,
  icon,
  ...props
}) => (
  <Component
    {...props}
    className={cn(
      style.button,
      className,
      primary && style.primary,
      secondary && style.secondary,
      outline && style.outline,
      light && style.light,
      shadow && style.shadow
    )}
  >
    {children}
    {icon && <img className={style.icon} src={icon} alt="" />}
  </Component>
)
