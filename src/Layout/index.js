import React from "react"
import TopBar from "./TopBar/Index"
import Sidebar from "./Sidebar"
import style from "./style.module.scss"

const index = ({ children }) => {
  return(
  <div className={style.page}>
    <TopBar />
    <div className={style.columns}>
      <Sidebar />
      <div className={style.content}>{children}</div>
    </div>
  </div>
  )
}

export default index;
